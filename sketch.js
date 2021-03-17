function preload(){
    //char1 = loadAnimation("1.png","2.png","3.png");
    
    obstacle1 = loadImage("images/obstacle1.png");
    obstacle2 = loadImage("images/obstacle2.png");
    obstacle3 = loadImage("images/obstacle3.png");
    obstacle4 = loadImage("images/obstacle4.png");
    //obstacle5 = loadImage("images/ob5.png");
    //obstacle6 = loadImage("images/ob6.png");

    //backdropimg = loadImage("images/backdrop.png");
    bgimg = loadImage("images/sky f.jpg");
    groundImage = loadImage("images/ground.png");
    characterImg = loadAnimation("images/2.png","images/3.png","images/4.png","images/5.png")
    characterImg1 = loadAnimation("images/1.png");
    cloudImg = loadImage("images/clouds.png");
    cloudImg1 = loadImage("images/cloud 1.png");
    cloudImg2 = loadImage("images/cloud.png");
  }
  
  function setup() {
    createCanvas(1200, 500);
    
    bg = createSprite(250,170,1500,500);
    bg.addImage(bgimg);
    bg.scale=2;
    bg.velocityX=-2;
    
    ground = createSprite(width/2,540,width,50);
    ground.addImage("ground",groundImage);
    ground.velocityX=-2;
    ground.x = width/2;
    //ground.scale=0.9;
    
    invisibleGround = createSprite(width/2,height-35,width,5);
    invisibleGround.visible = false;

    character = createSprite(80,height - 135,10,10);
    character.addAnimation("run",characterImg);
    character.addAnimation("fly",characterImg1);

    cloud = createSprite(550,50,10,10);
    cloud.addImage(cloudImg);
    //cloud.velocityX = -2;
  }
  
  function draw() {
    
    background(180);
      
      
      if (ground.x < 0){
       ground.x = ground.width/2;
      }

      if (bg.x < 0){
        bg.x = bg.width/2;
       }
      
     

      //if (cloud.x < 0){
        //cloud.x = cloud.width/2;
      //}

      if(keyDown("space") && character.y >= 100 ) {
        character.velocityY = -12;
        character.changeAnimation("fly",characterImg1);
      }
       else{
        character.changeAnimation("run",characterImg);
       }
      //character.changeAnimation("run",characterImg);
      character.velocityY = character.velocityY + 0.8;
      character.collide(invisibleGround);
      spawnObstacles();
    drawSprites();
  }

  function spawnObstacles() {

    if(frameCount % 200 === 0) {
      var obstacle = createSprite(1200,height-65,20,30);
      obstacle.setCollider('circle',0,0,45)
      // obstacle.debug = true
    
      obstacle.velocityX = -2;
        //generate random obstacles
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
          obstacle.scale = 0.5;
                  break;
          case 2: obstacle.addImage(obstacle2);
          obstacle.scale = 0.5;
                  break;
          case 3: obstacle.addImage(obstacle3);
          obstacle.scale = 0.25;
          obstacle.y=height-95;
                  break;
          case 4: obstacle.addImage(obstacle4);
          obstacle.scale = 0.25;
          obstacle.y=height-95;
                  break;
          default: break;
        }
        
        //assign scale and lifetime to the obstacle           
        //obstacle.scale = 0.3;
        obstacle.lifetime = 600;
        //obstacle.depth = character.depth;
        //character.depth +=1;
        //add each obstacle to the group
        //obstaclesGroup.add(obstacle);
      }
  }
  
  function spawnClouds() {
    //write code here to spawn the clouds
    if (World.frameCount % 60 === 0) {
      var cloud = createSprite(400,320,40,10);
      cloud.y = randomNumber(280,320);
      cloud.setAnimation("cloud");
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 134;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      CloudsGroup.add(cloud);
    }
  }