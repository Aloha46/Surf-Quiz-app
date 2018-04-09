"use strict"; 
const questionSet = [
  { 
    number: 1,
    text: 'What is a "thruster"?',
    ans1: 'Board with 3 fins',
    ans2: 'Board with a pointed nose', 
    ans3: "Board over 8' in length", 
    ans4: 'A wave over 6 foot tall'
  }, 

  {
    number: 2,
    text: 'Where is the surf spot Lowers(Trestles) located?',
    ans1: 'California', 
    ans2: 'Hawaii', 
    ans3: 'Australia', 
    ans4: 'Tahitii'
  }, 

  {
    number: 3,
    text: 'Who is the current surfing world champion?',
    ans1: 'Kelly Slater', 
    ans2: 'Tom Curren', 
    ans3: 'Dane Reynolds', 
    ans4: 'John Florence'
  }, 
  {
    number: 4, 
    text: 'What is a floater?',
    ans1: 'Fish waste', 
    ans2: 'Intermediate surfing maneouver', 
    ans3: 'Advanced surfing maneouver', 
    ans4: 'Another name for a short board'
  }, 
  {
    number: 5,
    text: 'The birthplace of surfing is where?',
    ans1: 'Australia', 
    ans2: 'Hawaii', 
    ans3: 'California', 
    ans4: 'Florida'
  }, 
  {
    number: 6,
    text: "What is the name of surfing's 11 time world champ?",
    ans1: 'Martin Potter', 
    ans2: 'Gabriel Medina', 
    ans3: 'Kelly Slater', 
    ans4: 'Andy Irons'
  }, 
  {
    number: 7,
    text: "Surf spot 'Jeffrey's Bay' is located in what country?",
    ans1: 'South Africa', 
    ans2: 'Fiji', 
    ans3: 'Costa Rica', 
    ans4: 'Hawaii'
  }, 
  {
    number: 8,
    text: 'The movie "Endless Summer" was created by who?',
    ans1: 'Bruce Brown', 
    ans2: 'George Lucas', 
    ans3: 'Taylor Steele', 
    ans4: 'John Ho'
  }, 
  {
    number: 9,
    text: "What California city is officially titled 'Surf City?",
    ans1: 'Santa Cruz', 
    ans2: 'San Clemente', 
    ans3: 'Huntington Beach', 
    ans4: 'Encinitas'
  }, 
  {
    number: 10,
    text: 'The best surfing waves in the world are in what country?',
    ans1: 'Indonesia', 
    ans2: 'America', 
    ans3: 'Australia', 
    ans4: 'South Africa'
  }];



const answerlist = [ 
  "Board with 3 fins", 
  "California", 
  "John Florence", 
  "Intermediate surfing maneouver", 
  "Hawaii", 
  "Kelly Slater", 
  "South Africa", 
  "Bruce Brown", 
  "Huntington Beach", 
  "Indonesia"
];


var questionNum = 1;

var correctAnswers = 0;

function questionTemplate(correctAnswers, question, questionsAnswered) {
  return `

  <h1 id="question">${question.text}</h1>
    
    <div class="question-group">
    <form role="form" action="/signup" accept-charset="UTF-8" method="post" class="signup-form">
      <fieldset>
        <label for="radio-group">
         <input class="answer" type="radio" name="option" checked>
         ${question.ans1}
        </label> 
        <label for="radio-group">
         <input class="answer" type="radio" name="option">
         ${question.ans2}
        </label> 
          
        <label for="radio-group">
          <input class="answer" type="radio" name="option">
          ${question.ans3}
         </label>
         
         <label for="radio-group">
          <input class="answer" type="radio" name="option">
          ${question.ans4}
         </label>
      </fieldset>
    </form>
      <button id="js-submit-button">Submit</button>
      </div>

   
    <div id="status-bar">
      <span id="question-count">Question: ${question.number}/10</span>
      <span id="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
    </div>
  </section>
  `;
}
 
    
// //     <h1 id="question">${question.text}</h1>
    
//     <div class="question-group">
// //       <fieldset>
//         <label for="radio-group">
//           <input class="answer" type="radio" name="option" checked></input>
//           <span>${question.ans1}</span>
//         </label>
  
//         <label for= "radio-group">
//           <input class="answer" type="radio" name="option"></input>
//           <span>${question.ans2}</span>
//         </label>
  
//         <label for="radio-group">
//           <input class="answer" type="radio" name="option"></input>
//           <span>${question.ans3}</span>
//         </label>
  
//         <label for="radio-group">
//           <input class="answer" type="radio" name="option"></input>
//           <span>${question.ans4}</span>
//         </label>
//       </fieldset>

//     <button id="js-submit-button">Submit</button>
//       </div>

   
//     <div id="status-bar">
//       <span id="question-count">Question: ${question.number}/10</span>
//       <span id="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
//     </div>
//   </section>
//   `;
// }
function handleStartButton() {
  $('#js-start-button').click(function(event) {
    nextQuestion();
  });
}


function handleSubmitButton() {
    $('#container').on('click', '#js-submit-button', function(event) {
    event.preventDefault()

    const answer = $('input:checked').siblings('label');
    alert(answer);
    const userIsCorrect = checkUserAnswer(answer);
    if(userIsCorrect) {
      generateCorrectFeedback();
    } else {
      generateIncorrectFeedback();
    }
  });
}

function handleNextButton() {
  $('#container').on('click', '#js-next-button', function(event) {

    if(questionNum === 10) {
      createResultsPage(correctAnswers);
    } else {
      iterateQuestion();
      nextQuestion();
  }
  });
}

function nextQuestion() {

  const question = questionSet[questionNum - 1];

  const questionsAnswered = questionNum - 1;

  $('#container').html(questionTemplate(correctAnswers, question, questionsAnswered));
}

function handleRestartButton() {
  $('#container').on('click', '#js-restart-button', function(event) {

    questionNum = 1;

    correctAnswers = 0;

    nextQuestion();
  });
}

function checkUserAnswer(answer) {
  if(answer.text() === answerlist[questionNum - 1]) {
    return true;
  } else {
    return false;
  }
}
function generateCorrectFeedback() {
  $('#container').html(correctFeedback);
  iterateCorrectAnswers();
}

const correctFeedback = `
  <section class="feedback-page" role="main">
    <h2>Correct!</h2>
    <button id="js-next-button">Next</button>
  </section>
`;

function generateIncorrectFeedback() {
  $('#container').html(incorrectFeedbackTemplate(questionNum));
}

function incorrectFeedbackTemplate(questionNum) {
  return `
    <section class="feedback-page">
      <h2>Wrong! Answer is: ${answerlist[questionNum - 1]}</h2>
      <button id="js-next-button">Next</button>
    </section>
`;
}

function iterateQuestion() {
  questionNum++;
}

function iterateCorrectAnswers() {
  correctAnswers++;
};

function createResultsPage(correctAnswers) {
  $('#container').html(`
    <section id="final-page">
      <h2>Final Score: ${correctAnswers} out of 10</h2>
      <button id="js-restart-button">Play Again?</button>
    </section>`);


};



function handleButtons() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

handleButtons();