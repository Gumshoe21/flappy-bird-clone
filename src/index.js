import Phaser from 'phaser';
import PlayScene from './scenes/PlayScene';
import MenuScene from './scenes/MenuScene';
import PreloadScene from './scenes/PreloadScene';

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH * 0.1, y: HEIGHT / 2 };

const SHARED_CONFIG = {
	width: WIDTH,
	height: HEIGHT,
	startPosition: BIRD_POSITION,
};

const Scenes = [PreloadScene, MenuScene, PlayScene];
const createScene = Scene => new Scene(SHARED_CONFIG); // helper function to instantiate scene
const initScenes = () => Scenes.map(createScene);

const config = {
	type: Phaser.WebGL,
	...SHARED_CONFIG,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
		},
	},
	scene: initScenes(),
};

new Phaser.Game(config);

/*
const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH / 10, y: HEIGHT / 2 };

const SHARED_CONFIG = {
	width: WIDTH,
	height: HEIGHT,
	startPosition: BIRD_POSITION,
};
const config = {
	// default renderer is WebGL (web graphics library) - must provide for w/h to render correctly. JS API for rendering 2D and 3D graphics.
	type: Phaser.AUTO,
	...SHARED_CONFIG,
	//gravity,velocity behavior
	physics: {
		//Arcade physics plugin, managers physics simulation
		default: 'arcade',
		arcade: {
			  gravity:{y:400},
			debug: true,
		},
	},
	scene: [new PlayScene(SHARED_CONFIG)],
	// run in this order too:preload,then create, then update
};

// Loading assets such as images music animations etc.

let upperPipe = null;
let lowerPipe = null;
let pipeHorizontalDistance = 0;
let pipes = null;

const flapVelocity = 250;
const VELOCITY = 200;
let bird = null;
const PIPES_TO_RENDER = 4;
const initialBirdPosition = { x: config.width * 0.1, y: config.height / 2 };

// Initializing instances of objects on screen - interactions, basic setup

new Phaser.Game(config);
// bird.body.gravity.y = 200;

// bird.body.velocity.x=VELOCITY;

//debugger;
// velocity = distance over time
// debugger;
// t0 =   0px/s
// t1 = 200px/s
// t2 = 400px/s
// t3 = 600px/s

// called every frame
// by default updates 60 fps or 60 times per second
// delta is time from last frame
// delta is about 16ms
// 60 * 16ms = ~1000ms
// console.log('hello');
//console.log(delta);
// console.log(bird.body.velocity.y);
//  console.log(totalDelta);
  totalDelta += delta;

  if (totalDelta < 1000){return;};

  if (totalDelta >=1000){
    console.log(bird.body.velocity.y);
    totalDelta=0;

  }
  if (bird.x >= config.width - bird.width){
    bird.body.velocity.x -= VELOCITY + 200;
    
  } else if (bird.x <= 0) {
    bird.body.velocity.x=VELOCITY;
  }
}
// x axis
// y axis
// key of image
// this.add.image(0, 0, 'sky');
// width / 2 = 400
// height / 2 = 300
// this means that the middle of the canvas is (400,300) - that's where we insert our image (at the center).
// this.add.image(config.width / 2,config.height / 2,'sky');
// apparently setOrigin's params are the percentage of that axis. so (0.5,0.5) is (50%, 50%) - so 50% along the x axis (to the right), then 50% along the y axis (downward).
*/
