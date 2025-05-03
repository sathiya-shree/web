// Adding a simple interactivity: change header background color when clicked
document.querySelector('header').addEventListener('click', () => {
    document.body.style.backgroundColor = '#e0f7fa';
  const sectionsMap = {
    "internships": "Internships",
    "projects": "Projects",
    "certifications": "Certifications",
    "skills": "Skills",
    "interests": "Interests",
    "resume": "Resume"
  };

  function applyTypingEffect(sectionId) {
    const section = document.getElementById(sectionId);
    const header = section.querySelector("h3");
    if (header) {
      header.classList.remove("typing");
      void header.offsetWidth; // reflow
      header.classList.add("typing");
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.target;
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add('active');
      applyTypingEffect(targetId);
    });
  });

  // Apply initially
  applyTypingEffect('internships');

    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
                                                  <script>
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#0284c7"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.3,
        "random": true
      },
      "size": {
        "value": 4,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#0284c7",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.2
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    },
    "retina_detect": true
  });
</script>

</script>
