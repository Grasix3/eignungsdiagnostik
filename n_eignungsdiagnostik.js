const questions = [
  {
    question: 'Interpretieren Sie folgenden Code, welche Ausgabe erhält man? <img class="question-image" src="file:///C:/Users/uic88596/Documents/Conti%20-%20Unterlagen/Neuer%20Ordner/eign/Codeschnippsel1.png" alt="Codebeispiel" />',
    answers: [
      { text: "Code ist fehlerhaft, kein Rückgabewert", correct: false },
      { text: "15", correct: true },
      { text: "10", correct: false },
    ],
    correctAnswer: 1,
    tag: "Analyse"
  },
  {
    question: "Was ist ein API (Application Programming Interface)?",
    answers: [
      { text: "Eine Programmiersprache", correct: false },
      { text: "Ein Betriebssystem", correct: false },
      { text: "Ein Vertrag zwischen Softwaresystemen, der festlegt, wie sie Informationen austauschen", correct: true },
    ],
    correctAnswer: 2,
    tag: "allgemeine Informatik"
  },
  {
    question: "Was ist die Aufgabe eines Kompilierers?",
    answers: [
      { text: "Einen Hochsprachen-Code in Maschinensprache umzuwandeln", correct: true },
      { text: "Ein Programm zur Laufzeit auszuführen", correct: false },
      { text: "Einen Maschinensprachen-Code in Hochsprache umzuwandeln", correct: false },
    ],
    correctAnswer: 0,
    tag: "allgemeine Informatik"
  },
  {
    question: "Welche der folgenden Aussagen ist eine gültige Definition für eine Funktion?",
    answers: [
      { text: "Ein Speicherbereich für Daten", correct: false },
      { text: "Eine Sammlung von Anweisungen, die eine bestimmte Aufgabe ausführen", correct: true },
      { text: "Eine Schleife, die wiederholt wird", correct: false },
    ],
    correctAnswer: 1,
    tag: "allgemeine Informatik"
  },
  {
    question: "Was bedeutet die Abkürzung HTML?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyperlink Transfer Markup Language", correct: false },
      { text: "Hypertext Machine Language", correct: false },
    ],
    correctAnswer: 0,
    tag: "allgemeine Informatik"
  },
  {
    question: 'Interpretieren Sie folgenden Code, welche Ausgabe erhält man? <img class="question-image" src="file:///C:/Users/uic88596/Documents/Conti%20-%20Unterlagen/Neuer%20Ordner/eign/Codeschnippsel2.png" alt="Codebeispiel" />',
    answers: [
      { text: "0", correct: false },
      { text: "%d\n, *p + 2", correct: false },
      { text: "7", correct: true },
    ],
    correctAnswer: 2,
    tag: "Analyse"
  },
  {
    question: "Was ist eine rekursive Funktion?",
    answers: [
      { text: "Eine Funktion, die sich selbst aufruft", correct: true },
      { text: "Eine Funktion, die eine Schleife enthält", correct: false },
      { text: "Eine Funktion, die auf einen Webserver zugreift", correct: false },
    ],
    correctAnswer: 0,
    tag: "allgemeine Informatik"
  },
  {
    question: "Was verstehen Sie unter SQL?",
    answers: [
      { text: "Eine Datenbanksprache", correct: true },
      { text: "Eine Bildbearbeitungssoftware", correct: false },
      { text: "Ein Textverarbeitungsprogramm", correct: false },
    ],
    correctAnswer: 0,
    tag: "Datenbanken"
  },
  {
    question: "Was wird in der EDV unter „Partition“ verstanden?",
    answers: [
      { text: "Die einzelnen Musiktracks auf einer CD.", correct: false },
      { text: "Die vollständige Löschung der Festplatte.", correct: false },
      { text: "Die Aufteilung eines Speichermediums in mehrere Bereiche.", correct: true },
    ],
    correctAnswer: 2,
    tag: "IT-Sec"
  },
  {
    question: "Wofür steht die Abkürzung SEO im Zusammenhang mit Informatik?",
    answers: [
      { text: "Search Engine Optimization", correct: true },
      { text: "Senior Executive Officer", correct: false },
      { text: "Search Export Operator", correct: false },
    ],
    correctAnswer: 0,
    tag: "Reports"
  },
  {
    question: "Wie viele Bits ergeben ein Byte?",
    answers: [
      { text: "8", correct: true },
      { text: "32", correct: false },
      { text: "16", correct: false },
    ],
    correctAnswer: 0,
    tag: "Grundlagen Informatik"
  },
  {
    question: "Welches der folgenden Begriffe stehen für eine Programmiersprache?",
    answers: [
      { text: "C", correct: true },
      { text: "Jawa", correct: false },
      { text: "PowerBI", correct: false },
    ],
    correctAnswer: 0,
    tag: "C"
  },
  {
    question: "Setze die Zahlenreihe fort: 1-3-6-10-15-?",
    answers: [
      { text: "20", correct: false },
      { text: "21", correct: true },
      { text: "22", correct: false },
    ],
    correctAnswer: 1,
    tag: "Analyse",
    tag: "logisches Denken"
  },
  {
    question: "Setze die Zahlenreihe fort: 16-14-28-30-15-13-?",
    answers: [
      { text: "24", correct: false },
      { text: "18", correct: false },
      { text: "26", correct: true },
    ],
    correctAnswer: 2,
    tag: "Analyse",
    tag: "logisches Denken"
  },
  {
    question: "Was ist Künstliche Intelligenz (KI)?",
    answers: [
      { text: "Die Simulation menschlicher Intelligenz in Maschinen", correct: true },
      { text: "Die Fähigkeit eines Computers, Emotionen zu haben", correct: false },
      { text: "Eine fortschrittliche Version von Siri oder Alexa", correct: false },
    ],
    correctAnswer: 0,
    tag: "KI"
  },
  {
    question: "Was ist ein Hauptvorteil der Verwendung von Cloud-Computing?",
    answers: [
      { text: "Es reduziert die Notwendigkeit von Hardware vor Ort", correct: true },
      { text: "Es macht Internetverbindungen schneller", correct: false },
      { text: "Es verbessert die Grafikqualität von Computerspielen", correct: false },
    ],
    correctAnswer: 0,
    tag: "Cloud"
  },
  {
    question: "Was versteht man unter 'Embedded Systems'?",
    answers: [
      { text: "Ein Betriebssystem speziell für mobile Geräte", correct: false },
      { text: "Es ist ein System, das in ein größeres System eingebettet ist und eine spezifische Funktion oder mehrere Funktionen ausführt", correct: true },
      { text: "Ein Computersystem mit Software, die nicht aktualisiert oder geändert werden kann", correct: false },
    ],
    correctAnswer: 1,
    tag: "Embedded Systems"
  },
  {
    question: "Was ist eine der Hauptaufgaben des Controllings in einem Unternehmen?",
    answers: [
      { text: "Die Programmierung von Software", correct: false },
      { text: "Das Design der Unternehmenswebsite", correct: false },
      { text: "Die Überwachung und Steuerung von Unternehmensprozessen und -leistungen", correct: true },
    ],
    correctAnswer: 2,
    tag: "Controlling"
  },
  
  // Analyse
  {
    question: "Was versteht man unter dem Begriff 'Regression' in der Datenanalyse?",
    answers: [
      { text: "Ein statistisches Verfahren zur Vorhersage von Werten basierend auf bekannten Datenpunkten", correct: true },
      { text: "Eine Methode zur Clusteranalyse von Daten", correct: false },
      { text: "Die Auswertung von Datenbankabfragen", correct: false },
    ],
    correctAnswer: 0,
    tag: "Analyse"
  },
  {
    question: "Was ist der Zweck einer Korrelationsanalyse in der Datenanalyse?",
    answers: [
      { text: "Den kausalen Zusammenhang zwischen zwei Variablen zu bestimmen", correct: false },
      { text: "Die Verteilung von Daten zu analysieren", correct: false },
      { text: "Den Grad der Beziehung zwischen zwei Variablen zu messen", correct: true },
    ],
    correctAnswer: 2,
    tag: "Analyse"
  },
  
  // allgemeine Informatik
  {
    question: "Was ist ein Stack Overflow?",
    answers: [
      { text: "Ein Fehler im Speichermanagement eines Programms", correct: true },
      { text: "Eine Website für Fragen und Antworten zur Programmierung", correct: false },
      { text: "Ein Sicherheitsangriff auf Netzwerke", correct: false },
    ],
    correctAnswer: 0,
    tag: "allgemeine Informatik"
  },
  {
    question: "Was ist der Unterschied zwischen einem nativen und einem interpretierten Programm?",
    answers: [
      { text: "Ein nativer Code wird direkt auf der Hardware ausgeführt, während ein interpretierter Code schrittweise von einem Interpreter ausgeführt wird", correct: true },
      { text: "Ein nativer Code ist schneller als ein interpretierter Code", correct: false },
      { text: "Ein interpretierter Code wird in einer bestimmten Programmiersprache geschrieben, während ein nativer Code hardwarenah ist", correct: false },
    ],
    correctAnswer: 0,
    tag: "allgemeine Informatik"
  },
  
  // Datenbanken
  {
    question: "Was ist ein Datenbankindex und wie kann er die Abfrageleistung verbessern?",
    answers: [
      { text: "Ein Datenbankindex ist eine Kopie der gesamten Datenbank, die für schnelle Abfragen verwendet wird", correct: false },
      { text: "Ein Datenbankindex ist eine Datenstruktur, die den Zugriff auf bestimmte Daten in einer Datenbank beschleunigt", correct: true },
      { text: "Ein Datenbankindex ist ein zusätzlicher Speicherplatz für Sicherungszwecke", correct: false },
    ],
    correctAnswer: 1,
    tag: "Datenbanken"
  },
  {
    question: "Was ist der Unterschied zwischen einem INNER JOIN und einem OUTER JOIN in SQL?",
    answers: [
      { text: "Ein INNER JOIN gibt nur die übereinstimmenden Zeilen aus, während ein OUTER JOIN auch nicht übereinstimmende Zeilen ausgibt", correct: true },
      { text: "Ein INNER JOIN kann nur zwischen zwei Tabellen durchgeführt werden, während ein OUTER JOIN mehrere Tabellen unterstützt", correct: false },
      { text: "Ein INNER JOIN gibt alle Zeilen aus, während ein OUTER JOIN nur die übereinstimmenden Zeilen ausgibt", correct: false },
    ],
    correctAnswer: 0,
    tag: "Datenbanken"
  },
  
  // IT-Sec
  {
    question: "Was ist ein Firewall und welche Aufgabe hat sie in der Informationssicherheit?",
    answers: [
      { text: "Eine Firewall ist eine Software, die den Zugriff auf das Internet regelt und unerwünschte Netzwerkverbindungen blockiert", correct: true },
      { text: "Eine Firewall ist ein physisches Gerät, das vor Überhitzung schützt und Brände verhindert", correct: false },
      { text: "Eine Firewall ist eine Sicherheitsmaßnahme für den physischen Zugang zu einem Gebäude", correct: false },
    ],
    correctAnswer: 0,
    tag: "IT-Sec"
  },
  {
    question: "Was ist eine Denial-of-Service (DoS)-Attacke und wie funktioniert sie?",
    answers: [
      { text: "Eine DoS-Attacke ist ein Versuch, Informationen aus einer Datenbank zu extrahieren", correct: false },
      { text: "Eine DoS-Attacke ist ein Angriff, der darauf abzielt, ein Netzwerk oder einen Dienst durch Überlastung lahmzulegen", correct: true },
      { text: "Eine DoS-Attacke ist ein Versuch, die Benutzeranmeldung eines Systems zu umgehen", correct: false },
    ],
    correctAnswer: 1,
    tag: "IT-Sec"
  },
  
  // Reports
  {
    question: "Was ist ein Dashboard in einem Business Intelligence-System?",
    answers: [
      { text: "Ein Dashboard ist ein Bericht, der automatisch generiert wird und die wichtigsten Geschäftskennzahlen visualisiert", correct: true },
      { text: "Ein Dashboard ist ein Tool zur Erstellung von Tabellen und Diagrammen in einem Bericht", correct: false },
      { text: "Ein Dashboard ist eine Methode zum Drucken von Berichten auf Papier", correct: false },
    ],
    correctAnswer: 0,
    tag: "Reports"
  },
  {
    question: "Was versteht man unter dem Begriff 'Drill-Through' in einem Bericht?",
    answers: [
      { text: "Drill-Through ermöglicht es Benutzern, von einem summarischen Bericht zu detaillierten Informationen zu wechseln", correct: true },
      { text: "Drill-Through ist eine Methode zur Datenverschlüsselung in einem Bericht", correct: false },
      { text: "Drill-Through ist ein Tool zur Zusammenführung von Daten aus verschiedenen Datenquellen", correct: false },
    ],
    correctAnswer: 0,
    tag: "Reports"
  },
  
  // Grundlagen Informatik
  {
    question: "Was ist ein Algorithmus?",
    answers: [
      { text: "Ein Algorithmus ist eine Programmiersprache", correct: false },
      { text: "Ein Algorithmus ist eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems", correct: true },
      { text: "Ein Algorithmus ist ein Computermodell für die Simulation realer Phänomene", correct: false },
    ],
    correctAnswer: 1,
    tag: "Grundlagen Informatik"
  },
  {
    question: "Was ist der Unterschied zwischen einer While-Schleife und einer For-Schleife in der Programmierung?",
    answers: [
      { text: "While-Schleife: Unbestimmte Anzahl von Iterationen. For-Schleife: Feste Anzahl von Iterationen.", correct: false },
      { text: "While-Schleife: Vorhersehbare Schleife. For-Schleife: Unbestimmte Anzahl von Iterationen.", correct: false },
      { text: "While-Schleife: Unbekannte Anzahl von Iterationen. For-Schleife: Bekannte Anzahl von Iterationen.", correct: true },
    ],
    correctAnswer: 2,
    tag: "Grundlagen Informatik"
  },
  
  // C
  {
    question: "Was ist der Unterschied zwischen einer Funktion und einer Prozedur in der Programmierung?",
    answers: [
      { text: "Eine Funktion gibt einen Rückgabewert zurück, während eine Prozedur keinen Rückgabewert hat", correct: true },
      { text: "Eine Funktion ist in C geschrieben, während eine Prozedur in C++ geschrieben ist", correct: false },
      { text: "Eine Funktion kann nur in Main-Funktionen verwendet werden, während eine Prozedur in beliebigen Funktionen verwendet werden kann", correct: false },
    ],
    correctAnswer: 0,
    tag: "C"
  },
  {
    question: "Was ist der Unterschied zwischen dem Präprozessor und dem Compiler in C?",
    answers: [
      { text: "Der Präprozessor übersetzt den C-Code in Maschinencode, während der Compiler Vorprozessordirektiven wie #include verarbeitet", correct: false },
      { text: "Der Präprozessor fügt den Header-Code in den C-Code ein, während der Compiler den C-Code in Maschinencode übersetzt", correct: true },
      { text: "Der Präprozessor kompiliert den C-Code in Assemblersprache, während der Compiler den Assemblercode in Maschinencode übersetzt", correct: false },
    ],
    correctAnswer: 1,
    tag: "C"
  },
  
  // logisches Denken
  {
    question: "Setzen Sie die Zahlenreihe fort: 5-10-20-40-?",
    answers: [
      { text: "80", correct: true },
      { text: "60", correct: false },
      { text: "100", correct: false },
    ],
    correctAnswer: 0,
    tag: "logisches Denken"
  },
  {
    question: "Welche Zahl gehört nicht zu der folgenden Reihe? 2-5-10-17-28",
    answers: [
      { text: "10", correct: false },
      { text: "17", correct: false },
      { text: "28", correct: true },
    ],
    correctAnswer: 2,
    tag: "logisches Denken"
  },
  
  // KI
  {
    question: "Was ist der Unterschied zwischen maschinellem Lernen und tiefem Lernen (Deep Learning)?",
    answers: [
      { text: "Maschinelles Lernen verwendet spezifische Algorithmen, während tiefes Lernen neuronale Netzwerke mit mehreren Schichten verwendet", correct: true },
      { text: "Maschinelles Lernen ist ein übergeordneter Begriff für KI, während tiefes Lernen spezifisch auf neuronale Netzwerke verweist", correct: false },
      { text: "Maschinelles Lernen verwendet überwachte Lernmethoden, während tiefes Lernen unsupervised Lernmethoden verwendet", correct: false },
    ],
    correctAnswer: 0,
    tag: "KI"
  },
  {
    question: "Was versteht man unter dem Begriff 'Deep Learning'?",
    answers: [
      { text: "Ein Algorithmus, der es Computern ermöglicht, menschenähnliches Denken und Verstehen zu erreichen", correct: false },
      { text: "Ein Bereich der KI, der sich auf die Verarbeitung großer Mengen von Daten durch neuronale Netzwerke konzentriert", correct: true },
      { text: "Ein Prozess, bei dem KI-Systeme aus Erfahrungen lernen und ihre Leistung verbessern", correct: false },
    ],
    correctAnswer: 1,
    tag: "KI"
  },
  
  // Cloud
  {
    question: "Was versteht man unter dem Begriff 'Skalierbarkeit' in Bezug auf Cloud-Computing?",
    answers: [
      { text: "Skalierbarkeit bezieht sich auf die Möglichkeit, Ressourcen in der Cloud dynamisch anzupassen, um den aktuellen Bedarf zu erfüllen", correct: true },
      { text: "Skalierbarkeit bezieht sich auf die Geschwindigkeit der Datenübertragung in der Cloud", correct: false },
      { text: "Skalierbarkeit bezieht sich auf die Sicherheit von Daten in der Cloud", correct: false },
    ],
    correctAnswer: 0,
    tag: "Cloud"
  },
  {
    question: "Was ist ein Cloud-Service-Modell?",
    answers: [
      { text: "Ein Cloud-Service-Modell beschreibt die physische Infrastruktur einer Cloud-Umgebung", correct: false },
      { text: "Ein Cloud-Service-Modell beschreibt die Verantwortlichkeiten und den Umfang der bereitgestellten Cloud-Dienste", correct: true },
      { text: "Ein Cloud-Service-Modell beschreibt die Anwendungsentwicklung für die Cloud", correct: false },
    ],
    correctAnswer: 1,
    tag: "Cloud"
  },
  
  // Embedded Systems
  {
    question: "Was ist ein Mikrocontroller und wie unterscheidet er sich von einem Mikroprozessor?",
    answers: [
      { text: "Ein Mikrocontroller ist ein integrierter Schaltkreis, der einen Mikroprozessor, Speicher und Peripheriegeräte auf einem einzigen Chip kombiniert", correct: true },
      { text: "Ein Mikrocontroller ist eine spezielle Software zur Steuerung von Mikroprozessoren", correct: false },
      { text: "Ein Mikrocontroller ist ein kleinerer und leistungsstärkerer Mikroprozessor", correct: false },
    ],
    correctAnswer: 0,
    tag: "Embedded Systems"
  },
  {
    question: "Was ist ein Echtzeitbetriebssystem (RTOS) und welche Anwendungen haben RTOS?",
    answers: [
      { text: "Ein RTOS ist ein Betriebssystem für zeitkritische Anwendungen, z.B. Flugzeugsteuerungssysteme.", correct: true },
      { text: "Ein RTOS ermöglicht Echtzeitkommunikation zwischen Computern.", correct: false },
      { text: "Ein RTOS wird in eingebetteten Systemen verwendet, um die Anwendungsleistung zu steigern.", correct: false },
    ],
    correctAnswer: 0,
    tag: "Embedded Systems"
  },  
  
  // Controlling
  {
    question: "Beschreiben Sie den Prozess der Budgetierung in einem Unternehmen.",
    answers: [
      { text: "Planung und Festlegung finanzieller Ziele für einen bestimmten Zeitraum.", correct: true },
      { text: "Aufteilung des Unternehmens in verschiedene Abteilungen und Bereiche.", correct: false },
      { text: "Bewertung der Leistung von Mitarbeitern im Unternehmen.", correct: false },
    ],
    correctAnswer: 0,
    tag: "Controlling"
  },
  {
    question: "Was versteht man unter dem Begriff 'Kostenrechnung' und welche Arten von Kosten gibt es?",
    answers: [
      { text: "Analyse von Kundennachfrage und Preisbildung. Es gibt Einzelkosten, Gemeinkosten und Opportunitätskosten.", correct: false },
      { text: "Ermittlung und Überwachung der Kosten im Unternehmen. Es gibt fixe, variable und gemischte Kosten.", correct: true },
      { text: "Berechnung des Gewinns eines Unternehmens. Es gibt monetäre und nicht-monetäre Kosten.", correct: false },
      
    ],
    correctAnswer: 1,
    tag: "Controlling"
  },
  {
    question: "Erläutern Sie den Unterschied zwischen internem und externem Controlling.",
    answers: [
      
      { text: "Internes Controlling: Analyse und Optimierung interner Kommunikation. Externes Controlling: Verwaltung von Kundenbeziehungen.", correct: false },
      { text: "Internes Controlling: Verwaltung und Wartung interner IT-Systeme. Externes Controlling: Nutzung externer IT-Dienstleistungen.", correct: false },
      { text: "Internes Controlling: Überwachung und Steuerung von Unternehmensprozessen und -leistungen. Externes Controlling: Zusammenarbeit mit externen Partnern.", correct: true },
    ],
    correctAnswer: 2,
    tag: "Controlling"
  }
  
];

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
  });

  const userInfoForm = document.getElementById('user-info-form');
  const quizForm = document.getElementById('quiz-form');
  const resultContainer = document.getElementById('result-container');
  const abortButton = document.getElementById('abort-btn');
  const resumeButton = document.getElementById('resume-btn');
  const nextButton = document.createElement('button');
  const timerElement = document.getElementById('timer');
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let timer;
  let timeLeft = 15 * 60; // 15 Minuten
  let userAnswers = [];  // Array to store user's answers

  nextButton.type = 'button';
  nextButton.textContent = 'Nächste Frage';

  userInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userInfoForm.style.display = 'none';
    quizForm.style.display = 'block';
    abortButton.style.display = 'block';
    timerElement.style.display = 'block';
    startTimer();
    generateQuiz();
  });

  nextButton.addEventListener('click', () => {
    const userAnswer = getUserAnswer();
    if (userAnswer === null) {
      alert('Bitte wählen Sie eine Antwort aus.');
      return;
    }

    userAnswers[currentQuestionIndex] = userAnswer; // store user's answer

    if (questions[currentQuestionIndex].correctAnswer === userAnswer) {
      correctAnswers++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      generateQuiz();
    } else {
      quizForm.style.display = 'none';
      displayResult();
    }
  });

  abortButton.addEventListener('click', pauseQuiz);
  resumeButton.addEventListener('click', resumeQuiz);

  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `Verbleibende Zeit: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        quizForm.style.display = 'none';
        abortButton.style.display = 'none';
        resumeButton.style.display = 'none';
        displayResult();
      }
    }, 1000);
  }

  function pauseQuiz() {
    clearInterval(timer);
    quizForm.style.display = 'none';
    abortButton.style.display = 'none';
    resumeButton.style.display = 'block';
  }

  function resumeQuiz() {
    startTimer();
    quizForm.style.display = 'block';
    abortButton.style.display = 'block';
    resumeButton.style.display = 'none';
  }

  function generateQuiz() {
    const question = questions[currentQuestionIndex];
    let quizHtml = `<fieldset><legend>${question.question}</legend>`;
    question.answers.forEach((answer, aIndex) => {
      quizHtml += `
        <div>
          <input type="radio" id="q${currentQuestionIndex}a${aIndex}" name="q${currentQuestionIndex}" value="${aIndex}">
          <label for="q${currentQuestionIndex}a${aIndex}">${answer.text}</label>
        </div>`;
    });
    quizHtml += '</fieldset>';
    quizForm.innerHTML = quizHtml;
    quizForm.appendChild(nextButton);
  }

  function getUserAnswer() {
    const answerEls = document.querySelectorAll(`input[name="q${currentQuestionIndex}"]:checked`);
    return answerEls.length > 0 ? Number(answerEls[0].value) : null;
  }

  function getUserAnswerForIndex(index) {
    return userAnswers[index];
  }

  function analyzeTags() {
    let correctTags = questions
      .filter((_, index) => questions[index].correctAnswer === getUserAnswerForIndex(index))
      .map(q => q.tag);

    let departmentRecommendations = [];

    correctTags.forEach((tag) => {
      if (departmentTags[tag]) {
        departmentTags[tag].forEach((department) => {
          if (!departmentRecommendations.includes(department)) {
            departmentRecommendations.push(department);
          }
        });
      }
    });

    return departmentRecommendations.slice(0, 3); // return up to 3 departments
  }

  let departmentTags = {
    "Allgemeine Informatik": ["A SCT ASW SWT SET AUT", "A IT MA CI / VNI CCN O RBG IE 31&2"],
    "Datenbanken, Python": ["A AN PL1 RD EMEA RBG SW 2"],
    "KI, IT-Sec, TI, Elektrotechnik": ["A SAM HBS AMR PL"],
    "embedded Systems, IT-Sec": ["A AN PL1 RD EMEA RBG SW 1"],
    "Cloud, Industrie 4.0": ["A O M DT DM A"],
    "C, embedded Systems": ["A AN PL3 RD SW FP1"],
    "C": ["A AN PL3 RD SYS FP 2", "A O PUR SQM EM CPM", "A SCT RM HW RGB EMO11"],
    "Cloud": ["GF GIT DP CF"],
    "IT-Sec": ["A SAM PSS OSS RD SE FSS"],
    "KI": ["A SCT RAE OE SW"],
    "Reports": ["A SCT ARDC PRI", "A AN O RBG FF2 SCM", "A FC BC CM", "A AN S3 CC1 S", "A AN O RBG C FCC1"],
    "Analyse": ["A SCT RAE IM", "A AM ADAS O ING IE TS", "A SAM PSS ECC RD CCU SE"],
    "Controlling": ["A AN C RD"],
    "Elektrotechnik": ["A AN O RBG HR E&T", "A SCT RM HW RGB EMO11"],
    "Industrie 4.0": ["A AN O RBG FF1 IE SMT", "A AN O RBG IE51"],
    "Python, SQL, Datenbanken": ["A O IT MA CI"]
  };
  
  function displayResult() {
    clearInterval(timer);
    timerElement.style.display = 'none';
    abortButton.style.display = 'none';
  
    // Vorname, Nachname und ID abrufen
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const userId = document.getElementById('user-id').value;
  
    const resultText = `${firstName} ${lastName}, mit der ID: ${userId}, hat ${correctAnswers} von ${questions.length} Fragen richtig beantwortet.`;
  
    const departmentRecommendations = analyzeTags();
    const recommendationText = departmentRecommendations.length > 0
      ? `Basierend auf ${firstName} ${lastName}'s Antworten empfehlen wir folgende Abteilung(en): ${departmentRecommendations.join(', ')}`
      : `Leider haben wir keine spezifische Abteilungsempfehlung basierend auf ${firstName} ${lastName}'s Antworten. HINWEIS: Das geschieht nur, wenn der Benutzer alles falsch beantwortet hat.`;
  
    resultContainer.innerHTML = `<p>${resultText}</p><p>${recommendationText}</p>`;
    resultContainer.style.display = 'block';
  
    // E-Mail-Adresse aus der Benutzer-ID erstellen
    const userEmail = `${userId}@contiwan.com`;
    const subject_for_mail = `Das Ergebnis der Eignungsdiagnostik von ${userId}`
  
    // E-Mail-Daten erstellen
    var templateParams = {
      to_email: 'michael.grasmuck@icloud.com',
      subject: subject_for_mail,
      from_name: 'Michael Grasmück',
      to_name: 'Tobias',
      message: resultText + " " + recommendationText,
      reply_to: userEmail,  
    };
  
    // E-Mail senden
    emailjs.send('service_weu0lsp', 'template_qv9theq', templateParams, 'JF73zWJMp6q5M8-dq')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.error('FAILED...', error);
    });
  }
});
