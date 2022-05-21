var asteroid , asteroidImg , asteroidGroup;
var galaxyImg , rocket , rocketImg;


function preload()
{
	galaxyImg = loadImage("galaxy.jpg")
	rocketImg = loadImage("rocket.png")
	asteroidImg = loadImage("https___cdn.cnn.com_cnnnext_dam_assets_191121132750-nasa-bennu-asteroid.png")
}

function setup() {
	createCanvas(800, 700);

	//Create the Sprites Here.
	
	rocket = createSprite(100,600,100,100)
	rocket.addImage(rocketImg)
	rocket.scale=0.3
	rocket.velocityY=0
	rocket.velocityX = 0

	asteroidGroup = new Group()
  
}




function draw() {
  
  background(0);
 

  controlRocket();
  asteroids();

  drawSprites();
 
}
function controlRocket()
{
	if(keyDown("RIGHT_ARROW"))
	{
		rocket.x = rocket.x+10

	}
	if(keyDown("LEFT_ARROW"))
	{
		rocket.x = rocket.x-10
	}
}

function asteroids()
{
	if(frameCount % 120 === 0)
	{
		asteroid = createSprite(500,200,50,50)
		asteroid.x=Math.round(random(100,700))
		asteroid.y=Math.round(random(10,120))
		asteroid.addImage(asteroidImg)
		asteroid.scale=0.2
		asteroid.lifetime=500
		asteroid.velocityY=3
		asteroidGroup.add(asteroid)
    
	}
}
