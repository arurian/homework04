const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
var newParagraph=document.getElementById("status"); //This can be deleted
console.log(choices);
const scoreText=document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;  
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let timeOver=false;

let questions = [
  {
    question : "Inside which HTML element do we put the javaScript ?",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<sripting>",
    answer:"1"
  },
  {
    question : "What is the correct syntax for referring to an external script called 'xxx.js'",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src=xxx.js>",
    choice4: "<script file=xxx.js>",
    answer:"3"
  },
  {
    question : "How do you write hello world in the alert box ?",
    choice1: "msgBox('Hello World')",
    choice2: "alertBox('Hello World')",
    choice3: "msg('Hello World')",
    choice4: "alert('Hello World')",
    answer:"4"
  }
];
console.log(questions);
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame(){
  questionCounter=0;
  score=0;
  availableQuesions=[...questions];
  console.log(availableQuesions);
  getNewQuestions();
}
//Definnig the function getNewQuestions() using the arrow fuinction syntax.
getNewQuestions = () => {
  newParagraph.textContent="";
  setup();
  console.log(timeLeft-counter);
  if((availableQuesions.length==0)||(questionCounter>=MAX_QUESTIONS)||(timeOver))
  {
    localStorage.setItem('mostRecentScore',score);
    //Go to the end page
    return window.location.assign("end.html");
  }

  questionCounter++;
  const questionIndex=Math.floor(Math.random()*availableQuesions.length);
  currentQuestion=availableQuesions[questionIndex];
  question.innerHTML=currentQuestion.question;

  choices.forEach(choice => {
    const number=choice.dataset['number'];
    console.log(number);
    choice.innerText=currentQuestion['choice' + number];
  });
  //canceling the selected question from the question array.
  availableQuesions.splice(questionIndex,1);
  acceptingAnswers=true;
};

choices.forEach(choice => {
  choice.addEventListener('click',event => {
    console.log(event.target);
    if(!acceptingAnswers) // Checking whether ready for an answer.If not return.
    {
      return;
    }
    acceptingAnswers=false; 
    const selectedChoice=event.target;
    const selectedAnswer=selectedChoice.dataset["number"];
    //Here we need to check the correctness of the answer and reduce the timer o/p, calculate the score.
     console.log(`Selected Ans : ${selectedAnswer}`);
     console.log(`Correct Ans : ${currentQuestion.answer}`);
    // alert(`Selected Ans : ${selectedAnswer}`);
    // alert(`Correct Ans : ${currentQuestion.answer}`);

      var classToApply='Wrong';

   if(selectedAnswer==currentQuestion.answer)
     {    
      classToApply='Correct';
      incrementScore(CORRECT_BONUS);
     }
     else{
         timeLeft=timeLeft-10;        
        setup();  
     }
     console.log(classToApply);
           
    getNewQuestions();
  });

});

incrementScore = num => {
  score +=num;
  scoreText.innerText=score;
};

//Setting the timer
var counter=0;
var timeLeft=60;
function setup()
{
    var timer=document.getElementById("timer-value");  
    timer.innerText=timeLeft-counter;
    function timeIt(){
        counter++;     
        timer.innerText=timeLeft-counter;
      /*  if((timeLeft-counter)<=0)
        {
            alert("Time over");
            timeOver=true;
            localStorage.setItem('mostRecentScore',score);
            //Go to the end page
            return window.location.assign("end.html");
        }
        */
    }
    setInterval(timeIt,1000);
}

startGame();

