let baby = require('babylon');

let canvas = document.getElementById('game-area');
let engine = new baby.Engine(canvas, true);


let createScene = function() {
  let scene = new baby.Scene(engine);
  let camera = new baby.FreeCamera('camera1', new baby.Vector3(0, 5, -10), scene);

  camera.setTarget(baby.Vector3.Zero());

  camera.attachControl(canvas, false);

  let light = new baby.HemisphericLight('light1', new baby.Vector3(0, 1, 0), scene);

  let sphere = baby.Mesh.CreateSphere('sphere1', 16, 2, scene);

  sphere.position.y = 1;

  let ground = baby.Mesh.CreateGround('ground1', 6, 6, 2, scene);

  return scene;
}

let scene = createScene();

window.addEventListener('DOMContentLoaded', function() {
  engine.runRenderLoop(function() {
    scene.render();
  });
});

window.addEventListener('resize', function() {
    engine.resize();
});
