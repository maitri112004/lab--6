// Initialize counter variable
let counter = 0;

// Function to increment the counter
function incrementCounter() {
    counter++; // Increment the counter
    document.getElementById('counter').innerText = counter; // Update the displayed counter
}

// Attach the event listener to the button after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('incrementBtn');
    button.addEventListener('click', incrementCounter); // Set the click event listener
});