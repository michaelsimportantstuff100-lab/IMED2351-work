let moodLevel = 0;
const maxMood = 10;

const moodDisplay = document.getElementById("moodDisplay");
const moodBars = document.getElementById("moodBars");
const emoji = document.getElementById("emoji");
const moodText = document.getElementById("moodText");
const progressBar = document.getElementById("progressBar");
const sound = document.getElementById("derpSound");

const increaseBtn = document.getElementById("increaseMood");
const decreaseBtn = document.getElementById("decreaseMood");
const resetBtn = document.getElementById("resetMood");

const emojis = ["😴","😕","😐","🙂","😊","😄","😁","🤪","🤩","🔥","👑"];

const colors = [
    "#2c3e50",
    "#34495e",
    "#5dade2",
    "#48c9b0",
    "#52be80",
    "#f4d03f",
    "#f39c12",
    "#eb984e",
    "#e74c3c",
    "#9b59b6",
    "#8e44ad"
];

increaseBtn.addEventListener("click", function () {
    if (moodLevel < maxMood) {
        moodLevel++;
        sound.play();
        updateMood();
    }
});

decreaseBtn.addEventListener("click", function () {
    if (moodLevel > 0) {
        moodLevel--;
        sound.play();
        updateMood();
    }
});

resetBtn.addEventListener("click", function () {
    moodLevel = 0;
    updateMood();
});

function updateMood() {

    moodDisplay.textContent = moodLevel + " / 10";
    moodText.textContent = "Mood Level " + moodLevel;
    emoji.textContent = emojis[moodLevel];

    document.body.style.backgroundColor = colors[moodLevel];

    // Update Progress Bar
    progressBar.style.width = (moodLevel * 10) + "%";
    progressBar.style.backgroundColor = colors[moodLevel];

    // FOR LOOP
    moodBars.innerHTML = "";
    for (let i = 0; i < moodLevel; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.backgroundColor = colors[moodLevel];
        moodBars.appendChild(bar);
    }
}

// WHILE LOOP (automatic mood drain)
setInterval(function () {

    while (moodLevel > 0) {
        moodLevel--;
        updateMood();
        break; // prevent infinite loop
    }

}, 5000);