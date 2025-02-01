
let listOfDrawnNumbers = [];

let limitNumber = 50;
let secretNumber = generateRandomNumber();
let attempts = 1;

function displayTextOnScreen(tag, text){
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2} );
}

function displayInitialMessage(){
    displayTextOnScreen('h1', 'Secret Number Game');
    displayTextOnScreen('p', 'Choose a number from 1 to 100');
}

displayInitialMessage();

function checkTheKick(){
    let kick = document.querySelector('input').value;
    
    if (kick == secretNumber){
        displayTextOnScreen('h1', 'Got it right!');
        let attemptWord = attempts > 1 ? 'attempts' : 'attempt';
        let attemptMessage = `You figured out the secret number with ${attempts} ${attemptWord}`;
        displayTextOnScreen('p', attemptMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (kick > secretNumber){
            displayTextOnScreen('p', 'The secret number is smaller');
        }else{
            displayTextOnScreen('p','The secret number is bigger');
        }
        attempts ++;
        clearField();

    }
}

function generateRandomNumber(){
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let quantityOfElements = listOfDrawnNumbers.length;

    if (quantityOfElements == limitNumber){
        listOfDrawnNumbers = [];
    }

        if (listOfDrawnNumbers.includes(chosenNumber)){
        return generateRandomNumber();
    }else{
        listOfDrawnNumbers.push(chosenNumber);
        console.log(listOfDrawnNumbers);
        return chosenNumber;
    }
}

function clearField(){
    kick = document.querySelector('input');
    kick.value = ' '; 
}

function restartGame(){
    secretNumber = generateRandomNumber();
    clearField();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

