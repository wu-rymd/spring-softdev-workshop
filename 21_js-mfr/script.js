// Raymond Wu
// SoftDev2 pd7
// K21 -- Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
// 2019-04-29

// console.log(json) //from 2006_-_2012_School_Demographics_and_Accountability_Snapshot.js

//filter json to show only data from 2010-2011 school year
var thisYearOnly = json.filter( function(n) {return n['schoolyear'] == 20102011} );
// console.log(thisYearOnly);

////////////////////////////////////////////////////////////


console.log('get list of schools where total_enrollment > 2500 in 2010-2011');

var over2500 = thisYearOnly.filter( function(n) {return n['total_enrollment'] > 2500} );
console.log(over2500);


////////////////////////////////////////////////////////////


console.log('get list of [name, total enrollment] where total_enrollment > 2500 in 2010-2011');

var over2500_names = over2500.map( function(n) {return [n['Name'], n['total_enrollment']]} );
console.log(over2500_names);


////////////////////////////////////////////////////////////


console.log('get total number of students in NYCDOE system for 2010-2011 school year');

var listOfEnrollments = thisYearOnly.map( function(n) {return n['total_enrollment']} );
// console.log(listOfEnrollments);
var totalStudents = listOfEnrollments.reduce( function(a,b) {return a+b} );
console.log(totalStudents);


////////////////////////////////////////////////////////////


console.log('get list of schools where asian_per > 70 during 2010-2011 school year');

var asianDomination = thisYearOnly.filter( function(n) {return n['asian_per'] > 70} );
console.log(asianDomination);


////////////////////////////////////////////////////////////



console.log('get list [name, asian %] where asian_per > 70 during 2010-2011 school year');

var asianDomination_names = asianDomination.map( function(n) {return [n['Name'], n['asian_per']]} );
console.log(asianDomination_names);

