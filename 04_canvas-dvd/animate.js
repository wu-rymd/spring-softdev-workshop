// Team RayJay (Jeffrey Wu, Raymond Wu)
// SoftDev2 pd7
// K04 -- What is it saving the screen from?
// 2019-02-07

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var circleButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var dvdButton = document.getElementById('dvd');

var radius = 0;
var growing = true;

var requestID; // state var to keep track of last animation ID

var machine = "off"; // so that pressing button again doesn't double frame rate
// ['off', 'circle', 'dvd']

// helper function for drawEllipse function
var clear = () => {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ctx.beginPath(); // reset path on canvas
    console.log("canvas cleared");
}

// helper function for drawFrameCircle function
var drawEllipse = (radius) => {
    clear(); // clear canvas
    console.log("drawing ellipse w/ radius " + radius);
    
    ctx.beginPath(); // start ellipse path
    
    ctx.ellipse( 250, 250, radius, radius, 0, 0, 2 * Math.PI );
    // x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]
    
    ctx.strokeStyle = "#0000ff"; // blue
    ctx.stroke();
};

// draw each frame of canvas for circle
var drawFrameCircle = (timestamp) => {
    console.log("--------------------");
    console.log("drawing frame w/ requestID " + requestID);

    drawEllipse(radius); // draw ellipse with current radius (state var)
    
    if (growing)  // update radius based on growing or shrinking (state var)
        radius += 2;
    else
        radius -= 2;
    
    if (radius <= 0 || radius >= 250)  // if at bounds, switch grow/shrink states
        growing = !growing;

    requestID = window.requestAnimationFrame( drawFrameCircle ); // do it, then bind to state var
}

var setupDVD = () => {

    var rectWidth = 100;
    var rectHeight = 50;
    
    var xCoordinate = Math.floor( Math.random() * (canvas.width-rectWidth) );
    var yCoordinate = Math.floor( Math.random() * (canvas.height-rectHeight) );
    
    var xVel = 1;
    var yVel = 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    
    var drawFrameDVD = () => {

        clear();

        console.log("--------------------");
        console.log("drawing frame w/ requestID " + requestID);

        xCoordinate -= xVel;
        yCoordinate -= yVel;

        // if hit left or right borders
        if (xCoordinate <= 0 || xCoordinate+rectWidth >= canvas.width)
            xVel *= -1;
        // if hit upper or lower borders
        if (yCoordinate <= 0 || yCoordinate+rectHeight >= canvas.height)
            yVel *= -1;
        
        ctx.drawImage( logo, xCoordinate , yCoordinate , rectWidth , rectHeight ) ;
        // uses width and height from rectangle
        
        requestID = window.requestAnimationFrame( drawFrameDVD ); // do it, then bind to state var
        
    }// end of inner fxn

    drawFrameDVD();

}

var stopAnimation = (e) => {
    if (machine == "off") { // do not register click if not running
        e.preventDefault();
        console.log( "--> MACHINE ALREADY OFF!" );
    }

    else { // stop if machine on
        machine = "off";
        window.cancelAnimationFrame( requestID ); // stop animation using current request ID
        console.log( "--> STOP ANIMATION @ REQUEST ID " + requestID );
    }
}

// clicking circleButton when machine off starts the machine
circleButton.addEventListener( "click", function(e) {
    
    if (machine == "circle") {
        e.preventDefault(); // do not register click if already running
        console.log( "--> MACHINE ALREADY ON!" );
    }
    
    else { // switch if not already circle
        stopAnimation(e); // stop prev animation
        machine = "circle";
        requestID = window.requestAnimationFrame( drawFrameCircle );
    }
});

dvdButton.addEventListener( "click", function(e) {

    stopAnimation(e); // stop prev animation
    machine = "dvd";
    setupDVD();

});

// clicking stopButton when machine on stops the machine
stopButton.addEventListener( "click", stopAnimation );
