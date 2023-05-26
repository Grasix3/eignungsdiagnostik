const questions = [
  {
    question: 'Was ist das im Bild gezeigte Tier? <img src="./conti_logo_transparent.png" alt="Tier" />',
    answers: [
      { text: "Katze", correct: false },
      { text: "Löwe", correct: false },
      { text: "Elefant", correct: true },
    ],
    correctAnswer: 2,
    tag: "Analyse"
  },
  {
    question: "Was ist ein API (Application Programming Interface)?",
    answers: [
      { text: "Eine Programmiersprache", correct: false },
      { text: "Ein Vertrag zwischen Softwaresystemen, der festlegt, wie sie Informationen austauschen", correct: true },
      { text: "Ein Betriebssystem", correct: false },
    ],
    correctAnswer: 1,
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
    tag: "C"
  },
  {
    question: "Welche der folgenden Aussagen ist eine gültige Definition für eine Funktion?",
    answers: [
      { text: "Eine Sammlung von Anweisungen, die eine bestimmte Aufgabe ausführen", correct: true },
      { text: "Ein Speicherbereich für Daten", correct: false },
      { text: "Eine Schleife, die wiederholt wird", correct: false },
    ],
    correctAnswer: 0,
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
    question: "Was ist eine rekursive Funktion?",
    answers: [
      { text: "Eine Funktion, die sich selbst aufruft", correct: true },
      { text: "Eine Funktion, die eine Schleife enthält", correct: false },
      { text: "Eine Funktion, die auf einen Webserver zugreift", correct: false },
    ],
    correctAnswer: 0,
    tag: "Python"
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
    question: "Wofür steht die Abkürzung SEO?",
    answers: [
      { text: "Search Engine Optimization", correct: true },
      { text: "Senior Executive Officer", correct: false },
      { text: "Search Expo", correct: false },
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
    tag: "Elektrotechnik"
  },
  {
    question: "Welches der folgenden Begriffe stehen für eine Programmiersprache?",
    answers: [
      { text: "C++", correct: true },
      { text: "Jawa", correct: false },
      { text: "Delphi", correct: false },
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
    tag: "Analyse"
  },
  {
    question: "Setze die Zahlenreihe fort: 16-14-28-30-15-13-?",
    answers: [
      { text: "26", correct: true },
      { text: "24", correct: false },
      { text: "18", correct: false },
    ],
    correctAnswer: 0,
    tag: "Analyse"
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
      { text: "Es ist ein System, das in ein größeres System eingebettet ist und eine spezifische Funktion oder mehrere Funktionen ausführt", correct: true },
      { text: "Ein Betriebssystem speziell für mobile Geräte", correct: false },
      { text: "Ein Computersystem mit Software, die nicht aktualisiert oder geändert werden kann", correct: false },
    ],
    correctAnswer: 0,
    tag: "Embedded Systems"
  },
  {
    question: "Was ist eine der Hauptaufgaben des Controllings in einem Unternehmen?",
    answers: [
      { text: "Die Überwachung und Steuerung von Unternehmensprozessen und -leistungen", correct: true },
      { text: "Die Programmierung von Software", correct: false },
      { text: "Das Design der Unternehmenswebsite", correct: false },
    ],
    correctAnswer: 0,
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
        abortButton.style.display = 'none'; // Buttons verstecken, wenn die Zeit abgelaufen ist
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
    const answerRadios = document.querySelectorAll(`input[name="q${currentQuestionIndex}"]`);
    let userAnswer = null;

    answerRadios.forEach((radio) => {
      if (radio.checked) {
        userAnswer = parseInt(radio.value);
      }
    });

    return userAnswer;
  }

  function displayResult() {
    const resultText = `Ergebnis: ${document.getElementById('first-name').value} hat ${correctAnswers} von ${questions.length} Fragen richtig beantwortet.`;
    const percentageCorrect = Math.round((correctAnswers / questions.length) * 100);
    const resultTextWithPercentage = `${resultText} Du hast somit ${percentageCorrect}% der Fragen richtig beantwortet.`;
    resultContainer.innerHTML = resultTextWithPercentage;
    abortButton.style.display = 'none';
    resumeButton.style.display = 'none';
    timerElement.style.display = 'none';

    Email.send({
      SecureToken: "e2200235-e4e3-4203-864d-4e2f5732c087",
      To: 'michael.grasmueck@continental-corporation.com',
      From: "grasi.lol.xd@googlemail.com",
      Subject: `Das ist das Ergebnis der Eignungsdiagnostik von ${document.getElementById('user-id').value}`,
      Body: `ID: ${document.getElementById('user-id').value}<br>
        Name: ${document.getElementById('last-name').value}<br>
        Vorname: ${document.getElementById('first-name').value}<br>
        ${resultTextWithPercentage}`
    }).then(message => console.log(message));
  }
});      
