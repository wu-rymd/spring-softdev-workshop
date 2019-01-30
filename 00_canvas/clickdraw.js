// Raymond Wu
// SoftDev2 pd7
// K00 -- I See a Red Door...
// 2019-01-31

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

var clearButton = document.getElementById("clearButton");

// clear canvas on button click
clearButton.addEventListener( "click" , function() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    console.log("clear");

    // Note: Be aware that clearRect() may cause unintended side effects if you're not using paths properly.
    // Make sure to call beginPath() before starting to draw new items after calling clearRect().
    // Source: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
});

var toggleSwitch = document.getElementById("toggleSwitch");
var mode = "rectangle";

// toggle switch and switch draw modes
toggleSwitch.addEventListener( "click" , function() {

    if (toggleSwitch.innerHTML == "Switch to draw-a-dot mode" ) {
        toggleSwitch.innerHTML = "Switch to draw-a-rectangle mode";
        mode = "dot";
    } else {
        toggleSwitch.innerHTML = "Switch to draw-a-dot mode";
        mode = "rectangle";
    }

    console.log("current mode: " + mode);
});

// draw rectangle or dot based on mode as stored in state var
canvas.addEventListener( "click" , function(e) {
    // console.log(e);

    if (mode == "rectangle") {
        ctx.beginPath(); // see beginPath() note above
        // x, y, width, height
        ctx.fillRect( e.offsetX, e.offsetY, 100, 100 );
        ctx.closePath();
    } else {
        ctx.beginPath()
        // x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]
        ctx.ellipse( e.offsetX, e.offsetY, 50, 50, 0, 0, 2 * Math.PI );
        ctx.fill();
        ctx.closePath();
    }
});
