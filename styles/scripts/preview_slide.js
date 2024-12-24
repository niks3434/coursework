document.querySelectorAll('.testimonial-carousel').forEach(pictureSection => {
  let currentIndex = 0;
  const carouselItems = pictureSection.querySelectorAll('.two-cards');
  const pictureInner = pictureSection.querySelector('.two-cards-wrapper');
  
  function goToSlide(index) {
    if (index < 0) {
      index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
      index = 0;
    }
    currentIndex = index;
    pictureInner.style.transform = `translateX(-${currentIndex * carouselItems[0].offsetWidth}px)`;
  }

  function goToNextSlide() {
    goToSlide(currentIndex + 1);
  }

  function goToPrevSlide() {
    goToSlide(currentIndex - 1);
  }

  setInterval(goToNextSlide, 3000); 
});








// const testimonials = document.querySelectorAll(".two-cards");
// let curInd = 0;

// function updateTestimonials() {
//   testimonials.forEach((testimonial, index) => {
//     testimonial.classList.remove("active", "next", "prev");

//     if (index === curInd) {
//       testimonial.classList.add("active");
//     } else if (index === (curInd + 1) % testimonials.length) {
//       testimonial.classList.add("next");
//     } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
//         testimonial.classList.add("prev");
//     }
//   });
// }

// function moveCarousel(direction) {
//   if (direction === 'prev') {
//     curInd = (curInd - 1 + testimonials.length) % testimonials.length;
//   } else if (direction === 'next') {
//     curInd = (curInd + 1) % testimonials.length;
//   }
//   updateTestimonials();
// }

// updateTestimonials();
