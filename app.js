const exercises = [
  {"nr": "I", "satz": "1. Satz", "seite": "L", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "id": 1},
  {"nr": "II", "satz": "1. Satz", "seite": "R", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "id": 1},
  {"nr": "III", "satz": "1. Satz", "seite": "Beide", "titel": "Sitzende Hüft-Außenrotation", "kategorie": "Hüftrotatoren & Abduktoren", "umfang": "20 WH", "hinweis": "Sitzend mit Widerstandsband", "dauer": 30, "id": 2},
  {"nr": "IV", "satz": "1. Satz", "seite": "Beide", "titel": "Knieheben im Stand mit Band", "kategorie": "Aktive Hüftbeugung (Psoas)", "umfang": "12 WH", "hinweis": "Band um die Füße, Knie hochziehen", "dauer": 30, "id": 3},
  {"nr": "V", "satz": "1. Satz", "seite": "Beide", "titel": "Beidbeinige Glute Bridge mit Band", "kategorie": "Gluteus Maximus / Abdruck", "umfang": "15 WH", "hinweis": "Band über Knie, Knie leicht nach außen drücken", "dauer": 30, "id": 4},
  {"nr": "VI", "satz": "1. Satz", "seite": "L", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 30, "id": 5},
  {"nr": "VII", "satz": "1. Satz", "seite": "R", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 30, "id": 5},
  {"nr": "VIII", "satz": "1. Satz", "seite": "L", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "id": 6},
  {"nr": "IX", "satz": "1. Satz", "seite": "R", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "id": 6},
  {"nr": "X", "satz": "1. Satz", "seite": "L", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "id": 7},
  {"nr": "XI", "satz": "1. Satz", "seite": "R", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "id": 70},
  {"nr": "XII", "satz": "1. Satz", "seite": "Beide", "titel": "Beinbeugen im Liegen (Hamstring Curls)", "kategorie": "Beinbeuger (Hamstrings)", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um Fersen", "dauer": 30, "id": 8},
  {"nr": "XIII", "satz": "1. Satz", "seite": "Beide", "titel": "Soleus-Heber (Wadenheben gebeugt)", "kategorie": "Tiefe Wadenmuskulatur (Soleus)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gebeugtem Knie", "dauer": 30, "id": 9},
  {"nr": "XIV", "satz": "1. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "id": 10},
  {"nr": "XV", "satz": "1. Satz", "seite": "Beide", "titel": "Wadenheber (Wadenheben gestreckt)", "kategorie": "Oberflächliche Wade (Gastrocnemius)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gestrecktem Knie", "dauer": 30, "id": 11},
  {"nr": "XVI", "satz": "1. Satz", "seite": "L", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "id": 12},
  {"nr": "XVII", "satz": "1. Satz", "seite": "R", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "id": 12},
  {"nr": "XVIII", "satz": "2. Satz", "seite": "L", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "id": 1},
  {"nr": "XIX", "satz": "2. Satz", "seite": "R", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "id": 1},
  {"nr": "XX", "satz": "2. Satz", "seite": "Beide", "titel": "Sitzende Hüft-Außenrotation", "kategorie": "Hüftrotatoren & Abduktoren", "umfang": "20 WH", "hinweis": "Sitzend mit Widerstandsband", "dauer": 30, "id": 2},
  {"nr": "XXI", "satz": "2. Satz", "seite": "Beide", "titel": "Knieheben im Stand mit Band", "kategorie": "Aktive Hüftbeugung (Psoas)", "umfang": "12 WH", "hinweis": "Band um die Füße, Knie hochziehen", "dauer": 30, "id": 3},
  {"nr": "XXII", "satz": "2. Satz", "seite": "Beide", "titel": "Beidbeinige Glute Bridge mit Band", "kategorie": "Gluteus Maximus / Abdruck", "umfang": "15 WH", "hinweis": "Band über Knie, Knie leicht nach außen drücken", "dauer": 30, "id": 4},
  {"nr": "XXIII", "satz": "2. Satz", "seite": "L", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 30, "id": 5},
  {"nr": "XXIV", "satz": "2. Satz", "seite": "R", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 30, "id": 5},
  {"nr": "XXV", "satz": "2. Satz", "seite": "L", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "id": 6},
  {"nr": "XXVI", "satz": "2. Satz", "seite": "R", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "id": 6},
  {"nr": "XXVII", "satz": "2. Satz", "seite": "L", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "id": 7},
  {"nr": "XXVIII", "satz": "2. Satz", "seite": "R", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "id": 70},
  {"nr": "XXIX", "satz": "2. Satz", "seite": "Beide", "titel": "Beinbeugen im Liegen (Hamstring Curls)", "kategorie": "Beinbeuger (Hamstrings)", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um Fersen", "dauer": 30, "id": 8},
  {"nr": "XXX", "satz": "2. Satz", "seite": "Beide", "titel": "Soleus-Heber (Wadenheben gebeugt)", "kategorie": "Tiefe Wadenmuskulatur (Soleus)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gebeugtem Knie", "dauer": 30, "id": 9},
  {"nr": "XXXI", "satz": "2. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "id": 10},
  {"nr": "XXXII", "satz": "2. Satz", "seite": "Beide", "titel": "Wadenheber (Wadenheben gestreckt)", "kategorie": "Oberflächliche Wade (Gastrocnemius)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gestrecktem Knie", "dauer": 30, "id": 11},
  {"nr": "XXXIII", "satz": "2. Satz", "seite": "L", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "id": 12},
  {"nr": "XXXIV", "satz": "2. Satz", "seite": "R", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "id": 12},
  {"nr": "XXXV", "satz": "3. Satz", "seite": "L", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "id": 1},
  {"nr": "XXXVI", "satz": "3. Satz", "seite": "R", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "id": 1},
  {"nr": "XXXVII", "satz": "3. Satz", "seite": "Beide", "titel": "Sitzende Hüft-Außenrotation", "kategorie": "Hüftrotatoren & Abduktoren", "umfang": "20 WH", "hinweis": "Sitzend mit Widerstandsband", "dauer": 30, "id": 2},
  {"nr": "XXXVIII", "satz": "3. Satz", "seite": "Beide", "titel": "Knieheben im Stand mit Band", "kategorie": "Aktive Hüftbeugung (Psoas)", "umfang": "12 WH", "hinweis": "Band um die Füße, Knie hochziehen", "dauer": 30, "id": 3},
  {"nr": "XXXIX", "satz": "3. Satz", "seite": "Beide", "titel": "Beidbeinige Glute Bridge mit Band", "kategorie": "Gluteus Maximus / Abdruck", "umfang": "15 WH", "hinweis": "Band über Knie, Knie leicht nach außen drücken", "dauer": 30, "id": 4},
  {"nr": "XL", "satz": "3. Satz", "seite": "L", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 30, "id": 5},
  {"nr": "XLI", "satz": "3. Satz", "seite": "R", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 30, "id": 5},
  {"nr": "XLII", "satz": "3. Satz", "seite": "L", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "id": 6},
  {"nr": "XLIII", "satz": "3. Satz", "seite": "R", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "id": 6},
  {"nr": "XLIV", "satz": "3. Satz", "seite": "L", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "id": 7},
  {"nr": "XLV", "satz": "3. Satz", "seite": "R", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "id": 70},
  {"nr": "XLVI", "satz": "3. Satz", "seite": "Beide", "titel": "Beinbeugen im Liegen (Hamstring Curls)", "kategorie": "Beinbeuger (Hamstrings)", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um Fersen", "dauer": 30, "id": 8},
  {"nr": "XLVII", "satz": "3. Satz", "seite": "Beide", "titel": "Soleus-Heber (Wadenheben gebeugt)", "kategorie": "Tiefe Wadenmuskulatur (Soleus)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gebeugtem Knie", "dauer": 30, "id": 9},
  {"nr": "XLVIII", "satz": "3. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "id": 10},
  {"nr": "XLIX", "satz": "3. Satz", "seite": "Beide", "titel": "Wadenheber (Wadenheben gestreckt)", "kategorie": "Oberflächliche Wade (Gastrocnemius)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gestrecktem Knie", "dauer": 30, "id": 11},
  {"nr": "L", "satz": "1. Satz", "seite": "L", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "id": 13},
  {"nr": "LI", "satz": "1. Satz", "seite": "R", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "id": 13},
  {"nr": "LII", "satz": "1. Satz", "seite": "L", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "id": 14},
  {"nr": "LIII", "satz": "1. Satz", "seite": "R", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "id": 14},
  {"nr": "LIV", "satz": "1. Satz", "seite": "L", "titel": "Adduktorendehnung im Seitstütz", "kategorie": "Beininnenseite / Adduktoren", "umfang": "30 Sek", "hinweis": "Statische Dehnung im Seitstütz halten", "dauer": 30, "id": 15},
  {"nr": "LV", "satz": "1. Satz", "seite": "R", "titel": "Adduktorendehnung im Seitstütz", "kategorie": "Beininnenseite / Adduktoren", "umfang": "30 Sek", "hinweis": "Statische Dehnung im Seitstütz halten", "dauer": 30, "id": 15},
  {"nr": "LVI", "satz": "2. Satz", "seite": "L", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "id": 13},
  {"nr": "LVII", "satz": "2. Satz", "seite": "R", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "id": 13},
  {"nr": "LVIII", "satz": "2. Satz", "seite": "L", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "id": 14},
  {"nr": "LIX", "satz": "2. Satz", "seite": "R", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "id": 14}
];

let currentIndex = 0;
let timer = null;
let currentSeconds = 0;
let totalSeconds = 0;
let isRunning = false;
let isBreak = false;

// DOM Elemente
const overlay = document.getElementById('start-overlay');
const btnOverlayPlay = document.getElementById('btn-overlay-play');
const mainTimerBox = document.getElementById('main-timer-box');
const timerProgressCircle = document.getElementById('timer-progress-circle');
const timerDisplay = document.getElementById('timer-display');

const elNr = document.getElementById('exercise-nr');
const elSide = document.getElementById('exercise-side');
const elTitle = document.getElementById('exercise-title');
const elCategory = document.getElementById('exercise-category');
const elUmfang = document.getElementById('exercise-umfang');
const elGif = document.getElementById('exercise-gif');
const gifCanvas = document.getElementById('gif-canvas');
const elHint = document.getElementById('exercise-hint');
const elNextTitle = document.getElementById('next-title');

const btnPlay = document.getElementById('btn-play');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const CIRCUMFERENCE = 2 * Math.PI * 52; // 326.72

// Helper: GIF Standbild erzeugen (Freeze)
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

// Helper: GIF Animation fortsetzen (Unfreeze)
function unfreezeGif() {
  gifCanvas.style.display = 'none';
  elGif.style.display = 'block';
}

function formatSideText(seite) {
  if (seite === 'L') return 'LINKS';
  if (seite === 'R') return 'RECHTS';
  return seite ? seite.toUpperCase() : '';
}

function setCircleProgress(percentage) {
  const offset = CIRCUMFERENCE - (percentage * CIRCUMFERENCE);
  timerProgressCircle.style.strokeDashoffset = offset;
}

function loadExercise(index) {
  const ex = exercises[index];
  elNr.textContent = ex.nr;
  elSide.textContent = ex.seite ? `SEITE: ${formatSideText(ex.seite)}` : '';
  elTitle.textContent = ex.titel;
  elCategory.textContent = `${ex.satz && ex.satz !== 'nan' ? ex.satz + ' • ' : ''}${ex.kategorie}`;
  elUmfang.textContent = ex.umfang;
  elHint.textContent = ex.hinweis;

  // Spiegeln wenn Seite: R
  if (ex.seite === 'R') {
    elGif.classList.add('flipped');
    gifCanvas.classList.add('flipped');
  } else {
    elGif.classList.remove('flipped');
    gifCanvas.classList.remove('flipped');
  }

  elGif.src = `assets/gifs/${ex.id}.gif`;

  const nextEx = exercises[index + 1];
  elNextTitle.textContent = nextEx 
    ? `${nextEx.titel} (${formatSideText(nextEx.seite)})` 
    : 'Training beendet!';

  totalSeconds = ex.dauer;
  currentSeconds = totalSeconds;
  
  // Im angehaltenen Zustand laden
  pauseExerciseState();
}

function updateTimerDisplay() {
  const mins = Math.floor(currentSeconds / 60).toString().padStart(2, '0');
  const secs = (currentSeconds % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${mins}:${secs}`;
  
  const progress = totalSeconds > 0 ? currentSeconds / totalSeconds : 0;
  setCircleProgress(progress);
}

// Zustand: Übung LÄUFT
function startExerciseState() {
  isRunning = true;
  isBreak = false;
  
  overlay.classList.add('hidden');
  unfreezeGif();

  // Timer: Grün / Button: Gelb (PAUSE)
  mainTimerBox.className = 'timer-box state-green';
  btnPlay.className = 'btn-main-yellow';
  btnPlay.textContent = 'PAUSE';

  clearInterval(timer);
  timer = setInterval(() => {
    currentSeconds--;
    updateTimerDisplay();

    if (currentSeconds <= 0) {
      clearInterval(timer);
      if (currentIndex < exercises.length - 1) {
        startBreakPhase(20); // 20 Sek Pause zwischen Übungen
      } else {
        alert("Workout abgeschlossen!");
      }
    }
  }, 1000);
}

// Zustand: Übung PAUSIERT
function pauseExerciseState() {
  isRunning = false;
  clearInterval(timer);
  freezeGif();

  if (!isBreak) {
    // Timer: Gelb / Button: Grün (START)
    mainTimerBox.className = 'timer-box state-yellow';
    btnPlay.className = 'btn-main-green';
    btnPlay.textContent = currentSeconds < totalSeconds ? 'FORTSETZEN' : 'START';
  }
}

// Zwischenpause Phase (20s)
function startBreakPhase(breakDuration) {
  isBreak = true;
  isRunning = false;
  clearInterval(timer);

  freezeGif();
  
  totalSeconds = breakDuration;
  currentSeconds = breakDuration;

  // Pause-Timer: Gelb
  mainTimerBox.className = 'timer-box state-yellow';
  btnPlay.className = 'btn-main-green';
  btnPlay.textContent = 'PAUSE ÜBERSPRINGEN';

  updateTimerDisplay();

  timer = setInterval(() => {
    currentSeconds--;
    updateTimerDisplay();

    if (currentSeconds <= 0) {
      clearInterval(timer);
      currentIndex++;
      loadExercise(currentIndex);
      startExerciseState();
    }
  }, 1000);
}

// Event-Handling (inkl. Touch-Fixes für iPhone)
function handlePlayToggle(e) {
  if (e) e.preventDefault();
  
  if (isBreak) {
    // Wenn in der Zwischenpause geklickt wird -> Direkt zur nächsten Übung
    clearInterval(timer);
    currentIndex++;
    loadExercise(currentIndex);
    startExerciseState();
  } else if (isRunning) {
    pauseExerciseState();
  } else {
    startExerciseState();
  }
}

btnOverlayPlay.addEventListener('click', handlePlayToggle);
btnPlay.addEventListener('click', handlePlayToggle);

btnNext.addEventListener('click', () => {
  if (currentIndex < exercises.length - 1) {
    clearInterval(timer);
    currentIndex++;
    loadExercise(currentIndex);
  }
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    clearInterval(timer);
    currentIndex--;
    loadExercise(currentIndex);
  }
});

// GIF-Lade-Event: Sobald das GIF geladen ist, Standbild erstellen (falls noch nicht gestartet)
elGif.addEventListener('load', () => {
  if (!isRunning) {
    freezeGif();
  }
});

// Initiale Ladung
loadExercise(currentIndex);