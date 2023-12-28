import * as THREE from 'three';

const scene = new THREE.Scene();

// Groug
const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 0.2;
scene.add(group);

const sphereGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxGeometry1 = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Box and sphere are meshes
// Mesh is a combination of geometry and material
const sphere = new THREE.Mesh(sphereGeometry, material);
const box = new THREE.Mesh(boxGeometry, material);
const box1 = new THREE.Mesh(boxGeometry1, material);

// Adjust x position of meshes
sphere.position.x = -1.5;
box.position.x = 1.5;
box1.position.x = 0;

// Add meshes to group
group.add(sphere);
group.add(box);
group.add(box1);

// Adjust possion of sphere and box
//sphere.position.set(
//    //x
//    -1.5,
//    //y
//    0, 
//    //z
//    0
//);
//
//box.position.set(
//    //x
//    1.5, 
//    //y
//    0, 
//    //z
//    0
//);
//
//// Play with scales of sphere and box
//sphere.scale.set(
//    2,
//    2,
//    1
//);

// Play with the rotations of sphere and box
//sphere.rotation.x = Math.PI * 0.25;
//sphere.rotation.y = Math.PI * 0.25;
//
//box.rotation.x = Math.PI * 0.25;
//box.rotation.y = Math.PI * 0.25;

// Distance between sphere and box
console.log(box.position.distanceTo(sphere.position));

// Normalize sphere position
//sphere.position.normalize();

//scene.add(sphere);
//scene.add(box);
//scene.add(box1);

// Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
    width: 800,
    height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// lookAt is a method that makes the camera look at a specific position
//camera.lookAt(sphere.position);
scene.add(camera);

const canvas = document.querySelector('.webgl') as HTMLCanvasElement;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
