function showExperience(button, text) {
    // Check if the button already has a span with the years of experience
    var span = button.querySelector('span');
    if (span) {
        // If it does, remove it
        button.removeChild(span);
    } else {
        // If it doesn't, create a new one
        span = document.createElement('span');
        span.classList.add('visible');

        // Create a br element
        var br = document.createElement('br');

        // Append the br element and the text to the tooltip
        span.appendChild(br);
        span.appendChild(document.createTextNode(text));

        // Append the tooltip to the button
        button.appendChild(span);
    }
}