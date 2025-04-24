
particlesJS("particles-js", {
  particles: {
    number: { value: 40 },
    size: { value: 3 },
    color: { value: "#ff6a00" },
    opacity: { value: 0.6 },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});
