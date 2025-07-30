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







let zoom = 1;
const minZoom =1;
const maxZoom =1.3;
const image = document.getElementsByClassName("solar-image")[0];

function zoomIn() {
  if(zoom==maxZoom) {// alert("You cannot zoom in further");
    alert("You cannot zoom in further");
    return;
  }
  if(zoom < maxZoom) {// Prevent zooming in beyond maxZoom
  zoom = Math.min(maxZoom, zoom + 0.1);
  // Ensure zoom does not go below minZoom
  image.style.transform = `scale(${zoom})`;
  }
}

function zoomOut() {
  if(zoom==minZoom) {// alert("You cannot zoom out further");
    alert("You cannot zoom out further");
    return;
  }
  if(zoom> minZoom){
  zoom = Math.max(1, zoom - 0.1);
  image.style.transform = `scale(${zoom})`;
  }
}





//fetching
let planetsData = {};


window.onload = async function () {
  const response = await fetch('planets.json');
  planetsData = await response.json();
};

function searchPlanet() {
  const input = document.getElementById("s").value.trim().toLowerCase();
  const planet = planetsData[input];

  if (!planet) {
    alert("Planet not found!");
    return;
  }

  // Populate info
  document.getElementById("planetName").textContent = planet.name;
  document.getElementById("planetTagline").textContent = planet.tagline;
  document.getElementById("planetDescription").textContent = planet.description;
  document.getElementById("planetImage").src = planet.image;
  document.getElementById("planetWiki").href = planet.wiki;
   document.getElementById("planetWiki").textContent = "More on Wikipedia";

}



