document.querySelectorAll('.pictures').forEach(pictureSection => {
    let currentIndex = 0;
    const carouselItems = pictureSection.querySelectorAll('.one-picture');
    const pictureInner = pictureSection.querySelector('.picture-inner');
    
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
  



// let currentIndex = 0;
// const carouselItems = document.querySelectorAll('.one-picture');
 
// function goToSlide(index) {
//   if (index < 0) {
//     index = carouselItems.length - 1;
//   } else if (index >= carouselItems.length) {
//     index = 0;
//   }
//   currentIndex = index;
//   const el = document.querySelector('.picture-inner');
//   const item = document.querySelector('.one-picture');
//   el.style.transform = `translateX(-${currentIndex * item.offsetWidth}px)`;
// }
 
// function goToNextSlide() {
//   goToSlide(currentIndex + 1);
// }
 
// function goToPrevSlide() {
//   goToSlide(currentIndex - 1);
// }

// setInterval(goToNextSlide, 3000); 

// document.querySelector('.next').addEventListener('click', goToNextSlide());
// document.querySelector('.prev').addEventListener('click', goToPrevSlide());
 
// function moveCarousel(direction) {
//     if (direction === 'prev') {
//         goToNextSlide();
//         // currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     } else if (direction === 'next') {
//         goToPrevSlide();
//         // currentIndex = (currentIndex + 1) % testimonials.length;
//     }
//   }







// let currentIndex = 0; // Текущий индекс
// const carouselItems = document.querySelectorAll('.carousel-item');
// const carouselInner = document.querySelector('.carousel-inner');

// // Функция для перехода к слайду
// function goToSlide(index) {
//     if (index < 0) {
//         index = carouselItems.length - 1; // Возврат к последнему слайду
//     } else if (index >= carouselItems.length) {
//         index = 0; // Возврат к первому слайду
//     }
//     currentIndex = index; // Обновляем текущий индекс
//     const offset = -currentIndex * carouselItems[0].offsetWidth; // Рассчитываем смещение
//     carouselInner.style.transform = `translateX(${offset}px)`; // Смещаем карусель
// }

// // Функция для перехода к следующему слайду
// function goToNextSlide() {
//     goToSlide(currentIndex + 1);
// }

// // Функция для перехода к предыдущему слайду
// function goToPrevSlide() {
//     goToSlide(currentIndex - 1);
// }

// // Функция для обработки кнопок
// // function moveCarousel(direction) {
// //     if (direction === 'prev') {
// //         goToPrevSlide();
// //     } else if (direction === 'next') {
// //         goToNextSlide();
// //     }
// // }

// document.querySelector('.next').addEventListener('click', goToNextSlide());
// document.querySelector('.prev').addEventListener('click', goToPrevSlide());


// // Добавляем обработку изменения размера окна, чтобы слайды оставались адаптивными
// window.addEventListener('resize', () => {
//     goToSlide(currentIndex);
// });
