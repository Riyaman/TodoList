// nav

function showSidebar() {
    const Sidebar = document.querySelector('.Sidebar');
    Sidebar.style.display = 'flex';
}

function hideSidebar() {
    const Sidebar = document.querySelector('.Sidebar');
    Sidebar.style.display = 'none';
}


// section

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function moveSlider(direction) {
    const slideWidth = slides[0].offsetWidth;
    const maxIndex = slides.length - 1;

    if (direction === 'left') {
        currentIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    } else {
        currentIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    }

const offset = -1 * currentIndex * slideWidth;
document.querySelector('.slider').style.transform = `translateX(${offset}px)`;

}