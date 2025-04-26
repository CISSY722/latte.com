let currentIndex = 0;
let images = [];

function openLightbox(img) {
    images = Array.from(document.querySelectorAll('.gallery img'));
    currentIndex = images.indexOf(img);
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    setTimeout(() => lightbox.classList.add('show'), 10);
    lightboxImg.src = img.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 500);
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterPhotos(category) {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        if (category === 'all' || photo.dataset.category === category) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
}