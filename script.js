// array of questions and answers

const originalQuestionAnswer = [
	{
		question: 'Action: Elbow Flexion',
		answer: 'BICEPS',
	},
	{
		question: 'Action: Elbow Extension',
		answer: 'TRICEPS',
	},
	{
		question: 'Action: Knee Flexion',
		answer: 'HAMSTRINGS',
	},
	{
		question: 'Action: Knee Extension',
		answer: 'QUADRICEPS',
	},
	{
		question: 'Action: Hip Flexion',
		answer: 'ILIOPSOAS',
	},
	{
		question: 'Action: Hip Extension',
		answer: 'GLUTEUS MAXIMUS',
	},
	{
		question: 'Action: Anterior Shoulder Flexion',
		answer: 'ANTERIOR DELTOID',
	},
	{
		question: 'Action: Frontal Humeral Abduction',
		answer: 'LATERAL DELTOID',
	},
	{
		question: 'Action: Scapular Elevation',
		answer: 'TRAPEZIUS',
	},
	{
		question: 'Action: Breathing',
		answer: 'DIAPHRAGM',
	},
	{
		question: 'Action: External Scapular Rotation',
		answer: 'LATISSIMUS DORSI',
	},
	{
		question: 'Action: Horizontal Humeral Adduction',
		answer: 'PECTORALIS',
	},
];
let questionAnswer = [...originalQuestionAnswer];
// add event listeners
let mainHeader = document.querySelector('.mainHeader');

const startButton = document.querySelector('.startButton');
const submitButton = document.querySelector('.submitButton');
const inputField = document.querySelector('#inputField');
startButton.addEventListener('click', randomDraw);
submitButton.addEventListener('click', checkAnswer);

//function for drawing random question
let currentNumber;
function randomDraw() {
	totalQuestions;

	currentNumber = Math.floor(Math.random() * questionAnswer.length);

	mainHeader.innerHTML = questionAnswer[currentNumber].question;

	inputField.style.display = 'inline';
	startButton.style.display = 'none';
	submitButton.style.display = 'inline';
}
// function to add correct answers and check answers for match
let numberCorrect = 0;
let totalQuestions = 0;
function checkAnswer() {
	if (questionAnswer.length > 3) {
		const correctAnswer = questionAnswer[currentNumber].answer;
		const userInput = inputField.value.toUpperCase();
		questionAnswer.splice(currentNumber, 1);
		if (userInput === correctAnswer) {
			numberCorrect += 1;
			totalQuestions += 1;
			randomDraw(event);
			inputField.value = '';
		} else {
			randomDraw(event);
			inputField.value = '';
			totalQuestions += 1;
		}
	} else {
		console.log('got last screen');
		totalQuestions += 1;
		finalScreen();
	}
}
// function to display final screen when conditions are met
function finalScreen() {
	console.log('this is the final screen fx', totalQuestions);

	if (totalQuestions === 10) {
		if (numberCorrect >= 9) {
			mainHeader.innerHTML =
				'Great Job!' + ' You got ' + numberCorrect + '/10.';
			totalQuestions = 0;
			questionAnswer=[...originalQuestionAnswer];
		} else if (numberCorrect >= 7) {
			mainHeader.innerHTML =
				'Almost There!' + ' You got ' + numberCorrect + '/10.';
			totalQuestions = 0;
			questionAnswer = [...originalQuestionAnswer];
		} else {
			mainHeader.innerHTML =
				'Everyone Starts Somewhere!' + ' You got ' + numberCorrect + '/10.';
			totalQuestions = 0;
			questionAnswer = [...originalQuestionAnswer];
		}
		inputField.style.display = 'none';
		startButton.style.display = 'inline';
		startButton.innerHTML = 'New Game';
		submitButton.style.display = 'none';
	}
}

// function lastScreen (){
// mainHeader.innerHTML = 'Great Job! You got '++'/10'
// mainHeader.innerHTML = 'Almost There! You got '+numberCorrect+'/10'
// mainHeader.innerHTML = 'Good Start! You got '+numberCorrect+'/10'
// 	if ()
// }

//create array variable for answers and current answer to start game
// let answers = [];
// let currentAnswer = 0;

// make start button clicked change h1 to question, create input section, and create submit button

//
// make any input change toUpperCase after Submit is clicked

// create function to random draw from array and display

// if I get an answer right, store it
// if I don"t get an answer right, don"t store it

// make Submit click generate new random question

// stop at 10 questions and show results screen

// results screen shows number of questions answered correctly out of number of questions answered

// New Game click starts new 10 questions
