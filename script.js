(() => {
  // NAV responsive
  const toggle = document.querySelector(".navToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A" && navLinks.classList.contains("is-open")) {
        navLinks.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Palabra “cócteles” cambia color + tipografía
  const wordEl = document.getElementById("cocktailsWord");
  if (!wordEl) return;

  const styles = [
    "wordStyle--navy",
    "wordStyle--purple",
    "wordStyle--pink",
    "wordStyle--wine",
    "wordStyle--green"
  ];

  let idx = 0;

  function setWordStyle(next) {
    styles.forEach(c => wordEl.classList.remove(c));
    wordEl.classList.add(styles[next]);
  }

  setWordStyle(idx);

  setInterval(() => {
    idx = (idx + 1) % styles.length;
    setWordStyle(idx);
  }, 1400);
})();