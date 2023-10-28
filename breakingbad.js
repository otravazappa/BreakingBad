
const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('.image-container');
const totalImages = images.length;
let currentImageIndex = 0;

function showImage(index) {
    if (index >= 0 && index < totalImages) {
        images[currentImageIndex].classList.remove('active');
        images[index].classList.add('active');
        currentImageIndex = index;
    }
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', function() {
    const newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(newIndex);
});

nextButton.addEventListener('click', function() {
    const newIndex = (currentImageIndex + 1) % totalImages;
    showImage(newIndex);
});


showImage(0);

images.forEach((image, index) => {
    const imageInfo = image.querySelector('.image-info');
    image.addEventListener('mouseover', () => {
        imageInfo.style.display = 'block';
    });
    image.addEventListener('mouseout', () => {
        imageInfo.style.display = 'none';
    });
});
