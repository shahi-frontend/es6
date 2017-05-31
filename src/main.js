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

let myArray = [11, 22, 34, 46, 53];
let mySet = new Set(myArray);

mySet.add("100");
mySet.add({a:1, b:2});
mySet.delete(22);
// mySet.clear();
mySet.add("100");

// console.log(mySet);
console.log(mySet.size);

mySet.forEach(function(val){
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


let carWeakMap = new WeakMap();


let key1 = {
	id: 1
}
let car1 = {
	make: "Honda",
	model: "Civic"
}

let key2 = {
	id: 2
}
let car2 = {
	make: "Toyato",
	model: "Camrey"
}
carWeakMap.set(key1, car1);
console.log(carWeakMap);
