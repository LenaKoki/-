let cvs = document.getElementById('canvas')
let context = canvas.getContext('2d')


let bird = new Image()
let back = new Image()
let road = new Image()
let pipeUp = new Image()
let pipeBottom = new Image()

bird.src = 'img/bird.png'
back.src = 'img/back.png'
road.src = 'img/road.png'
pipeUp.src = 'img/pipeUp.png'
pipeBottom.src = 'img/pipeBottom.png'

 let fly_audio = new Audio()
 let score_audio = new Audio()

 fly_audio.src = 'audio/fly.mp3'
 score_audio.src = 'audio/score.mp3'



let gap = 100;

document.addEventListener('keydown', moveUp);

function moveUp() {
	yPos -= 20;
	fly_audio.play();
}

var pipe = [];
pipe[0] = {
	x: cvs.width,
	y: 0,
}
let best_score_text = document.getElementById(' ')
let score = 0;

 let xPos = 10;
 let yPos =    50;
 let grav = 1     ;
 let paused = false;
 let pause = false;


//  window.addEventListener('mousedown', pauseGameKeyHandler, false);

// function pauseGameKeyHandler(e) {
//                 var keyCode = e.keyCode;
//                 switch(keyCode){
//                     case 80: //p
//                     togglePause();
//                     break;
//                 }

//             }

//             function togglePause() {
//                 paused = !paused;
//                 draw();
//             }

function draw() {
if(!pause){
	context.drawImage(back, 0, 0);
	for(var i = 0; i < pipe.length; ++i){
		context.drawImage(pipeUp, pipe[i].x,pipe[i].y);
		context.drawImage(pipeBottom, pipe[i].x,pipe[i].y + pipeUp.height + gap);

		pipe[i].x--; 

		if(pipe[i].x == 125){
			pipe.push({
				x: cvs.width,
				y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});
		}

		if(xPos + bird.width >= pipe[i].x
			&& xPos <= pipe[i].x + pipeUp.width
			&& (yPos <= pipe[i].y + pipeUp.height
			|| yPos + bird.height >= pipe[i].y + pipeUp.height + gap)|| yPos + bird.height >= cvs.height - road.height){
			window.location.reload();
		} 


		if(pipe[i].x == 5){
			score++;
			score_audio.play();
		}

	}

	context.drawImage(road, 0, cvs.height - road.height);
	context.drawImage(bird, xPos, yPos);

	yPos += grav;

	context.fillStyle = '#008000';
	context.font = '24px Verdana';
	context.fillText('счет:' + score, 10, cvs.height - 20)
		context.fillStyle = 'rgba(0,0,0, 0.3)'
	context.fillRect(0, 0, canvas.with, canvas.height)
}

	


	
	window.requestAnimationFrame(draw);
}
function game_pause() {
	pause = !paused;
}

pipeBottom.onload = draw;
// cvs.width = 256
// cvs.height = 512

// let xPos = 10
// let yPos = 150
// let gravity = 0.2
// let veIY = 0

// let pipe = []
// pipe[0] = {
	
// 	x: canvas.width,
// 	y: 0
// }
// let gap = 110

// function draw() {
// 	context.drawImage(back, 0, 0)
// 	context.drawImage(bird, xPos, yPos)
// 	context.drawImage(road, -1, 400)

// 	context.drawImage(pipeBottom,200, 150)
// 	context.drawImage(pipeUp, 30, 100)


	
	
// 	if(yPos >= canvas.height){
// 		location.reload()
// 	}

// 	veIY += gravity;
// 	yPos += veIY;

// }

// context.drawImage(road, 0, cvs.height - road.height)



// function moveUp() {
// 	veIY = -4
// 	// fly_audio play()
// }

// function reload() {
//  xPos = 10
//  yPos = 150
//  gravity = 0.2
//  veIY = 0

//  pipe = []
// pipe[0] = {
	
// 	x: canvas.width,
// 	y: 0
// }
// score = 0
// }

// cvs.addEventListener('mousedown', moveUp())

// setInterval(draw, 20)

