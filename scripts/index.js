let hygieneLabel;
let hungerLabel;
let happinessLabel;

let clean;
let pet;

let d = new Date();
let currentSeconds = d.getSeconds();

let statsData = {
    "hygiene": 75,
    "hunger": 75,
    "happiness": 75,
};

let secondsData = {
    "hygiene": currentSeconds,
    "hunger": currentSeconds,
    "happiness": currentSeconds,
}

function time() {
    let d = new Date();
    let s = d.getSeconds();

    if (s - secondsData["hygiene"] >= 5) {
        secondsData["hygiene"] = s;
        statsData["hygiene"] -= (statsData["hygiene"] > 0) ? 1 : 0;
        hygieneLabel.textContent = `Higiene = ${statsData["hygiene"]}%`
    }
    if (s - secondsData["hunger"] >= 10) {
        secondsData["hunger"] = s;
        statsData["hunger"] -= (statsData["hunger"] > 0) ? 1 : 0;
        hungerLabel.textContent = `Hambre = ${statsData["hunger"]}%`
    }
    if (s - secondsData["happiness"] >= 15) {
        secondsData["happiness"] = s;
        statsData["happiness"] -= (statsData["happiness"] > 0) ? 1 : 0;
        happinessLabel.textContent = `Felicidad = ${statsData["happiness"]}%`
    }
        
}

function loadData() {
    hygieneLabel = document.getElementById("hygiene");
    hungerLabel = document.getElementById("hunger");
    happinessLabel = document.getElementById("happiness");

    clean = document.getElementById("clean");
    pet = document.getElementById("pet");
}

document.addEventListener("DOMContentLoaded", loadData);
setInterval(time, 1000);