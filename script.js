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
</script>
