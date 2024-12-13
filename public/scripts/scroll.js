
const cards = document.querySelectorAll('.card');
const horizontalCard = document.querySelector('.card-horizontal');

function toggleVisibility() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
        
        if (isVisible) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });


    const horizontalRect = horizontalCard.getBoundingClientRect();
    const isHorizontalVisible = horizontalRect.top < window.innerHeight - 100 && horizontalRect.bottom > 100;

    if (isHorizontalVisible) {
        horizontalCard.classList.add('visible');
    } else {
        horizontalCard.classList.remove('visible');
    }
}


window.addEventListener('scroll', toggleVisibility);


toggleVisibility();
