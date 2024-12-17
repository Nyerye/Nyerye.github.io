// Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project card hover animations
function expandCard(card) {
    card.style.transform = "scale(1.1)";
    card.style.transition = "transform 0.3s ease-in-out";
}

function shrinkCard(card) {
    card.style.transform = "scale(1)";
}
