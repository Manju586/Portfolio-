// Tab navigation in the "About" section
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all tab links
        tabLinks.forEach(link => link.classList.remove('active-link'));
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove('active-tab'));
        
        // Add active class to the clicked link and corresponding tab content
        const targetTab = document.querySelector(`#${link.dataset.target}`);
        link.classList.add('active-link');
        targetTab.classList.add('active-tab');
    });
});
