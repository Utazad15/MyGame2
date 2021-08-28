let sam;
let sam1;
let sam2;
let sam3;
let sam4;
let sam5;
let sam6;
let sam7;
let sam8;
let bg;
let box;

function preload(){
  bg = loadImage("assets/Map.png");
  sam1 = loadAnimation("assets/77318.png");
  sam2 = loadAnimation("assets/77319.png","assets/77320.png","assets/77321.png");
  sam3 = loadAnimation("assets/77326.png");
  sam4 = loadAnimation("assets/77327.png","assets/77328.png","assets/77329.png");
  sam5 = loadAnimation("assets/77322.png");
  sam6 = loadAnimation("assets/77323.png","assets/77324.png","assets/77325.png");
  sam7 = loadAnimation("assets/77330.png");
  sam8 = loadAnimation("assets/77331.png","assets/77332.png","assets/77333.png");
}

function setup(){
  createCanvas(windowWidth-20,windowHeight-20);

  a = createSprite(windowWidth/2,windowHeight/2,100,100);
  a.addImage(bg);
  a.scale = 4;

  sam = createSprite(windowWidth-700,windowHeight-350,100,100);
  sam.addAnimation("samStand",sam1);
  sam.addAnimation("samStand2",sam2);
  sam.addAnimation("samStand3",sam3);
  sam.addAnimation("samStand4",sam4);
  sam.addAnimation("samStand5",sam5);
  sam.addAnimation("samStand6",sam6);
  sam.addAnimation("samStand7",sam7);
  sam.addAnimation("samStand8",sam8);
  sam.scale = 2.8;

//  box = new Sprite(a.x,a.y,100,100);
}

function draw(){
  //console.log(a.x);
  //console.log(a.y);

  background(rgb(80, 167, 232));
  camera.x = sam.x;
  camera.y = sam.y;
 
  if(keyDown("down") || keyDown("s")){
    sam.changeAnimation("samStand2",sam2);
    a.y = a.y - 7;
  }

  if(keyWentUp("down") || keyWentUp("s")){
    sam.changeAnimation("samStand",sam1);
    a.velocityY = 0;
  }

  if(keyDown("up") || keyDown("w")){
    sam.changeAnimation("samStand4",sam4);
    a.y = a.y + 7;
  }

  if(keyWentUp("up") || keyWentUp("w")){
    sam.changeAnimation("samStand3",sam3);
    a.velocityY = 0;
  }

  if(keyDown("right") || keyDown("d")){
    sam.changeAnimation("samStand6",sam6);
    a.x = a.x - 7;
  }

  if(keyWentUp("right") || keyWentUp("d")){
    sam.changeAnimation("samStand5",sam5);
    a.velocityX = 0;
  }

  if(keyDown("left") || keyDown("a")){
    sam.changeAnimation("samStand8",sam8);
    a.x = a.x + 7;
  }

  if(keyWentUp("left") || keyWentUp("a")){
    sam.changeAnimation("samStand7",sam7);
    a.velocityX = 0;
  }

  drawSprites();

//  box.display();
}