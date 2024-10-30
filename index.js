let userName = prompt("Input your name:");

while (!userName) {
    userName = prompt("Please enter your name to start the game:");
}

const userScoreElement = document.querySelector('.user-won');
const computerScoreElement = document.querySelector('.computer-won');
const generateButton = document.querySelector('.generate');
const userCardContainer = document.querySelector('.user-card'); 
const computerCardContainer = document.querySelector('.computer-card'); 

let userScore = 0;
let computerScore = 0;
let roundCount = 0;

const cards = [
    { name: '6', value: 6, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884169_1280.png' },
    { name: '7', value: 7, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884173_1280.png' },
    { name: '8', value: 8, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884177_1280.png' },
    { name: '9', value: 9, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884181_1280.png' },
    { name: '10', value: 10, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/55/hearts-884146_1280.png' },
    { name: 'Jack', value: 2, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884191_1280.png' },
    { name: 'Queen', value: 3, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884201_1280.png' },
    { name: 'King', value: 4, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884196_1280.png' },
    { name: 'Ace', value: 11, image: 'https://cdn.pixabay.com/photo/2015/08/11/11/57/hearts-884186_1280.png' }
];

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function updateScores() {
    userScoreElement.textContent = `${userName}: ${userScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function displayCard(card, container) {
    container.innerHTML = ''; 
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.alt = card.name;
    cardImage.className = 'card-image';

    cardElement.appendChild(cardImage);
    container.appendChild(cardElement);
}

function checkWinner() {
    if (roundCount === 4) {
        if (userScore > computerScore) {
            alert(`${userName} won this game!`);
        } else if (computerScore > userScore) {
            alert(`Computer won this game!`);
        } else {
            alert("It's a draw!");
        }
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    updateScores();

    userCardContainer.innerHTML = '';
    computerCardContainer.innerHTML = '';
}

generateButton.addEventListener('click', () => {
    const userCard = getRandomCard();
    const computerCard = getRandomCard();

    displayCard(userCard, userCardContainer);
    displayCard(computerCard, computerCardContainer);

    userScore += userCard.value;
    computerScore += computerCard.value;

    roundCount++;

    updateScores();
    checkWinner();
});
updateScores();
