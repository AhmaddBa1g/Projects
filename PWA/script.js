const planets = {
  mercury: {
    name: "Mercury",
    description: "Closest planet to the Sun.",
    facts: "No atmosphere. Temp: -173°C to 427°C. Moons: 0",
    moons: 0
  },
  venus: {
    name: "Venus",
    description: "Covered in thick clouds.",
    facts: "Hottest planet. Temp: ~464°C. Moons: 0",
    moons: 0
  },
  earth: {
    name: "Earth",
    description: "Only planet known to support life.",
    facts: "Atmosphere: Nitrogen/Oxygen. Temp: 15°C. Moons: 1",
    moons: 1
  },
  mars: {
    name: "Mars",
    description: "The red, dusty planet.",
    facts: "Thin CO₂ atmosphere. Temp: -60°C. Moons: 2",
    moons: 2
  },
  jupiter: {
    name: "Jupiter",
    description: "Gas giant with massive storms.",
    facts: "79 moons. Giant Red Spot visible from space.",
    moons: 4
  },
  saturn: {
    name: "Saturn",
    description: "Ringed gas giant.",
    facts: "82 moons. Made mostly of hydrogen and helium.",
    moons: 3
  },
  uranus: {
    name: "Uranus",
    description: "Icy and tilted on its side.",
    facts: "27 moons. Atmosphere: Methane, hydrogen, helium.",
    moons: 2
  },
  neptune: {
    name: "Neptune",
    description: "Blue planet with strong winds.",
    facts: "14 moons. Coldest planet.",
    moons: 1
  },
  pluto: {
    name: "Pluto",
    description: "Dwarf planet with odd orbit.",
    facts: "5 moons. Surface: nitrogen ice and rock.",
    moons: 1
  }
};

function generateStars(count = 150) {
  const container = document.getElementById("stars-container");
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(star);
  }
}
generateStars();

const box = document.getElementById("infoBox");

document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("click", () => {
    const data = planets[planet.id];
    const au = planet.getAttribute("data-au") || "?";
    box.style.display = "block";
    box.innerHTML = `<strong>${data.name}</strong><p>${data.description}</p><p>${data.facts}</p><p>Distance from Sun: ${au} AU</p>`;
  });
});

function animatePlanets() {
  const t = Date.now() * 0.0001;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  function setOrbit(id, radiusX, radiusY, speed, phase = 0) {
    const el = document.getElementById(id);
    const label = el.querySelector(".label");

    const x = centerX + radiusX * Math.cos(t * speed + phase);
    const y = centerY + radiusY * Math.sin(t * speed + phase);
    const dx = x - centerX;
    const dy = y - centerY;
    const auDistance = (Math.sqrt(dx * dx + dy * dy) / 120).toFixed(2);

    if (!el.matches(':hover')) {
      el.style.transform = `translate(${x - el.offsetWidth / 2}px, ${y - el.offsetHeight / 2}px)`;
    }

    el.setAttribute("data-au", auDistance);

    // Add moons if not already added
    if (!el.hasAttribute("data-moons")) {
      el.setAttribute("data-moons", "true");
      const moonCount = planets[id].moons;
      for (let i = 0; i < moonCount; i++) {
        const moon = document.createElement("div");
        moon.className = "moon";
        moon.style.animationDelay = `${i * 0.3}s`;
        el.appendChild(moon);
      }
    }
  }

  setOrbit("mercury", 60, 36, 8);
  setOrbit("venus", 90, 54, 6.5);
  setOrbit("earth", 120, 72, 5.5);
  setOrbit("mars", 150, 90, 4.5);
  setOrbit("jupiter", 190, 114, 3.2);
  setOrbit("saturn", 230, 138, 2.8);
  setOrbit("uranus", 270, 162, 2.2);
  setOrbit("neptune", 310, 186, 1.9);
  setOrbit("pluto", 360, 180, 1.2, 1.5);

  requestAnimationFrame(animatePlanets);
}
animatePlanets();

let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('User installed the app');
      }
      installBtn.style.display = 'none';
    });
  });
});