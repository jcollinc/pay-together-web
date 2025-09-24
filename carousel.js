// Initialize Glide.js as the carousel engine
document.addEventListener('DOMContentLoaded', function(){
  if(typeof Glide === 'undefined') return;
  const glide = new Glide('#glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 48,
    peek: 0,
    bound: true,
    autoplay: false,
    keyboard: true,
    breakpoints: {
      1200: { perView: 3, gap: 40 },
      900: { perView: 2, gap: 32 },
      768: { perView: 1, gap: 24 }
    }
  });
  glide.mount();
});

