// Team RayJay (Jeffrey Wu, Raymond Wu)
// SoftDev2 pd7
// K03 -- They lock us in the tower whenever we get caught ...which is often
// 2019-02-06

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var startButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');

var radius = 0;
var growing = true;

var requestID;

var machineOn = false; // so that pressing startButton again doesn't double frame rate

// helper function for drawEllipse function
var clear = () => {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ctx.beginPath(); // reset path on canvas
    console.log("canvas cleared");
}

// helper function for drawFrame function
var drawEllipse = (radius) => {
    clear(); // clear canvas

    console.log("drawing ellipse w/ radius " + radius);
    
    ctx.beginPath(); // start ellipse path
    
    ctx.ellipse( 250, 250, radius, radius, 0, 0, 2 * Math.PI );
    // x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]
    
    ctx.strokeStyle = "#0000ff"; // blue
    ctx.stroke();
};

// draw each frame of canvas
var drawFrame = (timestamp) => {
    console.log("--------------------");
    console.log("drawing frame w/ requestID " + requestID);

    drawEllipse(radius); // draw ellipse with current radius (state var)
    
    if (growing)  // update radius based on growing or shrinking (state var)
        radius += 2;
    else
        radius -= 2;
    
    if (radius <= 0 || radius >= 250)  // if at bounds, switch grow/shrink states
        growing = !growing;

    requestID = window.requestAnimationFrame( drawFrame ); // do it, then bind to state var
}

// clicking startButton when machine off starts the machine
startButton.addEventListener( "click", function(e) {
    
    if (machineOn) {
        e.preventDefault() // do not register click if already running
        console.log( "--> MACHINE ALREADY ON!" );
    }
    
    else { // start if machine off
        machineOn = true;
        requestID = window.requestAnimationFrame( drawFrame );
    }
});

// clicking stopButton when machine on stops the machine
stopButton.addEventListener( "click", function(e) {

    if (!machineOn) {
        e.preventDefault() // do not register click if not running
        console.log( "--> MACHINE ALREADY OFF!" );
    }

    else { // stop if machine on
        machineOn = false;
        window.cancelAnimationFrame( requestID ); // stop animation using current request ID
        console.log( "--> STOP ANIMATION @ REQUEST ID " + requestID );
    }
});
