var canvas = document.getElementById('viewport');
var ctx = canvas.getContext('2d');
var coords = {};
canvas.height = canvas.scrollHeight; // prevents the stretching of image drawn on the canvas caused by resizing it using css styles
canvas.width = canvas.scrollWidth;

function getCoords(event){

	var boundbox = canvas.getBoundingClientRect(); // used for extracting the location of the canvas
	var x = event.clientX - boundbox.x;
	var y = event.clientY - boundbox.y;

	if(x > canvas.width){
		x = canvas.width
	}; // prevents drawing outside of the canvas
	if(x < 0){
		x = 0
	};

	if(y > canvas.height){
		y = canvas.height
	};
	if(y < 0){
		y = 0
	};

	coords.x = x; // sends the coordinates to external object(global variable)
	coords.y = y;
};

function drawRect(coords){
	width = coords.x2 - coords.x1; 
	height = coords.y2 - coords.y1;
	ctx.rect(coords.x1,coords.y1,width,height); // draws the rectangle
	ctx.stroke();
};

function startDraw(event){
	getCoords(event); 
	console.log('Position 1: x: '+ coords.x + ' y: ' + coords.y);
	coords.x1 = coords.x; // stores the value x of the first click location
	coords.y1 = coords.y; // stores the value y of the first click location
	document.addEventListener('mousemove', getCoords);
	document.addEventListener('mouseup', stopDraw);
};

function stopDraw(event){
	getCoords(event);
	console.log('Position 2: x: '+ coords.x + ' y: ' + coords.y);
	coords.x2 = coords.x; // stores the value x of the second click location
	coords.y2 = coords.y; // stores the value y of the second click location

	drawRect(coords);

<<<<<<< HEAD
	document.removeEventListener('mousemove', getCoords);
	document.removeEventListener('mouseup', stopDraw);	// prevents registering clicks outside of the canvas
=======
	document.removeEventListener('mouseup', stopDraw); // prevents registering clicks outside of the canvas	
>>>>>>> 57a7930319e03de7b49737b8b4eb16b0a658c5dd
};


canvas.addEventListener('mousedown', startDraw);

<<<<<<< HEAD
=======
document.addEventListener('mousemove', function(event){getCoords(event);});
>>>>>>> 57a7930319e03de7b49737b8b4eb16b0a658c5dd
