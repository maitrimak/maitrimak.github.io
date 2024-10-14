/*Name: Maitri Makwana
File: assignment4_part4
Date: 16th July, 2024
Description: This is the JavaScript for image gallery */

// Select the thumbnail bar
const thumbBar = document.querySelector('.thumb-bar');
// Select the element displaying the selected image
const displayedImage = document.querySelector('.displayed-img');
// Select the button to toggle
const btn = document.querySelector('button');
// Select an overlaying element
const overlay = document.querySelector('.overlay');

// Declare an array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageAlts = {
    'pic1.jpg': 'Human Eye',
    'pic2.jpg': 'Sand ',
    'pic3.jpg': 'Flower',
    'pic4.jpg': 'Animal',
    'pic5.jpg': 'Butterfly'
};

// Loop through the array of images
for (let i = 0; i < imageFilenames.length; i++) {
    const filename = imageFilenames[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageFilenames[i]}`);
    newImage.setAttribute('alt', imageAlts[filename[i]]);
    thumbBar.appendChild(newImage);

    // Add an event listener for each image in the thumb bar
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `images/${filename}`);
        displayedImage.setAttribute('alt', imageAlts[filename]);
    });
}

// Add an event listener to the button for darken/lighten effect
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
