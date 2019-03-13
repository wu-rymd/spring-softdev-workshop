// Raymond Wu
// SoftDev2 pd7
// K09 -- Connect the Dots. . .
// 2019-03-12

var clearButton = document.getElementById("clearButton");
var pic = document.getElementById("vimage");

var lastCircleX;
var lastCircleY;

clearButton.addEventListener("click", function(e) {
    pic.innerHTML = "";
    lastCircleX = undefined;
    lastCircleY = undefined;
});

pic.addEventListener("click", function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);

    if (lastCircleX && lastCircleY) {
        var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
        l.setAttribute("x1", lastCircleX);
        l.setAttribute("y1", lastCircleY);
        l.setAttribute("x2", e.offsetX);
        l.setAttribute("y2", e.offsetY);
        l.setAttribute("stroke", "black");
        pic.appendChild(l);
    }

    lastCircleX = e.offsetX;
    lastCircleY = e.offsetY;
        
});
