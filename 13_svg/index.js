// Raymond Wu
// SoftDev2 pd7
// K13 -- Diving Deeper Into D3
// 2019-03-19

/*

// Bar graph data
var data = [4, 8, 15, 16, 23, 42];
// Select chart
var chart = d3.select(".chart");
// Select the <div>s in the chart / "declaring the elements you want to exist" (bost.ocks.org)
var bar = chart.selectAll("div"); // NodeList of length 0 ... bc no bars!!
// Create an element (in .chart) for each data point in data, prepare to set element's __data__ attribute to data value
var barUpdate = bar.data(data);
// ENTER/add the data to the elements, then APPEND to .chart as <div>s
var barEnter = barUpdate.enter().append("div"); // Array of 6 <div>s
// Set width of each bar proportional to data value
barEnter.style("width", function(OtherWeirdArg) { return OtherWeirdArg * 10 + "px"; });
// Add labels
barEnter.text( function(myWeirdArgThatReflectsData) { return myWeirdArgThatReflectsData; } );

*/
/*

var data = [4, 8, 15, 16, 23, 42];

var scale = d3.scaleLinear()
    .domain( [0, d3.max(data)] )
    .range( [0, 1000] );

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return scale(d) + "px"; })
    .text( function(d) { return d; });

*/

// barEnter contains array of 6 <div>s as created
// .style() and .text() will apply to all <div>s
// can input function as arg of .style() and .text()
//    function arg can have arg that reflects __data__


//////////////////////////////////////////////////

var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

// scaling
var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

// set height and width for chart
var chart = d3.selectAll(".chart1")
    .attr("width", width)
    .attr("height", barHeight * data.length);

// make <g>, move down to appropriate spot in order
var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) {
        return "translate(0," + i * barHeight + ")"; }); // move down

// make <rect>, leave 1px margin between bars
bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

// make labels
bar.append("text")
    .attr("fill", "white") // easier to see
    .attr("x", function(d) { return x(d)-20; })
    .attr("y", barHeight/2) // center to midline of bar
    .attr("dy", ".35em")
    .text(function(d) { return d; });

// can input function as arg of .style() and .text()
//    function arg can have args:
//       1st arg "d" --> data
//       2nd arg "i" --> index [0...]
//       3rd arg ??? --> ????? [object SVGTextElement], * num elements in string
