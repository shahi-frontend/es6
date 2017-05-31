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

var myArray = [11, 22, 34, 46, 53];
var mySet = new Set(myArray);

mySet.add("100");
mySet.add({ a: 1, b: 2 });
mySet.delete(22);
// mySet.clear();
mySet.add("100");

// console.log(mySet);
console.log(mySet.size);

mySet.forEach(function (val) {
	console.log(val);
});

// let myMap = new Map([['a1', 'Hello'], ['b2', 'GoodBye']]);
//
// myMap.set('c1', 'Foo');
// myMap.delete('a1');
// console.log(myMap.size);

// let carWeakSet = new WeakSet();
//
// let car1 = {
// 	make: "Honda",
// 	model: "Civic"
// }
// carWeakSet.add(car1);
//
// let car2 = {
// 	make: "Toyato",
// 	model: "Camrey"
// }
// carWeakSet.add(car2);
// carWeakSet.delete(car1);
// console.log(carWeakSet);


var carWeakMap = new WeakMap();

var key1 = {
	id: 1
};
var car1 = {
	make: "Honda",
	model: "Civic"
};

var key2 = {
	id: 2
};
var car2 = {
	make: "Toyato",
	model: "Camrey"
};
carWeakMap.set(key1, car1);
console.log(carWeakMap);