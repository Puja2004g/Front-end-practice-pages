function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');
    
    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
        // Valid email
        errorMessage.textContent = '';
        window.location.href = "thanks.html";

    } else {
        // Invalid email
        errorMessage.textContent = 'Please enter a valid email address.';
        emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    }
}


function dismiss(){
    window.location.href = "index.html";
}