document.getElementById('confettiButton').addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confettiContainer.appendChild(confetti);
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

function getRandomColor() {
    const colors = ['#FFC0CB', '#FFD700', '#ADFF2F', '#00FFFF', '#FF4500', '#1E90FF'];
    return colors[Math.floor(Math.random() * colors.length)];
}
