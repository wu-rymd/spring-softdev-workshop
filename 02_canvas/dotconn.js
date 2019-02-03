// team GreatBob (Raymond Wu, Jerry Ye)
// SoftDev2 pd7
// K02 -- Connecting the Dots
// 2019-02-04


var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var clearButton = document.getElementById("clear");

// clear canvas on button click
clearButton.addEventListener( "click" , function() {

    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    console.log("canvas cleared");

    previousX = previousY = undefined; //reset prev center coordinates
});

var previousX; // store center coordinates of prev ellipse
var previousY;

// draw dot upon click on canvas
canvas.addEventListener( "click" , function(e) {
    
    e.preventDefault(); // won't register a "click"

    ctx.beginPath(); // start ellipse path
    ctx.ellipse( e.offsetX, e.offsetY, 25, 25, 0, 0, 2 * Math.PI );
    // x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]
    ctx.strokeStyle = "#0000ff"; // blue
    ctx.stroke();

    if (previousX != undefined) { // if not first circle
        ctx.beginPath(); // start line path
        ctx.moveTo(e.offsetX, e.offsetY); // move to center of circle
        ctx.lineTo( previousX, previousY ); // draw line to prev center
        ctx.strokeStyle = "#ff0000"; // red
        ctx.stroke();
    }
    
    previousX = e.offsetX; // update prev center coordinates
    previousY = e.offsetY;

});

