!function e(n,r,o){function t(u,a){if(!r[u]){if(!n[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(i)return i(u,!0);var d=new Error("Cannot find module '"+u+"'");throw d.code="MODULE_NOT_FOUND",d}var c=r[u]={exports:{}};n[u][0].call(c.exports,function(e){var r=n[u][1][e];return t(r?r:e)},c,c.exports,e,n,r,o)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(e,n,r){(function(e){"use strict";var n="undefined"!=typeof window?window.BABYLON:"undefined"!=typeof e?e.BABYLON:null,r=document.getElementById("game-area"),o=new n.Engine(r,!0);BABYLON.SceneLoader.Load("","resources/scenes/actor.babylon",o,function(e){e.executeWhenReady(function(){var t=new n.ArcRotateCamera("Camera",-2.5,1,5,new n.Vector3(0,.5,0),e);t.lowerRadiusLimit=1.35,t.upperRadiusLimit=6,t.wheelPrecision=100,e.activeCamera=t,t.attachControl(r),o.runRenderLoop(function(){e.render()})})},function(e){console.log(e)}),window.addEventListener("resize",function(){o.resize()})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
//# sourceMappingURL=main.js.map