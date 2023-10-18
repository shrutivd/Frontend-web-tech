let interval_id; // Variable to store the interval ID

// Function to generate a random rgba color with a specified alpha value
function randomRGBA() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();
    return `rgba(${red},${green},${blue},${alpha})`;
}


function setBackgroundColour() {
    document.body.style.backgroundColor = randomRGBA();
}

interval_id = setInterval(setBackgroundColour, 3000);

const button = document.querySelector('button');
button.addEventListener('click', function() {
    if (interval_id) {
        clearInterval(interval_id);
        interval_id = null;
        button.textContent = 'Start'; 
    } else {
        const interval = parseInt(document.getElementById('interval').value, 10) * 1000;
        interval_id = setInterval(setBackgroundColour, interval);
        button.textContent = 'Stop';
    }
});