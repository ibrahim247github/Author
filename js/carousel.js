const carousel = document.querySelector(".carousel");
const carouselSlider = document.querySelector(".carousel__slider");
const carouselSlides = document.querySelectorAll(".carousel__slide");
const nextBtn = document.querySelector(".carousel__next-btn");
const prevBtn = document.querySelector(".carousel__prev-btn");

const numberOfSlides = carouselSlides.length;
carouselSlider.style.width = `${carouselSlider.childElementCount * 100}%`;

nextBtn.addEventListener("click", () => {
  nextSlide(carouselSlider, numberOfSlides);
});

prevBtn.addEventListener("click", () => {
  prevSlide(carouselSlider, numberOfSlides);
});

function nextSlide(carouselSlider, numberOfSlides) {
  carouselSlider.classList.add("carousel-transition");
  carouselSlider.style.transform = `translateX(-${
    (1 / numberOfSlides) * 100
  }%)`;

  setTimeout(() => {
    carouselSlider.classList.remove("carousel-transition");
    carouselSlider.style.transform = `translateX(0)`;
    const slide = carouselSlider.removeChild(carouselSlider.firstElementChild);
    carouselSlider.appendChild(slide);
  }, 500);
}

function prevSlide(carouselSlider, numberOfSlides) {
  carouselSlider.classList.remove("carousel-transition");
  const slide = carouselSlider.removeChild(carouselSlider.lastElementChild);
  carouselSlider.insertBefore(slide, carouselSlider.firstElementChild);
  carouselSlider.style.transform = `translateX(-${
    (1 / numberOfSlides) * 100
  }%)`;

  setTimeout(() => {
    carouselSlider.classList.add("carousel-transition");
    carouselSlider.style.transform = `translateX(0)`;
  }, 100);
}

// carouselSlider.draggable = true;
// carouselSlider.addEventListener("mouseover", () => {
//   console.log("I was dragged");
// });
// console.log(carouselSlider);
// console.log(nextBtn);
