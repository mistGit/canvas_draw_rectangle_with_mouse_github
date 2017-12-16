var canvas = document.getElementById('viewport');
var ctx = canvas.getContext('2d');
var coords = {};
canvas.height = canvas.scrollHeight; // prevents the stretching of image drawn on the canvas caused by resizing it using css styles
canvas.width = canvas.scrollWidth;

function getCoords(event){

	var boundbox = canvas.getBoundingClientRect(); // used for extracting the location of the canvas
	var x = event.clientX - boundbox.x;
	var y = event.clientY - boundbox.y;

	if(x > canvas.width){x = canvas.width}; // prevents drawing outside of the canvas
	if(x < 0){x = 0};

	if(y > canvas.height){y = canvas.height};
	if(y < 0){y = 0};

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

	document.addEventListener('mouseup', stopDraw);
};

function stopDraw(event){
	getCoords(event);
	console.log('Position 2: x: '+ coords.x + ' y: ' + coords.y);
	coords.x2 = coords.x; // stores the value x of the second click location
	coords.y2 = coords.y; // stores the value y of the second click location

	drawRect(coords);

	document.removeEventListener('mouseup', stopDraw);	
};


canvas.addEventListener('mousedown', startDraw);

document.addEventListener('mousemove', function(event){getCoords(event);});