document.getElementById('mode-switch').addEventListener('change', function(event) {
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
document.querySelector('.dropdown-menu').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Add an event listener to close the dropdown when clicking outside
document.addEventListener('click', function(event) {
    const settingsDropdown = document.getElementById('settingsDropdown');
    if (!settingsDropdown.contains(event.target)) {
        $(".dropdown-menu").removeClass("show");
    }
});