const form = document.getElementById('contactForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const emailValue = email.value.trim();

    // Validation rules
    if (name === '') {
        showError('name', 'Name is required');
    } else {
        showSuccess('name');
    }

    if (dob === '') {
        showError('dob', 'Date of Birth is required');
    } else {
        showSuccess('dob');
    }

    if (emailValue === '') {
        showError('email', 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        showError('email', 'Email is not valid');
    } else {
        showSuccess('email');
    }

    if (passwordValue === '') {
        showError('password', 'Password is required');
    } else if (!isPasswordValid(passwordValue)) {
        showError('password', 'Password must be at least 10 characters and include special characters, numbers, and text');
    } else {
        showSuccess('password');
    }

    if (confirmPasswordValue === '') {
        showError('confirmPassword', 'Please confirm your password');
    } else if (passwordValue !== confirmPasswordValue) {
        showError('confirmPassword', 'Passwords do not match');
    } else {
        showSuccess('confirmPassword');
    }
}

function showError(inputId, message) {
    const formControl = document.getElementById(inputId).parentNode;
    formControl.className = 'error';
    const errorElement = formControl.querySelector('small');
    errorElement.textContent = message;
}

function showSuccess(inputId) {
    const formControl = document.getElementById(inputId).parentNode;
    formControl.className = 'success';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPasswordValid(password) {
    // Password must be at least 10 characters and include special characters, numbers, and text
    return /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[a-zA-Z]).{10,}$/.test(password);
}
