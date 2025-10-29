const allToggles = document.querySelectorAll('.project-toggle');
const allContent = document.querySelectorAll('.project_content');

allToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetContent = document.querySelector(targetId);

        allContent.forEach(content => {
            if (content !== targetContent && content.classList.contains('open')) {
                content.classList.remove('open');
            }
        });

        targetContent.classList.toggle('open');
    });
});