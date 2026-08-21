// default Workouts
const defaultWorkouts = {
  workout1: {
    id: 'workout1',
    name: "Runner's Pre-Hab",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 4v4l-3 3 2 4 4 1"/><path d="M6 14l3-3 2 3 3-2"/><circle cx="15" cy="4" r="1"/></svg>`,
    exercises: [
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
    ]
  },
workout2: {
    id: 'workout2',
    name: "Upper Body",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    exercises: [
      // Durchgang 1
      {"nr": "I", "satz": "1. Satz", "seite": "Beide", "titel": "Sitzendes Band-Rudern", "kategorie": "Rücken & Latissimus", "umfang": "15 WH", "hinweis": "Sitzend am Boden, Band um Füße/Türanker, Beine völlig entspannt", "dauer": 40, "pause_after": 15, "id": 20},
      {"nr": "II", "satz": "1. Satz", "seite": "Beide", "titel": "Stehende Band-Brustpresse", "kategorie": "Brust & Trizeps", "umfang": "15 WH", "hinweis": "In Rückenlage, Band hinter dem Rücken durchführen und nach oben drücken", "dauer": 40, "pause_after": 15, "id": 21},
      {"nr": "III", "satz": "1. Satz", "seite": "Beide", "titel": "Sitzendes Band-Seitheben", "kategorie": "Schultern (Seitlicher Delta)", "umfang": "15 WH", "hinweis": "Auf Stuhl oder Boden sitzend, Band unter den Oberschenkeln einklemmen", "dauer": 35, "pause_after": 15, "id": 22},
      {"nr": "IV", "satz": "1. Satz", "seite": "Beide", "titel": "Sitzende Band Face Pulls", "kategorie": "Oberer Rücken & Nacken", "umfang": "12 WH", "hinweis": "Bauchlage: Nur den Brustkorb anheben, Beine bleiben passiv am Boden", "dauer": 35, "pause_after": 15, "id": 23},
      {"nr": "V", "satz": "1. Satz", "seite": "Beide", "titel": "Stehende Biceps Curls mit Band", "kategorie": "Arme (Bizeps)", "umfang": "15 WH", "hinweis": "Sitzend, Band unter den Füßen fixieren", "dauer": 35, "pause_after": 10, "id": 24},
      {"nr": "VI", "satz": "1. Satz", "seite": "Beide", "titel": "Überkopf-Trizepsdrücken im Sitzen", "kategorie": "Arme (Trizeps)", "umfang": "15 WH", "hinweis": "Sitzend, Band hinter dem Rücken fixieren und nach oben strecken", "dauer": 35, "pause_after": 15, "id": 25},
      {"nr": "VII", "satz": "1. Satz", "seite": "Beide", "titel": "Crunches", "kategorie": "Gerader Bauch", "umfang": "20 WH", "hinweis": "Rückenlage, Füße locker abgelegt, nur den Schultergürtel anheben", "dauer": 40, "pause_after": 15, "id": 26},
      {"nr": "VIII", "satz": "1. Satz", "seite": "Beide", "titel": "Unterarmstütz auf Knien", "kategorie": "Gesamter Core", "umfang": "45 Sek", "hinweis": "Auf Ellbogen und Knien halten, Unterschenkel entspannt am Boden", "dauer": 45, "pause_after": 20, "id": 27},

      // Durchgang 2
      {"nr": "IX", "satz": "2. Satz", "seite": "Beide", "titel": "Sitzendes Band-Rudern", "kategorie": "Rücken & Latissimus", "umfang": "15 WH", "hinweis": "Sitzend am Boden, Band um Füße/Türanker, Beine völlig entspannt", "dauer": 40, "pause_after": 15, "id": 20},
      {"nr": "X", "satz": "2. Satz", "seite": "Beide", "titel": "Stehende Band-Brustpresse", "kategorie": "Brust & Trizeps", "umfang": "15 WH", "hinweis": "In Rückenlage, Band hinter dem Rücken durchführen und nach oben drücken", "dauer": 40, "pause_after": 15, "id": 21},
      {"nr": "XI", "satz": "2. Satz", "seite": "Beide", "titel": "Sitzendes Band-Seitheben", "kategorie": "Schultern (Seitlicher Delta)", "umfang": "15 WH", "hinweis": "Auf Stuhl oder Boden sitzend, Band unter den Oberschenkeln einklemmen", "dauer": 35, "pause_after": 15, "id": 22},
      {"nr": "XII", "satz": "2. Satz", "seite": "Beide", "titel": "Sitzende Band Face Pulls", "kategorie": "Oberer Rücken & Nacken", "umfang": "12 WH", "hinweis": "Bauchlage: Nur den Brustkorb anheben, Beine bleiben passiv am Boden", "dauer": 35, "pause_after": 15, "id": 23},
      {"nr": "XIII", "satz": "2. Satz", "seite": "Beide", "titel": "Stehende Biceps Curls mit Band", "kategorie": "Arme (Bizeps)", "umfang": "15 WH", "hinweis": "Sitzend, Band unter den Füßen fixieren", "dauer": 35, "pause_after": 10, "id": 24},
      {"nr": "XIV", "satz": "2. Satz", "seite": "Beide", "titel": "Überkopf-Trizepsdrücken im Sitzen", "kategorie": "Arme (Trizeps)", "umfang": "15 WH", "hinweis": "Sitzend, Band hinter dem Rücken fixieren und nach oben strecken", "dauer": 35, "pause_after": 15, "id": 25},
      {"nr": "XV", "satz": "2. Satz", "seite": "Beide", "titel": "Crunches", "kategorie": "Gerader Bauch", "umfang": "20 WH", "hinweis": "Rückenlage, Füße locker abgelegt, nur den Schultergürtel anheben", "dauer": 40, "pause_after": 15, "id": 26},
      {"nr": "XVI", "satz": "2. Satz", "seite": "Beide", "titel": "Unterarmstütz auf Knien", "kategorie": "Gesamter Core", "umfang": "45 Sek", "hinweis": "Auf Ellbogen und Knien halten, Unterschenkel entspannt am Boden", "dauer": 45, "pause_after": 30, "id": 27}
    ]
  },
workout3: {
    id: 'workout3',
    name: "Warm Up",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    exercises: [
      {"nr": "I", "satz": "1. Satz", "seite": "L", "titel": "Fußgelenkskreisen (im Uhrzeigersinn)", "kategorie": "Sprunggelenk-Mobilisation", "umfang": "10 WH", "hinweis": "Fußgelenk kontrolliert im Uhrzeigersinn kreisen", "dauer": 12, "pause_after": 2, "id": 40},
      {"nr": "II", "satz": "1. Satz", "seite": "L", "titel": "Fußgelenkskreisen (gegen Uhrzeigersinn)", "kategorie": "Sprunggelenk-Mobilisation", "umfang": "10 WH", "hinweis": "Fußgelenk kontrolliert gegen den Uhrzeigersinn kreisen", "dauer": 12, "pause_after": 2, "id": 41},
      {"nr": "III", "satz": "1. Satz", "seite": "R", "titel": "Fußgelenkskreisen (im Uhrzeigersinn)", "kategorie": "Sprunggelenk-Mobilisation", "umfang": "10 WH", "hinweis": "Fußgelenk kontrolliert im Uhrzeigersinn kreisen", "dauer": 12, "pause_after": 2, "id": 42},
      {"nr": "IV", "satz": "1. Satz", "seite": "R", "titel": "Fußgelenkskreisen (gegen Uhrzeigersinn)", "kategorie": "Sprunggelenk-Mobilisation", "umfang": "10 WH", "hinweis": "Fußgelenk kontrolliert gegen den Uhrzeigersinn kreisen", "dauer": 12, "pause_after": 2, "id": 43},
      {"nr": "V", "satz": "1. Satz", "seite": "L", "titel": "Beinschwünge (vor & zurück)", "kategorie": "Dynamische Hüftflexibilität", "umfang": "20 WH", "hinweis": "Bein kontrolliert nach vorne und hinten schwingen", "dauer": 30, "pause_after": 2, "id": 44},
      {"nr": "VI", "satz": "1. Satz", "seite": "R", "titel": "Beinschwünge (vor & zurück)", "kategorie": "Dynamische Hüftflexibilität", "umfang": "20 WH", "hinweis": "Bein kontrolliert nach vorne und hinten schwingen", "dauer": 30, "pause_after": 2, "id": 45},
      {"nr": "VII", "satz": "1. Satz", "seite": "L", "titel": "Seitliche Beinschwünge", "kategorie": "Hüftabduktion / Adduktion", "umfang": "20 WH", "hinweis": "Bein vor dem Körper seitlich hin und her schwingen", "dauer": 30, "pause_after": 2, "id": 46},
      {"nr": "VIII", "satz": "1. Satz", "seite": "R", "titel": "Seitliche Beinschwünge", "kategorie": "Hüftabduktion / Adduktion", "umfang": "20 WH", "hinweis": "Bein vor dem Körper seitlich hin und her schwingen", "dauer": 30, "pause_after": 2, "id": 47},
      {"nr": "IX", "satz": "1. Satz", "seite": "Beide", "titel": "Hamstring Sweeps (im Wechsel)", "kategorie": "Dynamischer Beinbeuger-Stretch", "umfang": "20 WH", "hinweis": "Abwechselnd Ferse aufsetzen, Oberkörper beugen und mit den Händen am Boden entlangstreifen", "dauer": 30, "pause_after": 2, "id": 48},
      {"nr": "X", "satz": "1. Satz", "seite": "Beide", "titel": "Knie zur Brust (im Wechsel)", "kategorie": "Hüftbeuger & Gesäß", "umfang": "10 WH", "hinweis": "Abwechselnd ein Knie im Stand heranziehen und kurz halten", "dauer": 20, "pause_after": 2, "id": 49},
      {"nr": "XI", "satz": "1. Satz", "seite": "Beide", "titel": "Piriformis-Stretch im Stand (im Wechsel)", "kategorie": "Gesäß & Hüftrotatoren", "umfang": "10 WH", "hinweis": "Fußknöchel aufs Gegenknie legen und Becken leicht absenken", "dauer": 20, "pause_after": 2, "id": 50},
      {"nr": "XII", "satz": "1. Satz", "seite": "Beide", "titel": "Open the Gates (im Wechsel)", "kategorie": "Hüftöffnung & Mobilisation", "umfang": "20 WH", "hinweis": "Knie anheben und im weiten Bogen nach außen rotieren", "dauer": 25, "pause_after": 2, "id": 51},
      {"nr": "XIII", "satz": "1. Satz", "seite": "Beide", "titel": "Anfersen / Butt Kicks (im Wechsel)", "kategorie": "Dynamisches Aufwärmen & Puls", "umfang": "40 WH", "hinweis": "Fersen zügig im Wechsel in Richtung Gesäß bringen", "dauer": 30, "pause_after": 2, "id": 52},
      {"nr": "XIV", "satz": "1. Satz", "seite": "Beide", "titel": "Kniehebelauf / High Knees (im Wechsel)", "kategorie": "Dynamisches Aufwärmen & Puls", "umfang": "40 WH", "hinweis": "Knie im Wechsel dynamisch auf Hüfthöhe anheben", "dauer": 30, "pause_after": 0, "id": 53}
    ]
  },
  workout4: {
    id: 'workout4',
    name: "Cool Down",
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    exercises: [
      {"nr": "I", "satz": "1. Satz", "seite": "Beide", "titel": "Beidbeinige Glute Bridge mit Band", "kategorie": "Gluteus Maximus / Abdruck", "umfang": "15 WH", "hinweis": "Band über Knie, Knie leicht nach außen drücken", "dauer": 30, "pause_after": 15, "id": 4},
      {"nr": "II", "satz": "1. Satz", "seite": "Beide", "titel": "Tibialisheber (Schienbeinheber)", "kategorie": "Schienbein (Tibialis Anterior)", "umfang": "20 WH", "hinweis": "An Wand gelehnt, Fußspitzen hochziehen", "dauer": 30, "pause_after": 15, "id": 10}
    ]
  }  
};

// Berechnet die Gesamtdauer in Minuten (Übungsdauer + Pausen + 20s initialer Count-Down)
function calculateWorkoutDurationInMinutes(exercises) {
  if (!exercises || exercises.length === 0) return 0;
  const totalSeconds = exercises.reduce((acc, ex) => {
    const duration = ex.dauer || 0;
    const pause = ex.pause_after !== undefined ? ex.pause_after : 20;
    return acc + duration + pause;
  }, 20); // 20 Sekunden Start-Countdown inklusive
  return Math.ceil(totalSeconds / 60);
}

function getWorkoutName(workoutId) {
  try {
    const savedNames = JSON.parse(localStorage.getItem('workout_names') || '{}');
    return savedNames[workoutId] || defaultWorkouts[workoutId]?.name || '';
  } catch (e) {
    return defaultWorkouts[workoutId]?.name || '';
  }
}

function saveWorkoutName(workoutId, newName) {
  try {
    const savedNames = JSON.parse(localStorage.getItem('workout_names') || '{}');
    savedNames[workoutId] = newName;
    localStorage.setItem('workout_names', JSON.stringify(savedNames));
  } catch (e) {
    console.error("Fehler beim Speichern in localStorage:", e);
  }
}