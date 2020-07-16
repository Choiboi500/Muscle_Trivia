// array of questions and answers

const originalMuscleQA = [
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
const originalBoneQA = [
	{
		question: 'Location: Upper part of the arm',
		answer: 'HUMERUS',
	},
	{
		question: 'Location: Hip Bone',
		answer: 'PELVIS',
	},
	{
		question: 'Location: Houses Brain',
		answer: 'CRANIUM',
	},
	{
		question: 'Location: Jaw Bone',
		answer: 'MANDIBLE',
	},
	{
		question: 'Location: Fingers and Toes',
		answer: 'PHALANGES',
	},
	{
		question: 'Location: Collar Bone',
		answer: 'CLAVICLE',
	},
	{
		question: 'Location: Upper part of the leg',
		answer: 'FEMUR',
	},
	{
		question: 'Location: Knee Cap',
		answer: 'PATELLA',
	},
	{
		question: 'Location: Tail Bone',
		answer: 'COCCYX',
	},
	{
		question: 'Location: Shoulder Blade',
		answer: 'SCAPULA',
	},
	{
		question: 'Location: Top of Sternum',
		answer: 'MANUBRIUM',
	},
	{
		question: 'Location: Forearm "Pinky Finger" Side',
		answer: 'ULNA',
	},
];

let muscleQA = [...originalMuscleQA];
let boneQA = [...originalBoneQA];
// add event listeners
let mainHeader = document.querySelector('.mainHeader');

const startButton = document.querySelector('.startButton');
const submitButtonMuscles = document.querySelector('.submitButtonMuscles');
const submitButtonBones = document.querySelector('.submitButtonBones');
const inputField = document.querySelector('#inputField');
const musclesButton = document.querySelector('.musclesButton');
const bonesButton = document.querySelector('.bonesButton');
startButton.addEventListener('click', optionsMenu);
musclesButton.addEventListener('click', muscleRandomDraw);
bonesButton.addEventListener('click', bonesRandomDraw);
submitButtonMuscles.addEventListener('click', checkMuscleAnswer);
submitButtonBones.addEventListener('click', checkBoneAnswer);

function optionsMenu() {
	musclesButton.style.display = 'inline';
	bonesButton.style.display = 'inline';
	startButton.style.display = 'none';
	submitButtonMuscles.style.display = 'none';
	mainHeader.innerHTML = 'Which anatomy are we working on?';
}

//function for drawing random question
let currentNumber;
function muscleRandomDraw() {
	totalQuestions;

	currentNumber = Math.floor(Math.random() * muscleQA.length);

	mainHeader.innerHTML = muscleQA[currentNumber].question;

	inputField.style.display = 'inline';
	startButton.style.display = 'none';
	submitButtonMuscles.style.display = 'inline';
	musclesButton.style.display = 'none';
	bonesButton.style.display = 'none';
}
function bonesRandomDraw() {
	totalQuestions;

	currentNumber = Math.floor(Math.random() * boneQA.length);

	mainHeader.innerHTML = boneQA[currentNumber].question;

	inputField.style.display = 'inline';
	startButton.style.display = 'none';
	submitButtonBones.style.display = 'inline';
	bonesButton.style.display = 'none';
	musclesButton.style.display = 'none';
}
// function to add correct answers and check answers for match
let numberCorrect = 0;
let totalQuestions = 0;
function checkMuscleAnswer() {
	if (muscleQA.length > 3) {
		let correctAnswer = muscleQA[currentNumber].answer;
		let userInput = inputField.value.toUpperCase();
		muscleQA.splice(currentNumber, 1);
		if (userInput === correctAnswer) {
			numberCorrect += 1;
			totalQuestions += 1;
			muscleRandomDraw(event);
			inputField.value = '';
		} else {
			muscleRandomDraw(event);
			inputField.value = '';
			totalQuestions += 1;
		}
	} else {
		console.log('got last screen');
		totalQuestions += 1;
		finalScreen();
	}
}
function checkBoneAnswer() {
	if (boneQA.length > 3) {
		let correctAnswer = boneQA[currentNumber].answer;
		let userInput = inputField.value.toUpperCase();
		boneQA.splice(currentNumber, 1);
		if (userInput === correctAnswer) {
			numberCorrect += 1;
			totalQuestions += 1;
			bonesRandomDraw(event);
			inputField.value = '';
		} else {
			bonesRandomDraw(event);
			inputField.value = '';
			totalQuestions += 1;
		}
	} else {
		totalQuestions += 1;
		finalScreen();
	}
}
// function to display final screen when conditions are met
function finalScreen() {
	if (totalQuestions === 10) {
		if (numberCorrect >= 9) {
			mainHeader.innerHTML =
				'Great Job!' + '\n' + 'You got ' + numberCorrect + '/10!';
			totalQuestions = 0;
			muscleQA = [...originalMuscleQA];
			boneQA = [...originalBoneQA];
		} else if (numberCorrect >= 7) {
			mainHeader.innerHTML =
				'Almost There!' + '\n' + 'You got ' + numberCorrect + '/10!';
			totalQuestions = 0;
			muscleQA = [...originalMuscleQA];
			boneQA = [...originalBoneQA];
		} else {
			mainHeader.innerHTML =
				'Everyone Starts Somewhere!' +
				'\n' +
				'You got ' +
				numberCorrect +
				'/10.';
			totalQuestions = 0;
			muscleQA = [...originalMuscleQA];
			boneQA = [...originalBoneQA];
		}
		inputField.style.display = 'none';
		startButton.style.display = 'inline';
		startButton.value = 'New Game';
		submitButtonMuscles.style.display = 'none';
		submitButtonBones.style.display = 'none';
	}
}

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
