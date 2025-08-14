const menuButton = document.querySelector('.menuButton');
const leftPanel = document.querySelector('.leftPanel');
const overlay = document.querySelector('.overlay');

menuButton.addEventListener('click', () => {
    leftPanel.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    leftPanel.classList.remove('active');
    overlay.classList.remove('active');
});
