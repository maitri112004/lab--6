// Function to validate form inputs
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value; // Get username value
    const password = document.getElementById('password').value; // Get password value
    const errorMessage = document.getElementById('errorMessage'); // Get error message element

    // Reset error message
    errorMessage.textContent = '';

    // Validate username
    if (username.length < 5) {
        errorMessage.textContent += 'Username must be at least 5 characters long.\n';
    }

    // Validate password
    if (password.length < 8) {
        errorMessage.textContent += 'Password must be at least 8 characters long.\n';
    }

    // If no errors, submit the form
    if (username.length >= 5 && password.length >= 8) {
        alert('Form submitted successfully!');

        // Clear the input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

// Attach the event listener to the form
document.getElementById('registrationForm').addEventListener('submit', validateForm);