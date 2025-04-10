// Inicializa o Swiper
const swiper = new Swiper('.my-slider', {
  // Opções do Swiper
  loop: true,                 // Loop infinito
  autoplay: {                 // Auto-play
      delay: 3000,            // Tempo entre slides (3s)
      disableOnInteraction: false, // Continua após interação
  },
  pagination: {               // Dots de navegação
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {               // Botões de navegação (opcional)
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Efeito de transição (opcional)
  effect: 'slide', // Pode ser 'fade', 'cube', 'coverflow', etc.
  speed: 800,      // Velocidade da transição (ms)
});