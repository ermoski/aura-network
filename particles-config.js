particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ff6a00' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2, random: true, out_mode: 'out' }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' } }
  },
  retina_detect: true
});