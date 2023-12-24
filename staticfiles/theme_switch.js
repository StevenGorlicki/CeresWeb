document.getElementById('mode-switch').addEventListener('change', function (event) {
    let modeIcon = document.getElementById('mode-icon');
    let body = document.querySelector('body');
    let modeText = document.getElementById('mode-text');

    if (event.target.checked) {
        // if the checkbox is checked, use light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        modeText.textContent = "Light Mode";
    } else {
        // if the checkbox is unchecked, use dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        modeText.textContent = "Dark Mode";
    }

    // Prevent the dropdown from closing when clicking inside it
    event.stopPropagation();
});

// Add an event listener to the dropdown to stop click propagation
document.querySelector('.dropdown-menu').addEventListener('click', function (event) {
    event.stopPropagation();
});

// Add an event listener to close the dropdown when clicking outside
document.addEventListener('click', function (event) {
    const settingsDropdown = document.getElementById('settingsDropdown');
    if (!settingsDropdown.contains(event.target)) {
        $(".dropdown-menu").removeClass("show");
    }
});

function showLoginForm() {
    document.getElementById('loginModalBody').classList.remove('d-none');
    document.getElementById('signupModalBody').classList.add('d-none');
}

document.getElementById('loginSignup').addEventListener('click', function () {
    showLoginForm();
    $('#loginSignupModal').modal('show');
});

document.getElementById('needToSignUpButton').addEventListener('click', function () {
    // Hide the login modal body and show the sign-up modal body
    document.getElementById('loginModalBody').classList.add('d-none');
    document.getElementById('signupModalBody').classList.remove('d-none');
});

document.getElementById('signUpButton').addEventListener('click', function () {
    // Implement your sign-up logic here...
    // After successful sign-up, you can close the modal if needed:
    $('#loginSignupModal').modal('hide');
});

// Reset the modal content to login form when the modal is closed
$('#loginSignupModal').on('hidden.bs.modal', function () {
    showLoginForm();
});