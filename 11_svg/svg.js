// Raymond Wu
// SoftDev2 pd7
// K11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-15

var pic = document.getElementById("vimage");
var clearButton = document.getElementById("clearButton");
var moveButton = document.getElementById("moveButton");
var stopButton = document.getElementById("stopButton");
var reverseButton = document.getElementById("reverseButton");

var requestID;
var machineOn = false;

var drawCircle = (x, y) => {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke", "black");

    c.setAttribute("xVel", 1);
    c.setAttribute("yVel", 1);
    
    c.addEventListener("click", function(e) {
        e.stopPropagation();
        if (c.getAttribute("fill") == "purple")
            c.setAttribute("fill", "gold");
        else {
            pic.removeChild(c);
            drawCircle(Math.random()*500, Math.random()*500);
        }
    });
    
    pic.appendChild(c);
}

pic.addEventListener("click", function(e) {
    drawCircle(e.offsetX, e.offsetY);
});

var moveCircles = () => {
    var circles = document.getElementsByTagName("circle");
    for (var i = 0; i < circles.length; i++) {
        var cx = parseInt( circles[i].getAttribute("cx") );
        var cy = parseInt( circles[i].getAttribute("cy") );
        var xVel = parseInt( circles[i].getAttribute("xVel") );
        var yVel = parseInt( circles[i].getAttribute("yVel") );

        if (cx-20 <= 0 || cx+20 >= 500)
            circles[i].setAttribute("xVel", xVel*=-1);
        if (cy-20 <= 0 || cy+20 >= 500)
            circles[i].setAttribute("yVel", yVel*=-1);

        circles[i].setAttribute("cx", cx+xVel);
        circles[i].setAttribute("cy", cy+yVel);
    }
    
    requestID = window.requestAnimationFrame( moveCircles );
}

var stop = (e) => {
    if (!machineOn) {
        e.preventDefault();
    }
    else {
    window.cancelAnimationFrame( requestID );
        machineOn = false;
    }
}

moveButton.addEventListener("click", function(e) {
    if (machineOn) {
        e.preventDefault();
    }
    else {
        requestID = window.requestAnimationFrame( moveCircles );
        machineOn = true;
    }
});

clearButton.addEventListener("click", function(e) {
    stop(e);
    pic.innerHTML = "";
});

stopButton.addEventListener("click", stop);

var mirror = (e) => {
    var circles = document.getElementsByTagName("circle");
    for (var i = 0; i < circles.length; i++) {
        var cx = parseInt( circles[i].getAttribute("cx") );
        var cy = parseInt( circles[i].getAttribute("cy") );
        var xVel = parseInt( circles[i].getAttribute("xVel") );
        var yVel = parseInt( circles[i].getAttribute("yVel") );

        circles[i].setAttribute("cx", 500-cx);
        circles[i].setAttribute("cy", 500-cy);
        
        circles[i].setAttribute("xVel", xVel*=-1);
        circles[i].setAttribute("yVel", yVel*=-1);

    }
}

mirrorButton.addEventListener("click", function(e) {
    mirror(e)
});
