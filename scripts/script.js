// Array with image file paths
const images = [
    "media/soltes.jpg",
    "media/soltes2.jpg",
    "media/soltes3.jpg",
    "media/soltes4.jpg",
    "media/jork.jpg",
    "media/jork2.jpg",
    "media/petel.jpg",
    "media/petel2.jpg",
];
  
// Preload images to Image object array
const preloadedImages = images.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
});

function pickImage() {
    // Pick random image index
    const currentIndex = Math.floor(Math.random() * images.length);
    // Set image path to random image
    const imgElement = document.getElementById("random-image");
    imgElement.src = preloadedImages[currentIndex].src;
    // Show image
    imgElement.style.display = "block";
}

window.onload = () => {
    pickImage();
    setInterval(pickImage, 5000);
}

