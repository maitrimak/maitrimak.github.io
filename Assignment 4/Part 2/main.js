const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageAlts = {
    'pic1.jpg': 'Human Eye',
    'pic2.jpg': 'Sand ',
    'pic3.jpg': 'Flower',
    'pic4.jpg': 'Animal',
    'pic5.jpg': 'Butterfly'
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Loop through the array of images
for (let i = 0; i < imageFilenames.length; i++) {
    const filename = imageFilenames[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', imageAlts[filename]);
    thumbBar.appendChild(newImage);
}

// Add an event listener for the "click" event on all thumbnails
thumbBar.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const src = event.target.getAttribute('src');
        const alt = event.target.getAttribute('alt');
        displayedImage.setAttribute('src', src);
        displayedImage.setAttribute('alt', alt);
    }
});

// Handler to lighten/darken the image
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
