// Raymond Wu
// SoftDev pd7
// HW15 -- Scattered
// 2019-03-21

var data = [
    [45,   10],
    [36,  537],
    [263, 419],
    [879, 357],
    [121, 658],
    [764, 932],
    [891, 375],
    [91,  324],
    [465,  61],
    [178, 354],
    [907,  69],
    [434,  76],
    [0, 0],
    [907,932],
];

var scaleX = d3.scaleLinear()
    .domain( [0, 1000] )
    .range( [0, 500] );
var scaleY = d3.scaleLinear()
    .domain( [0, 1000] )
    .range( [0, 500] );

var scatterplot = d3.select(".scatterplot");
var dot = scatterplot.selectAll("circle");
var dotUpdate = dot.data(data);
var dotEnter = dotUpdate.enter().append("circle");

dotEnter.attr("cx", function(d) {return scaleX(d[0]);} )
    .attr("cy", function(d) {return 500-scaleY(d[1]);} ) // to make 0,0 at bottom left
    .attr("r", "5");
