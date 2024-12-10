const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which programming language is often used for web development?",
      options: ["Java", "Python", "HTML", "JavaScript"],
      correctAnswer: "JavaScript"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: "Jupiter"
    }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit-btn");
  const resultsContainer = document.getElementById("results");
  
  function buildQuiz() {
    quizData.forEach((questionData, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.innerHTML = `<p>${index + 1}. ${questionData.question}</p>`;
  
      questionData.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerHTML = `
          <input type="radio" name="question${index}" value="${option}">
          <label>${option}</label>
        `;
        questionElement.appendChild(optionElement);
      });
  
      quizContainer.appendChild(questionElement);
    });
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".option");
    let score = 0;
  
    quizData.forEach((questionData, index) => {
      const answerContainer = answerContainers[index];
      const selectedInput = answerContainer.querySelector("input:checked");
      const userAnswer = selectedInput ? selectedInput.value : undefined;
  
      if (userAnswer === questionData.correctAnswer) {
        score++;
        answerContainer.style.color = "green";
      } else {
        answerContainer.style.color = "red";
      }
    });
  
    resultsContainer.innerHTML = `Your score: ${score} out of ${quizData.length}`;
  }
  
  buildQuiz();
  
  submitButton.addEventListener("click", showResults);
  