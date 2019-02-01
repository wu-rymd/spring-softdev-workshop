// team GreatBob (Raymond Wu, Jerry Ye)
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-02-01

/**
   ("e")    https://developer.mozilla.org/en-US/docs/Web/API/Event
   ("ctx")  https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

   e.preventDefault()
       Calling during any stage of event flow 
       CANCELS THE EVENT
           Any default action normally taken by implementation 
           as a result of the event WILL NOT OCCUR

   ctx.beginPath()
      Starts a new path from the "origin" of the shape being drawn
      THINK "Pen down"

   e.offsetX
      Provides the offset in the X coordinate 
      of the mouse pointer between that MouseEvent 
      and the PADDING EDGE of the target node

   e.offsetY
      Provides the offset in the Y coordinate
      of the mouse pointer between that MouseEvent
      and the PADDING EDGE of the target node
 */

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

var clearButton = document.getElementById("clearButton");

// clear canvas on button click
clearButton.addEventListener( "click" , function() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    console.log("canvas cleared");

    // Note: Be aware that clearRect() may cause unintended side effects if you're not using paths properly.
    // Make sure to call beginPath() before starting to draw new items after calling clearRect().
    // Source: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
});

var toggleSwitch = document.getElementById("toggleSwitch");
var mode = "rectangle";

// toggle switch and switch draw modes
toggleSwitch.addEventListener( "click" , function() {

    // if currently draw rectangle mode, switch to draw dot mode
    if (toggleSwitch.innerHTML == "Switch to draw-a-dot mode" ) {
        toggleSwitch.innerHTML = "Switch to draw-a-rectangle mode";
        mode = "dot";
    }
    // if currently draw dot mode, switch to draw rectangle mode
    else {
        toggleSwitch.innerHTML = "Switch to draw-a-dot mode";
        mode = "rectangle";
    }

    console.log("current mode: " + mode);
});

// draw rectangle or dot based on mode as stored in state var
canvas.addEventListener( "click" , function(e) {
    e.preventDefault(); // won't register a "click" 
    
    // draw rectangle if rectangle mode
    if (mode == "rectangle") {
        ctx.beginPath(); // "put down pen"
        ctx.fillRect( e.offsetX, e.offsetY, 100, 100 ); // x, y, width, height
        // ctx.closePath(); // "pick up pen"
    }
    // draw dot if dot mode
    else {
        ctx.beginPath(); // "put pen down"
        ctx.ellipse( e.offsetX, e.offsetY, 50, 50, 0, 0, 2 * Math.PI ); // x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]
        ctx.fill();
        // ctx.closePath(); // "pick up pen"
    }
    
});
