let paperclips = 0;
let autoclickers = 0;
let factories = 0;
let autoclickerPrice = 10;
let factoryPrice = 100;


function updateDisplay() {

    let pps = autoclickers + factories * 5;
    
    document.getElementById("clipCount").innerText = `Paperclips: ${paperclips}`;
    document.getElementById("Autoclicker").innerText = `Buy Autoclicker (${autoclickerPrice} clips)`;
    document.getElementById("Factory").innerText = `Buy Factory (${factoryPrice} clips)`;

    document.getElemnetByID("pps").innerText = `Per Second: ${pps}`;
    document.getElementById("Autoclicker").disabled = paperclips < autoclickerPrice;
    document.getElementById("Factory").disabled = paperclips < factoryPrice;
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
