// DOM Elements
const button = document.getElementById('btn');
const colorDisplay = document.getElementById('color');
const body = document.body;

// Function to generate random hex color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event Listener to change background color on button click
button.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    colorDisplay.textContent = newColor;
});
