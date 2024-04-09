function calculateDaysBetween(date1, date2) { 
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}

useEffect(() => {
  const date1 = '2022-01-01';
  const date2 = '2022-12-31';
  const daysBetween = calculateDaysBetween(date1, date2);
  console.log(`Number of days between ${date1} and ${date2}: ${daysBetween}`);
}, []);

const handleButtonClick = useCallback(() => {
  // Code to handle button click
}, []);

const handleInputChange = useCallback((event) => {
  const inputValue = event.target.value;
  setData(inputValue);
}, []);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.CircleGeometry(1, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);

function animate() {
  requestAnimationFrame(animate);
  circle.rotation.x += 0.01;
  circle.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
document.addEventListener('DOMContentLoaded', () => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const geometry = new THREE.CircleGeometry(1, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const circle = new THREE.Mesh(geometry, material);
  scene.add(circle);

  function animate() {
    requestAnimationFrame(animate);
    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});


// ## Get the number of days between two dates
// Path: testCopilot.js
function calculateDaysBetween(date1, date2) { 
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}



console.log('asd', false && true)