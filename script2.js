// script.js

// Function to handle key press events
document.addEventListener('keydown', function(event) {
    const keyValue = event.key; // Get the key value
    const keyCode = event.keyCode; // Get the key code (deprecated but widely used)

    // Update the displayed key value and code
    document.getElementById('key-value').textContent = keyValue;
    document.getElementById('key-code').textContent = keyCode;
});
