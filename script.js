const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // Button click Active Class
    for (let i = 0; i < sectBtns.length; i++) {
        sectBtns[i].addEventListener('click', function () {
            // Remove active class from the currently active button
            let currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            // Add active class to the clicked button
            this.classList.add('active-btn');

            // Get the id of the section to show
            const id = this.dataset.id;
            if (id) {
                // Remove active class from all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                // Add active class to the corresponding section
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    }

    // Section click handler (if needed for something else)
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            // Show the selected section
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    //Toggle them
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

pageTransitions();
