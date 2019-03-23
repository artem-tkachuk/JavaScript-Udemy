/****************
Lecture: Hoisting
****************/
/*
//functions
calculateAge(1965);

function calculateAge(year) {
	console.log(2019 - year);
}

//calculateAge(1990);    //also works

//retirement(1965);		 //doesn't work because function expression does not work with hoisting


var retirement = function(year) {
	console.log(65 - (2019 - year));
}


retirement(1990);

*/
/*
//variables

console.log(age);	//undefined <== in the creation phase all variables are assigned to undefined

var age = 23;


function foo() {
	console.log(age);
	var age = 65;
	console.log(age);
}

foo();
console.log(age);
*/
/*
//First scoping example

var a = 'Hello!';
first();

function first() {

	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		console.log(a + b + c);
	}

}
*/
//Example to show the difference between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {

	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		third();
	}

}

function third() {
	var d = 'John';
	console.log(c);
}

*/

/************************
Lecture: The this keyword
************************/

//console.log(this);
calculateAge(1990);

function calculateAge(year) {
	console.log(2019 - year);
	console.log(this);
}


var john = {
	name: 'John',
	yearOfBirth: 1990,

	calculateAge: function() {
		console.log(this);
		console.log(2016 - this.yearOfBirth);

		function innerFunction() {
			console.log(this);
		}

		innerFunction();
	}
}

john.calculateAge();



var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
