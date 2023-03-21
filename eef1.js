
const slides = document.querySelectorAll('.slide');
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
// Get current slide
const current = document.querySelector('.active');
// Remove active class
current.classList.remove('active');
// Check for next slide
if (current.nextElementSibling) {
// Add active class to next sibling
current.nextElementSibling.classList.add('active');
} else {
// Add active class to first slide
slides[0].classList.add('active');
}
setTimeout(() => current.classList.remove('active'));
};

// Set interval for slide change
slideInterval = setInterval(nextSlide, intervalTime);


