const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
let index = 0;

// Atualiza a posição do carrossel
function updateCarousel() {
  const width = images[0].clientWidth;
  carousel.style.transform = `translateX(${-index * width}px)`;
}

// Próximo slide
function nextSlide() {
  index = (index + 1) % images.length;
  updateCarousel();
}

// Slide anterior
function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}

// Evento dos botões
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetAutoplay();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetAutoplay();
});

// Autoplay a cada 5 segundos
let autoplay = setInterval(nextSlide, 5000);

// Resetar autoplay ao interagir manualmente
function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(nextSlide, 5000);
}

window.addEventListener("resize", updateCarousel);
