let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
 
function goToSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }
  currentIndex = index;
  const el = document.querySelector('.carousel-inner');
  const item = document.querySelector('.carousel-item');
  el.style.transform = `translateX(-${currentIndex * item.offsetWidth}px)`;
}
 
function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
 
function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}
 
 setInterval(goToNextSlide, 3000); 