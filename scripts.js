document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-modal').style.display = 'flex';
});

document.getElementById('join-now-btn').addEventListener('click', function() {
    document.getElementById('signup-modal').style.display = 'flex';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('signup-modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('signup-modal')) {
        document.getElementById('signup-modal').style.display = 'none';
    }
};

const images = document.querySelectorAll('.carousel-images img');
let currentImageIndex = 0;

document.getElementById('next').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
});

document.getElementById('prev').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
});

images.forEach((img, index) => {
    if (index !== 0) {
        img.style.display = 'none';
    }
});
