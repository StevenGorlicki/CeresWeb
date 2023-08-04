document.getElementById('mode-switch').addEventListener('click', function(event) {
    let modeLabel = document.querySelector('label[for="mode-switch"]');
    let body = document.querySelector('body');

    if (event.target.checked) {
        // if the checkbox is checked, use light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeLabel.textContent = "Light Mode";
    } else {
        // if the checkbox is unchecked, use dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeLabel.textContent = "Dark Mode";
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