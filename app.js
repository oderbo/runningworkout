const exercises = [
  {"nr": "I", "satz": "1. Satz", "seite": "L", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "pause_after": 5, "id": 1},
  {"nr": "II", "satz": "1. Satz", "seite": "R", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "pause_after": 10, "id": 1},
  {"nr": "III", "satz": "1. Satz", "seite": "Beide", "titel": "Sitzende Hüft-Außenrotation", "kategorie": "Hüftrotatoren & Abduktoren", "umfang": "20 WH", "hinweis": "Sitzend mit Widerstandsband", "dauer": 60, "pause_after": 15, "id": 2},
  {"nr": "IV", "satz": "1. Satz", "seite": "Beide", "titel": "Knieheben im Stand mit Band", "kategorie": "Aktive Hüftbeugung (Psoas)", "umfang": "12 WH", "hinweis": "Band um die Füße, Knie hochziehen", "dauer": 30, "pause_after": 20, "id": 3},
  {"nr": "V", "satz": "1. Satz", "seite": "Beide", "titel": "Beidbeinige Glute Bridge mit Band", "kategorie": "Gluteus Maximus / Abdruck", "umfang": "15 WH", "hinweis": "Band über Knie, Knie leicht nach außen drücken", "dauer": 30, "pause_after": 25, "id": 4},
  {"nr": "VI", "satz": "1. Satz", "seite": "L", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 20, "pause_after": 10, "id": 5},
  {"nr": "VII", "satz": "1. Satz", "seite": "R", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 20, "pause_after": 20, "id": 5},
  {"nr": "VIII", "satz": "1. Satz", "seite": "L", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "pause_after": 5, "id": 6},
  {"nr": "IX", "satz": "1. Satz", "seite": "R", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "pause_after": 10, "id": 6},
  {"nr": "X", "satz": "1. Satz", "seite": "L", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "pause_after": 10, "id": 7},
  {"nr": "XI", "satz": "1. Satz", "seite": "R", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "pause_after": 20, "id": 7},
  {"nr": "XII", "satz": "1. Satz", "seite": "Beide", "titel": "Beinbeugen im Liegen (Hamstring Curls)", "kategorie": "Beinbeuger (Hamstrings)", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um Fersen", "dauer": 40, "pause_after": 10, "id": 8},
  {"nr": "XIII", "satz": "1. Satz", "seite": "Beide", "titel": "Soleus-Heber (Wadenheben gebeugt)", "kategorie": "Tiefe Wadenmuskulatur (Soleus)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gebeugtem Knie", "dauer": 30, "pause_after": 10, "id": 9},
  {"nr": "XIV", "satz": "1. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "pause_after": 10, "id": 10},
  {"nr": "XV", "satz": "1. Satz", "seite": "Beide", "titel": "Wadenheber (Wadenheben gestreckt)", "kategorie": "Oberflächliche Wade (Gastrocnemius)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gestrecktem Knie", "dauer": 30, "pause_after": 20, "id": 11},
  {"nr": "XVI", "satz": "1. Satz", "seite": "L", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "pause_after": 30, "id": 12},
  {"nr": "XVII", "satz": "1. Satz", "seite": "R", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "pause_after": 45, "id": 12},
  {"nr": "XVIII", "satz": "2. Satz", "seite": "L", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "pause_after": 5, "id": 1},
  {"nr": "XIX", "satz": "2. Satz", "seite": "R", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "pause_after": 10, "id": 1},
  {"nr": "XX", "satz": "2. Satz", "seite": "Beide", "titel": "Sitzende Hüft-Außenrotation", "kategorie": "Hüftrotatoren & Abduktoren", "umfang": "20 WH", "hinweis": "Sitzend mit Widerstandsband", "dauer": 60, "pause_after": 15, "id": 2},
  {"nr": "XXI", "satz": "2. Satz", "seite": "Beide", "titel": "Knieheben im Stand mit Band", "kategorie": "Aktive Hüftbeugung (Psoas)", "umfang": "12 WH", "hinweis": "Band um die Füße, Knie hochziehen", "dauer": 30, "pause_after": 20, "id": 3},
  {"nr": "XXII", "satz": "2. Satz", "seite": "Beide", "titel": "Beidbeinige Glute Bridge mit Band", "kategorie": "Gluteus Maximus / Abdruck", "umfang": "15 WH", "hinweis": "Band über Knie, Knie leicht nach außen drücken", "dauer": 30, "pause_after": 25, "id": 4},
  {"nr": "XXIII", "satz": "2. Satz", "seite": "L", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 20, "pause_after": 10, "id": 5},
  {"nr": "XXIV", "satz": "2. Satz", "seite": "R", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 20, "pause_after": 20, "id": 5},
  {"nr": "XXV", "satz": "2. Satz", "seite": "L", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "pause_after": 5, "id": 6},
  {"nr": "XXVI", "satz": "2. Satz", "seite": "R", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "pause_after": 10, "id": 6},
  {"nr": "XXVII", "satz": "2. Satz", "seite": "L", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "pause_after": 10, "id": 7},
  {"nr": "XXVIII", "satz": "2. Satz", "seite": "R", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "pause_after": 20, "id": 7},
  {"nr": "XXIX", "satz": "2. Satz", "seite": "Beide", "titel": "Beinbeugen im Liegen (Hamstring Curls)", "kategorie": "Beinbeuger (Hamstrings)", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um Fersen", "dauer": 40, "pause_after": 10, "id": 8},
  {"nr": "XXX", "satz": "2. Satz", "seite": "Beide", "titel": "Soleus-Heber (Wadenheben gebeugt)", "kategorie": "Tiefe Wadenmuskulatur (Soleus)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gebeugtem Knie", "dauer": 30, "pause_after": 10, "id": 9},
  {"nr": "XXX1", "satz": "2. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "pause_after": 10, "id": 10},
  {"nr": "XXXII", "satz": "2. Satz", "seite": "Beide", "titel": "Wadenheber (Wadenheben gestreckt)", "kategorie": "Oberflächliche Wade (Gastrocnemius)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gestrecktem Knie", "dauer": 30, "pause_after": 20, "id": 11},
  {"nr": "XXXIII", "satz": "2. Satz", "seite": "L", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "pause_after": 30, "id": 12},
  {"nr": "XXXIV", "satz": "2. Satz", "seite": "R", "titel": "Isometrischer Split-Squat Hold", "kategorie": "Spezifische Kraft & Kniestabilität", "umfang": "45 Sek", "hinweis": "Tiefen Ausfallschritt statisch halten", "dauer": 45, "pause_after": 45, "id": 12},
  {"nr": "XXXV", "satz": "3. Satz", "seite": "L", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "pause_after": 5, "id": 1},
  {"nr": "XXXVI", "satz": "3. Satz", "seite": "R", "titel": "Seitliches Beinheben im Liegen", "kategorie": "Hüftabduktion / Gluteus Medius", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um die Sprunggelenke", "dauer": 30, "pause_after": 10, "id": 1},
  {"nr": "XXXVII", "satz": "3. Satz", "seite": "Beide", "titel": "Sitzende Hüft-Außenrotation", "kategorie": "Hüftrotatoren & Abduktoren", "umfang": "20 WH", "hinweis": "Sitzend mit Widerstandsband", "dauer": 60, "pause_after": 15, "id": 2},
  {"nr": "XXXVIII", "satz": "3. Satz", "seite": "Beide", "titel": "Knieheben im Stand mit Band", "kategorie": "Aktive Hüftbeugung (Psoas)", "umfang": "12 WH", "hinweis": "Band um die Füße, Knie hochziehen", "dauer": 30, "pause_after": 20, "id": 3},
  {"nr": "XXXIX", "satz": "3. Satz", "seite": "Beide", "titel": "Beidbeinige Glute Bridge mit Band", "kategorie": "Gluteus Maximus / Abdruck", "umfang": "15 WH", "hinweis": "Band über Knie, Knie leicht nach außen drücken", "dauer": 30, "pause_after": 25, "id": 4},
  {"nr": "XL", "satz": "3. Satz", "seite": "L", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 20, "pause_after": 10, "id": 5},
  {"nr": "XLI", "satz": "3. Satz", "seite": "R", "titel": "Einbeiniges Beckenheben im Umkehrstütz", "kategorie": "Rückseitige Kette & Gesäß", "umfang": "10 WH", "hinweis": "Becken angehoben halten", "dauer": 20, "pause_after": 20, "id": 5},
  {"nr": "XLII", "satz": "3. Satz", "seite": "L", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "pause_after": 5, "id": 6},
  {"nr": "XLIII", "satz": "3. Satz", "seite": "R", "titel": "Seitstütz mit Beinheben", "kategorie": "Rumpf- & Hüftstabilität", "umfang": "10 WH", "hinweis": "Seitstütz stabil halten", "dauer": 30, "pause_after": 10, "id": 6},
  {"nr": "XLIV", "satz": "3. Satz", "seite": "L", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "pause_after": 10, "id": 7},
  {"nr": "XLV", "satz": "3. Satz", "seite": "R", "titel": "Einbeinige Kniebeuge an der Wand", "kategorie": "Exzentrische Quad-Kraft / Knie", "umfang": "15 WH", "hinweis": "Kontrollierte Kniebeuge an Wand", "dauer": 30, "pause_after": 20, "id": 7},
  {"nr": "XLVI", "satz": "3. Satz", "seite": "Beide", "titel": "Beinbeugen im Liegen (Hamstring Curls)", "kategorie": "Beinbeuger (Hamstrings)", "umfang": "20 WH", "hinweis": "Mit Widerstandsband um Fersen", "dauer": 40, "pause_after": 10, "id": 8},
  {"nr": "XLVII", "satz": "3. Satz", "seite": "Beide", "titel": "Soleus-Heber (Wadenheben gebeugt)", "kategorie": "Tiefe Wadenmuskulatur (Soleus)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gebeugtem Knie", "dauer": 30, "pause_after": 10, "id": 9},
  {"nr": "XLVIII", "satz": "3. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "pause_after": 10, "id": 10},
  {"nr": "XLIX", "satz": "3. Satz", "seite": "Beide", "titel": "Wadenheber (Wadenheben gestreckt)", "kategorie": "Oberflächliche Wade (Gastrocnemius)", "umfang": "20 WH", "hinweis": "An Wand gelehnt mit gestrecktem Knie", "dauer": 30, "pause_after": 45, "id": 11},
  {"nr": "L", "satz": "1. Satz", "seite": "L", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "pause_after": 10, "id": 13},
  {"nr": "LI", "satz": "1. Satz", "seite": "R", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "pause_after": 15, "id": 13},
  {"nr": "LII", "satz": "1. Satz", "seite": "L", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "pause_after": 5, "id": 14},
  {"nr": "LIII", "satz": "1. Satz", "seite": "R", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "pause_after": 10, "id": 14},
  {"nr": "LIV", "satz": "1. Satz", "seite": "L", "titel": "Adduktorendehnung im Seitstütz", "kategorie": "Beininnenseite / Adduktoren", "umfang": "30 Sek", "hinweis": "Statische Dehnung im Seitstütz halten", "dauer": 30, "pause_after": 10, "id": 15},
  {"nr": "LV", "satz": "1. Satz", "seite": "R", "titel": "Adduktorendehnung im Seitstütz", "kategorie": "Beininnenseite / Adduktoren", "umfang": "30 Sek", "hinweis": "Statische Dehnung im Seitstütz halten", "dauer": 30, "pause_after": 10, "id": 15},
  {"nr": "LVI", "satz": "2. Satz", "seite": "L", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "pause_after": 10, "id": 13},
  {"nr": "LVII", "satz": "2. Satz", "seite": "R", "titel": "Adduktorendehnung in Rückenlage", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "10 WH", "hinweis": "Kontrolliertes Abspreizen im Liegen", "dauer": 30, "pause_after": 10, "id": 13},
  {"nr": "LVIII", "satz": "2. Satz", "seite": "L", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "pause_after": 10, "id": 14},
  {"nr": "LIX", "satz": "2. Satz", "seite": "R", "titel": "Couch Stretch", "kategorie": "Hüftbeuger & Oberschenkelvorderseite", "umfang": "30 Sek", "hinweis": "Knie an Wand, Oberkörper aufrichten", "dauer": 30, "pause_after": 10, "id": 14}
];

let currentIndex = 0;
let timer = null;
let currentSeconds = 0;
let totalSeconds = 0;
let isRunning = false;
let isBreak = false;
let isInitialStart = true; // Zähler für initiale Startpause

let audioCtx = null;

// Direkt bei User-Klick aufrufen, um Audio-Berechtigung im Browser einzuholen
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
  
  // Wichtig: Schaltet den Web Audio Context direkt über das Klick-Event frei
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

loadExercise(currentIndex);