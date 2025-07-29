const solar_system = document.querySelector('.solarSystem');

const planets = [
  { name: 'Mercury', size: 8, color: '#aaa', orbit: 140, speed: 4 },
  { name: 'Venus', size: 14, color: '#c2b280', orbit: 170, speed: 7 },
  { name: 'Earth', size: 16, color: '#2e8bff', orbit: 220, speed: 10 },
  { name: 'Mars', size: 12, color: '#ff4500', orbit: 280, speed: 12 },
  { name: 'Jupiter', size: 28, color: '#d2b48c', orbit: 360, speed: 20 },
  { name: 'Saturn', size: 24, color: '#f5deb3', orbit: 440, speed: 24 },
  { name: 'Uranus', size: 18, color: '#87cefa', orbit: 520, speed: 30 },
  { name: 'Neptune', size: 18, color: '#4169e1', orbit: 570, speed: 36 }
];

planets.forEach(planet => {
  const orbit = document.createElement('div');
  orbit.classList.add('orbit', planet.name.toLowerCase() + '-orbit');

  orbit.style.width = `${planet.orbit}px`;
  orbit.style.height = `${planet.orbit}px`;
  orbit.style.position = 'absolute';
  orbit.style.border = "1px dashed rgba(255, 255, 255, 0.25)";
  orbit.style.borderRadius = "50%";
  orbit.style.top = `calc(50% - ${planet.orbit / 2}px)`;
  orbit.style.left = `calc(50% - ${planet.orbit / 2}px)`;

  // Apply animation using keyframes
  orbit.style.animationName = "rotateOrbit";
  orbit.style.animationDuration = `${planet.speed}s`;
  orbit.style.animationIterationCount = "infinite";
  orbit.style.animationTimingFunction = "linear";

  const planetElement = document.createElement('div');
  planetElement.classList.add('planet', planet.name.toLowerCase());
  planetElement.style.width = `${planet.size}px`;
  planetElement.style.height = `${planet.size}px`;
  planetElement.style.backgroundColor = planet.color;
  planetElement.style.borderRadius = '50%';
  planetElement.style.position = 'absolute';
  planetElement.style.top = '0';
  planetElement.style.left = '50%';
  planetElement.style.transform = 'translate(-50%, -50%)';

  orbit.appendChild(planetElement);
  solar_system.appendChild(orbit);
});


// //const planets = document.querySelectorAll('.planet');
// const infoBox = document.getElementById('infoBox');
// const nameElem = document.getElementById('planetName');
// const infoElem = document.getElementById('planetInfo');
// const linkElem = document.getElementById('planetLink');

// planets.forEach(planet => {
//   planet.addEventListener('click', () => {
//     const name = planet.dataset.name;
//     const info = planet.dataset.info;
//     const link = planet.dataset.link;

//     nameElem.textContent = name;
//     infoElem.textContent = info;
//     linkElem.href = link;

//     infoBox.classList.remove('hidden');
//   });
// });

// // Optional: click outside to hide
// document.addEventListener('click', (e) => {
//   if (!e.target.closest('.planet') && !e.target.closest('#infoBox')) {
//     infoBox.classList.add('hidden');
//   }
// });





