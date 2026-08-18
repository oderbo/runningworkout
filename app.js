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
let timeLeft = 0;
let isRunning = false;

function renderExercise() {
  const ex = exercises[currentIndex];
  document.getElementById('exercise-nr').textContent = ex.nr;
  document.getElementById('exercise-umfang').textContent = ex.umfang;
  document.getElementById('exercise-side').textContent = `SEITE: ${ex.seite}`;
  document.getElementById('exercise-title').textContent = ex.titel;
  document.getElementById('exercise-category').textContent = `${ex.satz !== 'nan' ? ex.satz + ' • ' : ''}${ex.kategorie}`;
  document.getElementById('exercise-hint').textContent = ex.hinweis;
  document.getElementById('exercise-gif').src = `assets/gifs/${ex.id}.gif`;

  const nextEx = exercises[currentIndex + 1];
  document.getElementById('next-title').textContent = nextEx ? `${nextEx.titel} (${nextEx.seite})` : 'Training Beendet!';

  resetTimer(ex.dauer);
}

function resetTimer(duration) {
  clearInterval(timer);
  isRunning = false;
  timeLeft = duration;
  document.getElementById('btn-play').textContent = 'START';
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const sec = String(timeLeft % 60).padStart(2, '0');
  document.getElementById('timer-display').textContent = `${min}:${sec}`;
}

document.getElementById('btn-play').addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('btn-play').textContent = 'FORTSETZEN';
  } else {
    isRunning = true;
    document.getElementById('btn-play').textContent = 'PAUSE';
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('btn-play').textContent = 'START';
      }
    }, 1000);
  }
});

document.getElementById('btn-next').addEventListener('click', () => {
  if (currentIndex < exercises.length - 1) {
    currentIndex++;
    renderExercise();
  }
});

document.getElementById('btn-prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderExercise();
  }
});

renderExercise();