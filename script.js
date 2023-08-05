let isSubmitted = false;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Check if the form has already been submitted
    if (isSubmitted) {
        alert("Already submitted!");
        return;
    }

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Password validation rules (same as before)
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;

    let errorMessage = '';

    if (password.length < minLength) {
        errorMessage += 'Password must be at least 8 characters long.\n';
    }

    if (!uppercaseRegex.test(password)) {
        errorMessage += 'Password must contain at least one uppercase letter.\n';
    }

    if (!lowercaseRegex.test(password)) {
        errorMessage += 'Password must contain at least one lowercase letter.\n';
    }

    if (!digitRegex.test(password)) {
        errorMessage += 'Password must contain at least one digit.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        // Password meets the rules, show success message
        const successMessage = document.createElement("p");
        successMessage.textContent = "Submitted successfully!";
        successMessage.style.color = "green";
        document.getElementById("loginForm").appendChild(successMessage);

        // After successful submission, set the flag to true
        isSubmitted = true;

        // If the password meets the rules, you can proceed with the login logic
        // For this example, I'm just logging the success message to the console
        console.log('Login success!', username, password);
        // Add your login logic here (e.g., sending the data to a server for authentication).
    }
});

/**pwd strength */
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;

    // Password validation rules (same as before)
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;

    // Check the password strength against the validation rules
    let strength = 0;

    if (password.length >= minLength) {
        strength += 1;
    }

    if (uppercaseRegex.test(password)) {
        strength += 1;
    }

    if (lowercaseRegex.test(password)) {
        strength += 1;
    }

    if (digitRegex.test(password)) {
        strength += 1;
    }

    // Update the password strength indicator based on the strength level
    const strengthIndicator = document.getElementById("password-strength");
    switch (strength) {
        case 0:
        case 1:
            strengthIndicator.textContent = "Weak";
            strengthIndicator.style.color = "red";
            break;
        case 2:
            strengthIndicator.textContent = "Moderate";
            strengthIndicator.style.color = "orange";
            break;
        case 3:
        case 4:
            strengthIndicator.textContent = "Strong";
            strengthIndicator.style.color = "green";
            break;
        default:
            break;
    }
});
