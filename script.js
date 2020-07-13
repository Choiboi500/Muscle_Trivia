// make data-base of questions and answers
const elbowFlexion = {
	question: 'Action: Elbow Flexion',
	answer: 'BICEPS',
};
const elbowExtension = {
	question: 'Action: Elbow Extension',
	answer: 'TRICEPS',
};
const kneeFlexion = {
	question: 'Action: Knee Flexion',
	answer: 'HAMSTRINGS',
};
const kneeExtension = {
	question: 'Action: Knee Extension',
	answer: 'QUADRICEPS',
};
const hipFlexion = {
	question: 'Action: Hip Flexion',
	answer: 'ILIOPSOAS',
};
const hipExtension = {
	question: 'Action: Hip Extension',
	answer: 'GLUTEUS MAXIMUS',
};
const anteriorShoulderFlexion = {
	question: 'Action: Anterior Shoulder Flexion',
	answer: 'ANTERIOR DELTOID',
};
const lateralShoulderFlexion = {
	question: 'Action: Frontal Humeral Abduction',
	answer: 'LATERAL DELTOID',
};
const scapularElevation = {
	question: 'Action: Scapular Elevation',
	answer: 'TRAPEZIUS',
};
const breathing = {
	question: 'Action: Breathing',
	answer: 'DIAPHRAGM',
};
const externalScapularRotation = {
	question: 'Action: External Scapular Rotation',
	answer: 'LATISSIMUS DORSI',
};
const chestFlexion = {
	question: 'Action: Horizontal Humeral Adduction',
	answer: 'PECTORALIS',
};
let questionAnswer = [
	elbowExtension,
	kneeFlexion,
	kneeExtension,
	hipFlexion,
	hipExtension,
	anteriorShoulderFlexion,
	lateralShoulderFlexion,
	scapularElevation,
	breathing,
	externalScapularRotation,
	chestFlexion,
];
let mainHeader = document.querySelector('.mainHeader');
//  =
// 	for (i=0;i<questionAnswer.length;i++){}
// 	console.log(questionAnswer);

// 	questionAnswer[Math.floor(Math.random() * questionAnswer.length)];
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', randomDraw);

function randomDraw() {
	let randomQuestion = questionAnswer.splice(
		Math.floor(Math.random() * questionAnswer.length),
		1
	);

	mainHeader.innerHTML = randomQuestion[0].question;

	if (document.querySelector('.userInput').value === randomQuestion[0].answer) {
		console.log('true');
	} else {
		console.log('false');
	}
	startButton.innerHTML = 'Submit';
	// submitButton.style.display = "inline";
	inputField.style.display = 'inline';
}

// function lastScreen (){
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
