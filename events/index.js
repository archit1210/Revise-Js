const lightModeButton = document.getElementById("lightBtn");
const darkModeButton = document.getElementById("darkBtn");
const heading = document.querySelector(".heading");

function changeToDarkMode() {
    document.body.style.backgroundColor = "black";
    heading.style.color = "white"
}

function changeToLightMode() {
    document.body.style.backgroundColor = "white";
    heading.style.color = "black"
}

// Correct usage of addEventListener
lightModeButton.addEventListener("click", changeToLightMode);
darkModeButton.addEventListener("click", changeToDarkMode);
