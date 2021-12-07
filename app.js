// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');
const teamOneScore = document.querySelector('team-one-score');
const teamTwoScore = document.querySelector('team-two-score');
const game = document.querySelector('.game');


// create an array to hold on to the state of past games

let currentGameState = {
    name1: '',
    name2: '',
    score1: 0,
    score2: 0
};

let pastGames = [];
// let name1 = '';
// let name2 = '';
// let score1 = 0;
// let score2 = 0;

nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!
    e.preventDefault();

    // get the name data from the form
    const form = new FormData(nameForm);

    // set the state to this data from the form
    currentGameState.name1 = form.get('team-one');
    currentGameState.name2 = form.get('team-two');
    // reset the form values
    nameForm.reset();

    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    currentGameState.score1++;
    displayCurrentGameEl();});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    currentGameState.score2++;
    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    currentGameState.score1--;
    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    currentGameState.score2--;
    displayCurrentGameEl();
});

finishGameButton.addEventListener ('click', () => {
    // add the current game to an array of games in state.
    // currentGameEl.textContent = '';
    // HINT: it will be helpful to keep track of these games as objects with 4 properties, one for each piece of state we're tracking
    // console.log(currentGameState);
    console.log(currentGameState);
    pastGames.push({...currentGameState});
    console.log(pastGames);
    // resetCurrentState();
    // currentGameState.name1 = '';
    // currentGameState.name2 = '';
    // currentGameState.score1 = 0;
    // currentGameState.score2 = 0;
    displayAllGames();

    // reset the initial state to start with a new form
    displayCurrentGameEl();
    resetCurrentState();
});

function resetCurrentState() {
    currentGameState.name1 = '';
    currentGameState.name2 = '';
    currentGameState.score1 = 0;
    currentGameState.score2 = 0;
}


function displayCurrentGameEl() {
    // clear out the current game div
    currentGameEl.textContent = '';
    // change the label to show team one's name;
    // change the label to show team two's name;
    teamOneLabel.textContent = currentGameState.name1;
    teamTwoLabel.textContent = currentGameState.name2;
    // call the render game function to create a game element
    // for(let )
    const currentGame = renderGame(currentGameState);
    // append the element to the cleared out current game div
    currentGameEl.append(currentGame);
}


function displayAllGames() {
    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';
    // console.log(pastGames);
    // loop through the past games in state
    // render and append a past game for each past game in state
    for (let game of pastGames) {
        let gameToAppend = renderGame(game);
        pastGamesEl.append(gameToAppend);
    }
}


// displayCurrentGameEl();
