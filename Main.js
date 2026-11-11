document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggles the .active class on the nav-links menu
            navLinks.classList.toggle('active');
            
            // Optional: Changes hamburger icon to an 'X' when open
            if (navLinks.classList.contains('active')) {
                hamburger.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
});



// Destination Filter 

function filterTours(region, element) {
    // 1. Update active tab styling
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');

    // 2. Filter the cards
    const cards = document.querySelectorAll('.tour-card');
    cards.forEach(card => {
        if (region === 'all' || card.getAttribute('data-region') === region) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}