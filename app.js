// Zustand
let activeWorkoutId = 'workout1';
let exercises = [];
let currentIndex = 0;
let timer = null;
let currentSeconds = 0;
let totalSeconds = 0;
let isRunning = false;
let isBreak = false;
let isInitialStart = true;
let isEditMode = false;

let audioCtx = null;

// Audio freischalten
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playModernConfirmSound() {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(587.33, now);
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.3);
}

function playRaceStartSound(secondsLeft) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'triangle';

  if (secondsLeft > 0) {
    osc.frequency.setValueAtTime(440, now);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  } else {
    osc.frequency.setValueAtTime(880, now);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }
}

// DOM Elemente
const startMenuView = document.getElementById('start-menu-view');
const workoutView = document.getElementById('workout-view');
const workoutGrid = document.getElementById('workout-grid');
const btnToggleEdit = document.getElementById('btn-toggle-edit');
const editHint = document.getElementById('edit-hint');
const btnBackMenu = document.getElementById('btn-back-menu');

const overlay = document.getElementById('start-overlay');
const btnOverlayPlay = document.getElementById('btn-overlay-play');
const timerProgressCircle = document.getElementById('timer-progress-circle');
const timerDisplay = document.getElementById('timer-display');

const elNr = document.getElementById('exercise-nr');
const elSide = document.getElementById('exercise-side');
const elTitle = document.getElementById('exercise-title');
const elCategory = document.getElementById('exercise-category');
const elUmfang = document.getElementById('exercise-umfang');
const elGif = document.getElementById('exercise-gif');
const elHint = document.getElementById('exercise-hint');
const elNextTitle = document.getElementById('next-title');

const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let gifCanvas = document.getElementById('gif-canvas');
if (!gifCanvas) {
  gifCanvas = document.createElement('canvas');
  gifCanvas.id = 'gif-canvas';
  gifCanvas.style.display = 'none';
  gifCanvas.style.width = '100%';
  gifCanvas.style.height = '100%';
  gifCanvas.style.objectFit = 'cover';
  elGif.parentNode.insertBefore(gifCanvas, elGif.nextSibling);
}

const CIRCUMFERENCE = 2 * Math.PI * 52; 

if (timerProgressCircle) {
  timerProgressCircle.style.strokeDasharray = CIRCUMFERENCE;
  timerProgressCircle.style.strokeDashoffset = 0;
}

// --- STARTMENÜ RENDERN & LOGIK ---
function renderStartMenu() {
  workoutGrid.innerHTML = '';
  
  Object.keys(defaultWorkouts).forEach(id => {
    const w = defaultWorkouts[id];
    const currentName = getWorkoutName(id);
    const durationMin = calculateWorkoutDurationInMinutes(w.exercises);

    const card = document.createElement('div');
    card.className = `workout-card ${isEditMode ? 'edit-mode' : ''}`;
    
    card.innerHTML = `
      <div class="card-icon">${w.icon}</div>
      <div class="card-info">
        <div class="card-title">${currentName}</div>
        <div class="card-duration">⏱ ca. ${durationMin} Min. • ${w.exercises.length} Übungen</div>
      </div>
      ${isEditMode ? '<div class="edit-badge">Bearbeiten</div>' : ''}
    `;

    card.addEventListener('click', () => {
      if (isEditMode) {
        // Name ändern
        const newName = prompt('Neuer Name für das Workout:', currentName);
        if (newName && newName.trim() !== '') {
          saveWorkoutName(id, newName.trim());
          renderStartMenu();
        }
      } else {
        // Workout starten
        startSelectedWorkout(id);
      }
    });

    workoutGrid.appendChild(card);
  });
}

btnToggleEdit.addEventListener('click', () => {
  isEditMode = !isEditMode;
  btnToggleEdit.classList.toggle('active', isEditMode);
  editHint.classList.toggle('hidden', !isEditMode);
  renderStartMenu();
});

btnBackMenu.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  isBreak = false;
  workoutView.classList.add('hidden');
  startMenuView.classList.remove('hidden');
});

function startSelectedWorkout(workoutId) {
  activeWorkoutId = workoutId;
  exercises = defaultWorkouts[workoutId].exercises;
  
  if (!exercises || exercises.length === 0) {
    alert("Dieses Workout enthält noch keine Übungen!");
    return;
  }

  currentIndex = 0;
  isInitialStart = true;

  startMenuView.classList.add('hidden');
  workoutView.classList.remove('hidden');
  
  if (overlay) overlay.classList.remove('hidden');
  
  loadExercise(currentIndex);
}

// --- WORKOUT TIMER LOGIK ---
function setCircleProgress(remainingSeconds, maxSeconds, circleElement) {
  if (!circleElement) return;
  const progress = maxSeconds > 0 ? (remainingSeconds / maxSeconds) : 0;
  const offset = CIRCUMFERENCE * (1 - progress);
  circleElement.style.strokeDashoffset = Math.max(0, Math.min(CIRCUMFERENCE, offset));
}

function freezeGif() {
  if (elGif.complete && elGif.naturalWidth > 0) {
    gifCanvas.width = elGif.naturalWidth || elGif.clientWidth;
    gifCanvas.height = elGif.naturalHeight || elGif.clientHeight;
    const ctx = gifCanvas.getContext('2d');
    ctx.drawImage(elGif, 0, 0, gifCanvas.width, gifCanvas.height);
    gifCanvas.style.display = 'block';
    elGif.style.display = 'none';
  }
}

function unfreezeGif() {
  gifCanvas.style.display = 'none';
  elGif.style.display = 'block';
}

function formatSideText(seite) {
  if (seite === 'L') return 'LINKS';
  if (seite === 'R') return 'RECHTS';
  return seite ? seite.toUpperCase() : '';
}

function formatUmfangText(rawUmfang) {
  if (!rawUmfang) return '';
  let cleaned = rawUmfang.trim();
  if (/wh/i.test(cleaned)) {
    let numberPart = cleaned.replace(/[^0-9]/g, '');
    return numberPart ? `${numberPart}x` : cleaned;
  }
  return cleaned;
}

function populateExerciseData(index) {
  const ex = exercises[index];
  elNr.textContent = ex.nr;
  
  const sideVal = ex.seite ? formatSideText(ex.seite) : '';
  if (elSide) {
    elSide.innerHTML = `Seite:<br><span>${sideVal}</span>`;
  }

  elTitle.textContent = ex.titel;
  elCategory.textContent = `${ex.satz && ex.satz !== 'nan' ? ex.satz + ' • ' : ''}${ex.kategorie}`;
  elUmfang.textContent = formatUmfangText(ex.umfang);
  elHint.textContent = ex.hinweis;

  if (ex.seite === 'R') {
    elGif.style.transform = 'scaleX(-1)';
    gifCanvas.style.transform = 'scaleX(-1)';
  } else {
    elGif.style.transform = 'none';
    gifCanvas.style.transform = 'none';
  }

  elGif.src = `assets/gifs/${ex.id}.gif`;

  const nextEx = exercises[index + 1];
  elNextTitle.textContent = nextEx 
    ? `${nextEx.titel} (${formatSideText(nextEx.seite)})` 
    : 'Training beendet!';
}

function loadExercise(index) {
  populateExerciseData(index);
  totalSeconds = exercises[index].dauer;
  currentSeconds = totalSeconds;
  isBreak = false;
  
  pauseExerciseState(); 
  updateTimerDisplay(); 
}

function updateTimerDisplay() {
  if (isBreak) {
    timerDisplay.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <span style="font-size: 0.32em; color: #ffffff; letter-spacing: 2px; font-weight: bold; margin-bottom: 2px; text-transform: uppercase;">PAUSE</span>
        <span style="font-size: 1em; color: #ffffff; line-height: 1;">${currentSeconds}</span>
      </div>
    `;
    setCircleProgress(currentSeconds, totalSeconds, timerProgressCircle);
    timerProgressCircle.style.stroke = '#eab308';
  } else {
    timerDisplay.innerHTML = `<span style="color: #ffffff;">${currentSeconds}</span>`;
    setCircleProgress(currentSeconds, totalSeconds, timerProgressCircle);
    timerProgressCircle.style.stroke = '';
  }
}

function startInitialBreak(duration = 20) {
  isBreak = true;
  isRunning = false;
  clearInterval(timer);

  if (overlay) overlay.classList.add('hidden');
  populateExerciseData(currentIndex);
  freezeGif();

  totalSeconds = duration;
  currentSeconds = duration;

  btnPlay.textContent = 'PAUSE ÜBERSPRINGEN';
  btnPlay.style.backgroundColor = 'var(--card-bg)';
  btnPlay.style.color = 'var(--text-primary)';

  updateTimerDisplay();

  timer = setInterval(() => {
    if (currentSeconds <= 3 && currentSeconds > 0) {
      playRaceStartSound(currentSeconds);
    }

    currentSeconds--;
    updateTimerDisplay();

    if (currentSeconds <= 0) {
      clearInterval(timer);
      playRaceStartSound(0);
      totalSeconds = exercises[currentIndex].dauer;
      currentSeconds = totalSeconds;
      startExerciseState();
    }
  }, 1000);
}

function startExerciseState() {
  isRunning = true;
  isBreak = false;
  
  if (overlay) overlay.classList.add('hidden');
  unfreezeGif();

  btnPlay.textContent = 'PAUSE';
  btnPlay.style.backgroundColor = '#eab308'; 
  btnPlay.style.color = '#000';

  clearInterval(timer);
  timer = setInterval(() => {
    currentSeconds--;
    updateTimerDisplay();

    if (currentSeconds <= 0) {
      clearInterval(timer);
      playModernConfirmSound();
      
      if (currentIndex < exercises.length - 1) {
        const customBreak = exercises[currentIndex].pause_after !== undefined ? exercises[currentIndex].pause_after : 20;
        startBreakPhase(customBreak);
      } else {
        alert("Workout abgeschlossen!");
      }
    }
  }, 1000);
}

function pauseExerciseState() {
  isRunning = false;
  clearInterval(timer);
  freezeGif();

  if (!isBreak) {
    btnPlay.textContent = currentSeconds < totalSeconds ? 'FORTSETZEN' : 'START';
    btnPlay.style.backgroundColor = 'var(--accent-green)';
    btnPlay.style.color = '#000';
  }
}

function startBreakPhase(breakDuration) {
  isBreak = true;
  isRunning = false;
  clearInterval(timer);
  
  currentIndex++;
  if (currentIndex >= exercises.length) {
    alert("Workout abgeschlossen!");
    return;
  }

  populateExerciseData(currentIndex);
  freezeGif(); 
  
  totalSeconds = breakDuration;
  currentSeconds = breakDuration;

  btnPlay.textContent = 'PAUSE ÜBERSPRINGEN';
  btnPlay.style.backgroundColor = 'var(--card-bg)';
  btnPlay.style.color = 'var(--text-primary)';

  updateTimerDisplay();

  timer = setInterval(() => {
    if (currentSeconds <= 3 && currentSeconds > 0) {
      playRaceStartSound(currentSeconds);
    }

    currentSeconds--;
    updateTimerDisplay();

    if (currentSeconds <= 0) {
      clearInterval(timer);
      playRaceStartSound(0);
      totalSeconds = exercises[currentIndex].dauer;
      currentSeconds = totalSeconds;
      startExerciseState(); 
    }
  }, 1000);
}

function handlePlayToggle(e) {
  if (e) e.preventDefault();
  initAudio();

  if (isInitialStart) {
    isInitialStart = false;
    startInitialBreak(20);
    return;
  }

  if (isBreak) {
    clearInterval(timer);
    totalSeconds = exercises[currentIndex].dauer;
    currentSeconds = totalSeconds;
    startExerciseState();
  } else if (isRunning) {
    pauseExerciseState(); 
  } else {
    startExerciseState(); 
  }
}

if (btnOverlayPlay) btnOverlayPlay.addEventListener('click', handlePlayToggle);
btnPlay.addEventListener('click', handlePlayToggle);

btnNext.addEventListener('click', () => {
  initAudio();
  isInitialStart = false;
  if (currentIndex < exercises.length - 1) {
    clearInterval(timer);
    currentIndex++;
    loadExercise(currentIndex); 
  }
});

btnPrev.addEventListener('click', () => {
  initAudio();
  isInitialStart = false;
  if (currentIndex > 0) {
    clearInterval(timer);
    currentIndex--;
    loadExercise(currentIndex); 
  }
});

elGif.addEventListener('load', () => {
  if (!isRunning) {
    freezeGif();
  }
});

// App-Start
renderStartMenu();