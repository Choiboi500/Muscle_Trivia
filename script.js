// make data-base of questions
let questions = [
	`Action: Elbow Flexion`,
	`Action: Elbow Extension`,
	`Action: Knee Flexion`,
	`Action: Knee Extension`,
	`Action: Hip Flexion`,
	`Action: Hip Extension`,
	`Action: Anterior Shoulder Flexion`,
	`Action: Frontal Humeral Abduction`,
	`Action: Scapular Elevation`,
	`Action: Breathing`,
	`Action: External Scapular Rotation`,
	`Action: Horizontal Humeral Adduction`,
];

// make data-base of answers
const biceps = `BICEPS`;
const triceps = `TRICEPS`;
const hamstrings = `HAMSTRINGS`;
const quadriceps = `QUADRICEPS`;
const ilioPsoas = `ILIOPSOAS`;
const gluteusMaximus = `GLUTEUS MAXIMUS`;
const anteriorDeltoid = `ANTERIOR DELTOID`;
const lateralDeltoid = `LATERAL DELTOID`;
const trapezius = `TRAPEZIUS`;
const diaphragm = `DIAPHRAGM`;
const latissimusDorsi = `LATISSIMUS DORSI`;
const pectoralis = `PECTORALIS`;

//create array variable for answers and current answer to start game
let answers = [];
let currentAnswer = 0;

// make start button clicked change h1 to question, create input section, and create submit button
const startButton = document.querySelector('.startButton');
function randomDraw() {
	const mainHeader = document.querySelector('.mainHeader');
	mainHeader.innerHTML =
		questions[Math.floor(Math.random() * questions.length)];
	startButton.innerText = 'Submit';
}
// make any input change toUpperCase after Submit is clicked

// create function to random draw from array and display

// if I get an answer right, store it
// if I don't get an answer right, don't store it

// make Submit click generate new random question

// stop at 10 questions and show results screen

// results screen shows number of questions answered correctly out of number of questions answered

// New Game click starts new 10 questions
