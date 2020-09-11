const shareBtn = document.querySelector('.share');
const shareSection = document.querySelector('.share-section');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('enabled');
    shareSection.classList.toggle('enabled');
});