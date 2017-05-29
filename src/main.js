"use strict";

function testVar() {
	var a = 30;
	if (true) {
		var a = 50;
		console.log(a);
	}
	console.log(a);
}

function uppercase(word){
	return word.toUpperCase();
}

let wel = "welcome";

let template = `<h1>${uppercase("Hello World")}, ${wel}</h1>
								<p>My first paragraph</p>`;

document.getElementById("demo").innerHTML = template;

let theString = "Hello! My name is Rupali and I love Javascript";

//console.log(theString.startsWith("Hello"));
//console.log(theString.endsWith("Javascrip"));
//console.log(theString.includes("Rupali"));

function greet($greeting = "Hello World"){
	console.log($greeting);
}

greet();


let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
	console.log(args1 + "," + args2);
}

//test.apply(null, args);

test(...args1,...args2);
