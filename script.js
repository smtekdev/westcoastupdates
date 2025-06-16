

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Toggle submenu on mobile
function toggleSubmenu(event) {
    event.preventDefault();
    const toggle = event.currentTarget;
    const submenu = toggle.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}




// portfolio carousel start script

const images = document.querySelectorAll('.carousel a');
let index = 0;

function updateCarousel() {
    images.forEach((img, i) => {
        img.className = '';
        if (i === index) {
            img.classList.add('active');
        } else if (i === (index + 1) % images.length) {
            img.classList.add('right1');
        } else if (i === (index + 2) % images.length) {
            img.classList.add('right2');
        } else if (i === (index - 1 + images.length) % images.length) {
            img.classList.add('left1');
        } else if (i === (index - 2 + images.length) % images.length) {
            img.classList.add('left2');
        }
    });
}

function nextSlide() {
    index = (index + 1) % images.length;
    updateCarousel();
}

updateCarousel();
setInterval(nextSlide, 3000);

// portfolio carousel end script

// Service  carousel start  script

// Service  carousel end  script

