

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.image');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  const imageSrc = images[currentIndex].src;
  sliderImage.src = imageSrc;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

showSlide(currentIndex);