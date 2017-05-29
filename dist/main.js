"use strict";

function testVar() {
	var a = 30;
	if (true) {
		var a = 50;
		console.log(a);
	}
	console.log(a);
}

function uppercase(word) {
	return word.toUpperCase();
}

var wel = "welcome";

var template = "<h1>" + uppercase("Hello World") + ", " + wel + "</h1>\n\t\t\t\t\t\t\t\t<p>My first paragraph</p>";

document.getElementById("demo").innerHTML = template;

var theString = "Hello! My name is Rupali and I love Javascript";

//console.log(theString.startsWith("Hello"));
//console.log(theString.endsWith("Javascrip"));
//console.log(theString.includes("Rupali"));

function greet() {
	var $greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello World";

	console.log($greeting);
}

greet();

var args1 = [1, 2, 3];
var args2 = [4, 5, 6];

function test() {
	console.log(args1 + "," + args2);
}

//test.apply(null, args);

test.apply(undefined, args1.concat(args2));