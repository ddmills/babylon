let baby = require('babylon');

let canvas = document.getElementById('game-area');
let engine = new baby.Engine(canvas, true);

BABYLON.SceneLoader.Load("", "resources/scenes/actor.babylon", engine, function (newScene) {
  newScene.executeWhenReady(function () {
    newScene.activeCamera.attachControl(canvas);
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
