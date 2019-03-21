// Raymond Wu
// SoftDev pd7
// K14 -- Learning to Swim
// 2019-03-20

// don't have access to DOM elements to https://bost.ocks.org/mike/selection/
// unless I download the html file...

// will write code I tried in JS console and comment here


var selection = d3.select("body"); // returns ONE GROUP of an array with one element
// the GROUP stands for the parent element we are searching...
// the ARRAY stands for the list of elements in each GROUP

// the first parent element is always the document element

d3.selectAll("h2");
// returns ONE GROUP of 4 elements (the h2 elements in the body element)

d3.selectAll("tr").selectAll("td");
// returns FOUR GROUPS, each of which have 4 element (td) in them
// this is because there are four <tr>s, but we are looking for the <td>s in ach one, so the <tr>s become the group (b/c they are the parent elements) of the <td>s


// .select() preserves the existing grouping, which means any methods called on the elements returned by .select() affects those elements directly. The scope of the currently-looked-at elements is the "last" parent node discovered.

// .selectAll() does not preserve the existing grouping, which means methods called on the elements returned by .selectAll() does not affect those elements. The scope of the currently-looked-at elements is not the "last" parent node discovered.


d3.selectAll("section").select("aside");
//returns ONE GROUP of an array of 4 elements: null, null, <aside>, <aside>
// this is because in the current parent element (the DOCUMENT), there are four SECTIONS (not shown b/c .selectAll does not preserve the existing grouping), but in the first two SECTIONS, there is no <aside> child. This is represented by the null element in the returned array.

//Each element has a property __data__
d3.select("body").datum(42) // assigns data value to one element
d3.select("body").datum(42).append("h1") //the <h1> now also has the data value 42 because children inherit data from its parent element


d3.selectAll("section").select("aside").data(42)
// assigns data value to all asides (MULTIPLE elements)
// d3 automatically skips over null elements
