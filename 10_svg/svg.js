// Raymond Wu
// SoftDev2 pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-13

var clearButton = document.getElementById("clearButton");
var pic = document.getElementById("vimage");

clearButton.addEventListener("click", function(e) {
    // less "hacky" method
    while (pic.lastChild)
        pic.removeChild(pic.lastChild);
    lastCircleX = undefined;
    lastCircleY = undefined;
});

var drawCircle = (x, y) => {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "purple");
    c.setAttribute("stroke", "black");
    
    c.addEventListener("click", function(e) {
        e.stopPropagation(); // "prevents further propagation of the current event" -MDN (just do this)
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


