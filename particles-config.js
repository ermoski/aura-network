particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: '#FFA500' },
    shape: { type: 'circle' },
    opacity: { value: 0.7, random: true },
    size: { value: 4, random: true },
    move: { enable: true, speed: 1.5, random: true, out_mode: 'out' }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'repulse' } }
  },
  retina_detect: true
});