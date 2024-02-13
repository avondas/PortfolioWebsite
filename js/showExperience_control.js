function showExperience(button, text) {
    // Check if the button already has a span with the years of experience
    let span = button.querySelector('span');
    if (span) {
        // If it does, remove it
        button.removeChild(span);
    } else {
        // If it doesn't, create a new one
        span = document.createElement('span');
        span.classList.add('visible');

        // Create a br element
        let br = document.createElement('br');

        // Append the br element and the text to the tooltip
        span.appendChild(br);
        span.appendChild(document.createTextNode(text));

        // Append the tooltip to the button
        button.appendChild(span);
    }
}
const frontend = [
    ["CSS", 2],
    ["Tailwind", 1],
    ["HTML", 2],
    ["JavaScript", 2]
]

const backend = [
    ["C#", 3],
    ["Python", 4],
    ["PHP", 2],
    ["ASP.NET MVC", 3],
    ["Blade", 1]
]

function template(name, years) {
    return `<button class="skills_button" onclick="showExperience(this, ' ${years} years experience')">${name}</button>`
}

const frontend_selector = document.querySelector(".frontend_buttons")

frontend.forEach(item => frontend_selector.innerHTML += template(item[0], item[1]))

const backend_selector = document.querySelector(".backend_buttons")

backend.forEach(item => backend_selector.innerHTML += template(item[0], item[1]))