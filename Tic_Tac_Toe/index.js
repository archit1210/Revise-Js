const boxes = document.querySelectorAll(".box")
const resetButton = document.querySelector("#reset-game")
const newGameButton = document.querySelector("#new-game")
const msgContainer = document.querySelector(".msg-container")
const msg = document.querySelector("#msg")

let turnO = true;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked")
        if (turnO) {
            box.innerHTML = "O"
            turnO = false
        }
        else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true

        checkWinner()
    })
})

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`
    disableBoxes()
    msgContainer.classList.remove("hide")
}

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner is ", pos1Val)
                showWinner(pos1Val)
            }
        }
    }
}

newGameButton.addEventListener("click", resetGame)
resetButton.addEventListener("click", resetGame)
