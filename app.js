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
  {"nr": "XXX1", "satz": "2. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "id": 10},
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

// Canvas dynamisch erzeugen, falls im HTML nicht vorhanden
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

// Exakter mathematischer Umfang für Radius r = 68 (2 * pi * 68 ≈ 427.26)
const CIRCUMFERENCE = 2 * Math.PI * 68; 

// SVG-Kreis initialisieren, damit er zu Beginn voll ist
if (timerProgressCircle) {
  timerProgressCircle.style.strokeDasharray = CIRCUMFERENCE;
  timerProgressCircle.style.strokeDashoffset = 0;
}

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

function setCircleProgress(remainingSeconds, maxSeconds, circleElement) {
  if (!circleElement) return;
  // Korrekte mathematische Richtung: Von 0 (voll) bis CIRCUMFERENCE (leer)
  const progress = maxSeconds > 0 ? (remainingSeconds / maxSeconds) : 0;
  const offset = CIRCUMFERENCE * (1 - progress);
  circleElement.style.strokeDashoffset = offset;
}

// Formatiert den Umfang ("20 WH" -> "20x")
function formatUmfangText(rawUmfang) {
  if (!rawUmfang) return '';
  let cleaned = rawUmfang.trim();
  if (/wh/i.test(cleaned)) {
    let numberPart = cleaned.replace(/[^0-9]/g, '');
    return numberPart ? `${numberPart}x` : cleaned;
  }
  return cleaned;
}

// Läd nur die UI Daten (Text, Bild)
function populateExerciseData(index) {
  const ex = exercises[index];
  elNr.textContent = ex.nr;
  elSide.textContent = ex.seite ? formatSideText(ex.seite) : '';
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

// Läd die komplette Übung
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
    timerProgressCircle.style.stroke = '#eab308'; // Gelb in der Pause
  } else {
    timerDisplay.innerHTML = `<span style="color: #ffffff;">${currentSeconds}</span>`;
    setCircleProgress(currentSeconds, totalSeconds, timerProgressCircle);
    timerProgressCircle.style.stroke = ''; // Standard-Farbe
  }
}

// Zustand: Übung LÄUFT
function startExerciseState() {
  isRunning = true;
  isBreak = false;
  
  if(overlay) overlay.classList.add('hidden');
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
      if (currentIndex < exercises.length - 1) {
        startBreakPhase(20); // 20 Sek Pause
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
    btnPlay.textContent = currentSeconds < totalSeconds ? 'FORTSETZEN' : 'START';
    btnPlay.style.backgroundColor = 'var(--accent-green)';
    btnPlay.style.color = '#000';
  }
}

// Zustand: Zwischenpause Phase (20s)
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
    currentSeconds--;
    updateTimerDisplay();

    if (currentSeconds <= 0) {
      clearInterval(timer);
      totalSeconds = exercises[currentIndex].dauer;
      currentSeconds = totalSeconds;
      startExerciseState(); 
    }
  }, 1000);
}

// Event-Handling
function handlePlayToggle(e) {
  if (e) e.preventDefault();
  
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

if(btnOverlayPlay) btnOverlayPlay.addEventListener('click', handlePlayToggle);
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

elGif.addEventListener('load', () => {
  if (!isRunning) {
    freezeGif();
  }
});

loadExercise(currentIndex);