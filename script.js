let paperclips = 0;
let autoclickers = 0;
let factories = 0;
let autoclickerPrice = 10;
let factoryPrice = 100;
const button2 = document.getElementById("Autoclicker");

function updateDisplay() {
    document.getElementById("clipCount").innerText = `Paperclips: ${paperclips}`;
}

function makePaperclip() {
    paperclips++;
    updateDisplay();
}

function buyAutoClicker() {
    if (paperclips >= autoclickerPrice) {
        paperclips -= autoclickerPrice;
        autoclickers++;
        autoclickerPrice = Math.floor(autoclickerPrice * 1.2); // Price increases
        button2.textContent = "Buy Autoclicker (${autoclickerPrice})";
        updateDisplay();
    }
}

function buyFactory() {
    if (paperclips >= factoryPrice) {
        paperclips -= factoryPrice;
        factories++;
        factoryPrice = Math.floor(factoryPrice * 1.3); // Price increases
        updateDisplay();
    }
}

// Autoclicker system
setInterval(() => {
    paperclips += autoclickers;
    paperclips += factories * 5;
    updateDisplay();
}, 1000); // Runs every 1 second
