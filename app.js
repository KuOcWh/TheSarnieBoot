const images = [
    './images/sandwiches/sandy.jpeg',
    './images/sandwiches/sarnieFilling1.jpeg',
    './images/sandwiches/sarnieFilling2.jpeg'
    // Add more image URLs as needed
  ];

  const imageElement = document.querySelector('#image1'); // Select the image element
  let currentIndex = 0;

  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }