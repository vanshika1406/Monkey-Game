var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fac35769-3c08-4ca0-b9cf-b0388bd76b1c","979d67d7-3159-45cb-b3b6-c9d0c75ea41c","2074396a-d321-4e72-b7fb-7a8204a0fb00"],"propsByKey":{"fac35769-3c08-4ca0-b9cf-b0388bd76b1c":{"name":"monkeyImage","frameCount":2,"frameSize":{"x":308,"y":257},"looping":true,"frameDelay":12,"categories":["animals"],"jsonLastModified":"2020-07-16 22:27:15 UTC","pngLastModified":"2020-01-29 19:47:56 UTC","version":"WV2qiClfj58yAd51jcnBL6aJTeqkdsnm","sourceUrl":null,"sourceSize":{"x":308,"y":514},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/fac35769-3c08-4ca0-b9cf-b0388bd76b1c.png"},"979d67d7-3159-45cb-b3b6-c9d0c75ea41c":{"name":"bananaImage","frameCount":1,"frameSize":{"x":382,"y":310},"looping":true,"frameDelay":2,"categories":["food"],"jsonLastModified":"2020-07-16 22:28:24 UTC","pngLastModified":"2020-01-29 19:48:28 UTC","version":"ccpZZOVIGskbfrQGMrryQFkMKlec5.T5","sourceUrl":"assets/api/v1/animation-library/gamelab/ccpZZOVIGskbfrQGMrryQFkMKlec5.T5/category_food/bannana.png","sourceSize":{"x":382,"y":310},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/ccpZZOVIGskbfrQGMrryQFkMKlec5.T5/category_food/bannana.png"},"2074396a-d321-4e72-b7fb-7a8204a0fb00":{"name":"rock","frameCount":1,"frameSize":{"x":128,"y":128},"looping":true,"frameDelay":2,"categories":["environment"],"jsonLastModified":"2020-07-16 22:28:22 UTC","pngLastModified":"2020-01-29 19:48:25 UTC","version":".pLS.n.SMG0pvfUy0tHxDssjtYmDbSjs","sourceUrl":"assets/api/v1/animation-library/gamelab/.pLS.n.SMG0pvfUy0tHxDssjtYmDbSjs/category_environment/rock.png","sourceSize":{"x":128,"y":128},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/.pLS.n.SMG0pvfUy0tHxDssjtYmDbSjs/category_environment/rock.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey;

var banana;
var bananaGroup;

var rock;
var rockGroup;

           
var survivalTime=0;

var ground;
monkey =createSprite(25,310, 20,20);
var rockGroup = createGroup();

var bananaGroup =createGroup();

function draw() {
  
  background("LightBlue");
  
  ground =createSprite(200, 350, 400, 10);
  
  monkey.setAnimation("monkeyImage");
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -8;
  }
  monkey.velocityY = monkey.velocityY + 2;
  monkey.scale=0.2;
  ground.velocityX=-4;
  monkey.collide(ground);
  spawnBanana();
  spawnrock();
  
  if(bananaGroup.collide(monkey)){
    bananaGroup.destroyEach();
    
  }
  strokeWeight(3);
  stroke("black");
  textSize(32);
  
  survivalTime=Math.ceil(frameCount/frameRate());
  
  text("Survival Time:" +survivalTime, 80,50);
  
  if(rockGroup.collide(monkey)){
    monkey.destroy();
    survivalTime=0;
    rockGroup.setVelocityXEach(0);
    rockGroup.setVelocityYEach(0);
    bananaGroup.setVelocityXEach(0);
    bananaGroup.setVelocityYEach(0);
    bananaGroup.destroyEach();
    rockGroup.destroyEach();
  }
  drawSprites();
}
function spawnBanana(){
  if (World.frameCount % 80 === 0) {
   banana =createSprite(400,360,10,20);
   banana.setAnimation("bananaImage");
   banana.scale=0.1;
   banana.y=Math.round(random(120,200));
   banana.velocityX=-4;
  bananaGroup.add(banana);
  banana.lifetime=300;
  }
}

function spawnrock(){
  if (World.frameCount % 300 === 0) {
   rock =createSprite(400,310,10,20);
   rock.setAnimation("rock");
   rock.scale=0.7;
  
   rock.velocityX=-2;
   rock.lifetime=400;
   rockGroup.add(rock);
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
