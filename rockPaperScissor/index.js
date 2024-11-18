let rock = "images/rock.png";
let paper = "images/paper.png";
let scissor = "images/scissor.png";

const images = [
    rock,
    paper,
    scissor
];

const playButton = document.querySelector("#playBtn");
const player1 = document.getElementById("p1");
const player2 = document.getElementById("p2");
const winnerText = document.getElementById("winnerText"); // Select the winner text div

playButton.addEventListener("click", () => {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);

    let selectedImage1, selectedImage2;

    if (randomNumber1 >= 0 && randomNumber1 <= 32) {
        selectedImage1 = images[0];
    } else if (randomNumber1 >= 33 && randomNumber1 <= 65) {
        selectedImage1 = images[1];
    } else if (randomNumber1 >= 66 && randomNumber1 <= 99) {
        selectedImage1 = images[2];
    }

    player1.src = selectedImage1;

    if (randomNumber2 >= 0 && randomNumber2 <= 32) {
        selectedImage2 = images[0];
    } else if (randomNumber2 >= 33 && randomNumber2 <= 65) {
        selectedImage2 = images[1];
    } else if (randomNumber2 >= 66 && randomNumber2 <= 99) {
        selectedImage2 = images[2];
    }

    player2.src = selectedImage2;

    winner(selectedImage1, selectedImage2);
});

function winner(player1, player2) {
    let winner;
    if (player1 === player2) {
        winner = "It's a tie";
    } else if (player1 === rock && player2 === scissor) {
        winner = "Player 1 Wins";
    } else if (player1 === scissor && player2 === paper) {
        winner = "Player 1 Wins";
    } else if (player1 === paper && player2 === rock) {
        winner = "Player 1 Wins";
    } else if (player2 === rock && player1 === scissor) {
        winner = "Player 2 Wins";
    } else if (player2 === scissor && player1 === paper) {
        winner = "Player 2 Wins";
    } else if (player2 === paper && player1 === rock) {
        winner = "Player 2 Wins";
    }

    winnerText.textContent = `The winner is: ${winner}`; // Display the winner in the HTML
    console.log(winner); // Still log to the console
}
