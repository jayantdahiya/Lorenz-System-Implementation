import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import lorenz from "./main";

export default function App () {
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // const renderer = new THREE.WebGLRenderer({
  //   canvas: document.querySelector('#root'),
  // });
  
  // renderer.setPixelRatio( window.devicePixelRatio);
  // renderer.setSize( window.innerWidth, window.innerHeight);
  
  // camera.position.setZ(30);
  
  // renderer.render(scene, camera);

  

  // const geometry = new THREE.IcosahedronGeometry(7, 2);
  // const material = new THREE.MeshStandardMaterial( {color: 0xFF6347, wireframe: true });
  // const shape = new THREE.Mesh(geometry, material);
  // scene.add(shape);

  // const pointLight = new THREE.PointLight(0xffffff);
  // pointLight.position.set(20,20,20);
  // const ambientLight = new THREE.AmbientLight(0xffffff);
  // scene.add(pointLight, ambientLight);

  // const lighthelper = new THREE.PointLightHelper();
  // const gridhelper = new THREE.GridHelper(200,50);
  // scene.add(gridhelper);

  // const controls = new OrbitControls(camera, renderer.domElement);


  // function animate(){
  //   requestAnimationFrame( animate);

  //   shape.rotation.x += 0.005;
  //   shape.rotation.y += 0.005;
  //   shape.rotation.z += 0.001;

  //   controls.update();

  //   renderer.render(scene, camera);
  // }
  
  // animate();

  <lorenz />

}
