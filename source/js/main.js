let baby = require('babylon');

let canvas = document.getElementById('game-area');
let engine = new baby.Engine(canvas, true);

BABYLON.SceneLoader.Load("", "resources/scenes/actor.babylon", engine, function (newScene) {
  newScene.executeWhenReady(function () {
    let camera = new baby.ArcRotateCamera("Camera", -2.5, 1.0, 5, new baby.Vector3(0, .5, 0), newScene);
    camera.lowerRadiusLimit = 1.35;
    camera.upperRadiusLimit = 6;
    camera.wheelPrecision = 100;
    newScene.activeCamera = camera;

    camera.attachControl(canvas);
    engine.runRenderLoop(function() {
      newScene.render();
    });
  });
}, function (progress) {
  console.log(progress);
});

window.addEventListener('resize', function() {
    engine.resize();
});
