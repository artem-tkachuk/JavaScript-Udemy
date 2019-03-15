/***************************
*	Created by Artem Tkachuk
***************************/

/**************************
*	Variables and datatypes
**************************/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var $dollars = 100;
var johnMark = 'John and Mark';
var ifn = 23;

//console logs
console.log(ifn);
console.log(johnMark);
console.log($dollars);
*/

/**************************************
*	Variable mutation and type coercion
**************************************/

/*
var firstName = 'John';
var age = 28;

//Type coercion example
console.log(firstName + ' ' + age);	//age is automatically converted into a string


var job, isMarried;

job = 'Teacher';
isMarried = false;

//JavaScript also does type coercion with Boolean
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


//Variable mutation

var age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/******************
*	Basic operators
******************/

/*
var now, yearJohn, yearMark;

now = 2019;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);
*/


/**********************
*	Operator precedence
**********************/

/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

//Multiple assignments
var x, y;

x = y = (3 + 5) * 4 - 6; 	//8 * 4 - 6 = 32 - 6 = 26
console.log(x, y);

//More operations
x *= 2;	//x = x + 2;
console.log(x);

x += 10;
console.log(x);

x++; //x = x + 1; or x += 1;
console.log(x);

x--; //x = x - 1; or x -= 1;
console.log(x);

*/


/*********************
*	Coding challenge 1
*********************/

/*
var massMark, massJohn, heigtMark, heightJohn, BMIMark, BMIJohn;

//Mark
massMark = 78;		//kg
heightMark = 1.69;	//meters

//John
massJohn = 92;		//kg
heightJohn = 1.95;	//meters

BMIMark = massMark / (Math.pow(heightMark, 2));
BMIJohn = massJohn / (Math.pow(heightJohn, 2));

console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

*/

/*********************
* If / Else statements
*********************/

/*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {

	console.log(firstName + ' is married!');

} else {

	console.log(firstName + ' will hopefully marry soon :)');

}


var isMarried = true;

if (isMarried) {

	console.log(firstName + ' is married');

} else {

	console.log(firstName + ' will hopefully marry soon :)');

}


var massMark, massJohn, heigtMark, heightJohn, BMIMark, BMIJohn;

//Mark
massMark = 78;		//kg
heightMark = 1.69;	//meters

//John
massJohn = 192;		//kg
heightJohn = 1.95;	//meters

BMIMark = massMark / (Math.pow(heightMark, 2));
BMIJohn = massJohn / (Math.pow(heightJohn, 2));

if (BMIMark > BMIJohn) {

	console.log('Mark\'s BMI is higher than Johns\'s.');

} else {

	console.log('John\'s BMI is higher than Mark\'s.');

}

//console.log(BMIMark, BMIJohn);

//var markHigherBMI = BMIMark > BMIJohn;

//console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

*/


/****************
*	Boolean logic
****************/

/*

var firstName = 'John';
var age = 20;

console.log(firstName + ' is a ...  (барабанная дробь  :)) )');

if (age < 13) {

	console.log('boy');

} else if ( (age >= 13) && (age < 20) ) {		//age >= 13 AND age <= 20

	console.log('teenager');

} else if ( (age >= 20) && (age < 30) ) {

	console.log('young man');

} else {

	console.log('man');

}

*/

/************************
*	The Ternary Operator and Switch statement
*************************/
/*
var firstName = 'John';
var age = 10;

//Ternary operators
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');


var drink = (age >= 18 ? 'beer' : 'juice');

/* The same as above

if (age >= 18) {

	var drink = 'beer';

} else {

	var drink = 'juice';

}
*/

/*
//Switch operators
var job = 'instructor';

switch (job) {

	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code');
		break;

	case 'driver':
		console.log(firstName + ' drives an uber in Lisbon');
		break;

	case 'designer':
		console.log(firstName + ' designs beautiful websites');
		break;

	default:
		console.log(firstName + ' does something else');

}

age = 56;

switch (true) {

	case (age < 13):
		console.log(firstName + ' is a boy');
		break;

	case (age >= 13 && age < 20):
		console.log(firstName + ' is a teenager');
		break;

	case (age >= 20 && age <= 30):
		console.log(firstName + ' is a young man');
		break;

	default:
		console.log(firstName + ' is a man');


}
*/
/************************************************
*	Truth and Falsy values and equality operators
************************************************/

/*
//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values
var height = 27;

if (height || height === 0) {		//checks if whether variable exists and if it's 0

	console.log('Variable is defined');

} else {

	console.log('Variable is NOT defined');

}

//Equality operators
if (height === '27') {

	console.log('The == operator does type coercion');	//not executed because no type coercion

}
*/

/**********************
*	Coding Challenge 2
**********************/
/*
var john1, john2, john3, averageJohn;
var mike1, mike2, mike3, averageMike;
var mary1, mary2, mary3, averageMary;

john1 = 89;
john2 = 141;
john3 = 103;

mike1 = 116;
mike2 = 94;
mike3 = 123;

mary1 = 97;
mary2 = 130;
mary3 = 103;

averageJohn = (john1 + john2 + john3) / 3;
averageMike = (mike1 + mike2 + mike3) / 3;
averageMary = (mary1 + mary2 + mary3) / 3;

console.log(averageJohn, averageMike, averageMary);
if (averageJohn > averageMike && averageJohn > averageMary) {

	console.log('John\'s team wins. Their average score is ' + averageJohn + ' points.');

} else if (averageMike > averageJohn && averageMike > averageMary) {

	console.log('Mike\'s team wins. Their average score is ' + averageMike + ' points.');

} else if (averageMary > averageJohn && averageMary > averageMike) {

	console.log('Mary\'s team wins. Their average score is ' + averageMary + ' points.');

} else {

	console.log('Draw!');	//don't know the if Mary == John or Mary == Mike or all equal

}

*/

/************
*	Functions
************/

/*
function calculateAge(birthYear) {

	return 2019 - birthYear;

}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(2001);

console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {

	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement < 0) {

		console.log(firstName + ' is already retired!');

	} else {

		console.log(firstName + ' retires in ' + retirement + ' years.');

	}

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(2001, 'Jane');
*/

/**************************************
*	Function Statements and Expressions
**************************************/
/*
//Function declaration
// function whatDoYouDo(job, firstName) {}


//Function expression
var whatDoYouDo = function(job, firstName) {

	switch (job) {

		case 'teacher':
			return firstName + ' teaches kids how to code!';

		case 'driver':
			return firstName + ' drives a cab in Lisbon!';

		case 'designer':
			return firstName + ' designs beautiful websites!';

		default:
			return firstName + ' does something else!';

	}

}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));
*/

/**********
*	Arrays
**********/

/*
//Initialize new array
var names = ['John', 'Mark', 'Jane'];

var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);	//array length

//array elements mutation
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

//Different datatypes
var John = ['John', 'Smith', 1990, 'designer', false];
console.log(John);

//add element to the end
John.push('blue');
console.log(John);

//add element to the beginning
John.unshift('Mr.');
console.log(John);


//Remove last element
John.pop();
console.log(John);

John.pop();
console.log(John);

//Remove first element
John.shift();
console.log(John);

John.shift();
console.log(John);


//returns the position of element. If this element is not in the array, returns -1
console.log(John.indexOf('teacher'));


var isDesigner = John.indexOf('designer') == -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
*/

/*******************
*	Coding challenge
********************/
/*
var calculateTip = function(bill) {

	switch(true) {

		case (bill < 50):
			return 0.2 * bill;

		case (bill >= 50 && bill <= 200):
			return 0.15 * bill;

		case (bill > 200):
			return 0.1 * bill;

	}

}

var bills = [124, 48, 268];		//John's family restaurant bills during the holiday in $USD

//Could be done with a loop, but it's only coming... :(
var tips = [calculateTip(bills[0]),
			calculateTip(bills[1]),
			calculateTip(bills[2])];

//Same... Need to be patient :)
var finalBills = [bills[0] + tips[0],
				  bills[1] + tips[1],
				  bills[2] + tips[2]];

console.log(tips);
console.log(finalBills);
*/

/****************************
*	Objects and properties
****************************/
/*
//first way to create objects: new Object() syntax
//var jane = new Object();

//second way to create objects: object literal
var john = {

	 firstName: 'John',
	 lastName: 'Smith',
	 birthYear: 1990,
	 family: ['Jane', 'Mark', 'Bob', 'Emily'],
	 job: 'teacher',
	 isMarried: false

 };

console.log(john);

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
console.log(john);

john.isMarried = true;	//john['isMarried'] = true;
console.log(john);


var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**********************
*	Objects and methods
**********************/
/*
var john = {

	//properties
	 firstName: 'John',
	 lastName: 'Smith',
	 birthYear: 1992,
	 family: ['Jane', 'Mark', 'Bob', 'Emily'],
	 job: 'teacher',
	 isMarried: false,

	 //methods
	 calcAge: function() {

		 this.age = 2019 - this.birthYear;

	 }

 };


john.calcAge();
console.log(john);
*/

/****************************
*	Coding challenge 4
****************************/
/*
//Mark's and John's BMI

var john = {

	//properties
	firstName: 'John Smith',
	mass: 92,
	height: 1.95,

	//methods
	calculateBMI: function() {

		this.BMI = this.mass / (this.height * this.height);

		return this.BMI;

	}

};

var mike = {

	//properties
	fullName: 'Mike Smith',
	mass: 90,
	height: 1.98,

	//methods
	calculateBMI: function() {

		this.BMI = this.mass / (this.height * this.height);

		return this.BMI;

	}

};


if (john.calculateBMI() > mike.calculateBMI()) { //!!

	console.log('John has higher BMI. It is ' + john.BMI);

} else if (mike.BMI > john.BMI) {

	console.log('Mike has bigger BMI. It is ' + mike.BMI);

} else {

	console.log('John and Mike have the same BMIs. Both are ' + john.BMI);

}
*/

/************************
*	Loops and iterations
************************/
/*

//console.log(1);
//console.log(2);
//...

//for loop
for (var i = 1; i <= 41; i += 4) {

	console.log(i);

}

/*
//for loop example
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {

	console.log(john[i]);

}


//While lpp[]
var i = 0;

while (i < john.length) {

	console.log(john[i]);
	i++;

}


var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {

	if (typeof john[i] !== 'string') {
		continue;
	}

	console.log(john[i]);

}

for (var i = 0; i < john.length; i++) {

	if (typeof john[i] !== 'string') {
		break;
	}

	console.log(john[i]);

}

*/
/*
//Looping backwards
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = john.length - 1; i >= 0; i--) {

	console.log(john[i]);

}
*/


/****************************
*	Coding Challenge 5
****************************/

/*
function output(name) {

	console.log(name.fullName);

	for (var i = 0; i < name.tips.length; i++) {

		console.log('Bill: ' + name.bills[i] + ', tip: ' + name.tips[i] + ', total: ' + name.amounts[i] + '\n');

	}

	console.log('\n');

}

function average(tips) {

	var sum = 0;

	for (var i = 0; i < tips.length; i++) {

		sum += tips[i];

	}

	return sum / tips.length;

}

var john = {

	fullName: 'John Smith',

	bills: [124, 48, 268, 180, 42],			 //in $USD

	calculateTips: function() {

		this.amounts = [];
		this.tips = [];

		for (var i = 0; i < this.bills.length; i++) {

			var tip;
			var bill = this.bills[i];

			if (bill < 50) {

				tip = 0.2;

			} else if (bill >= 50 && bill <= 200) {

				tip = 0.15;

			} else {

				tip = 0.1;

			}

			this.tips.push(tip * bill);
			this.amounts.push(this.tips[i] + bill);

		}

	}

};

var mark = {

	fullName: 'Mark Stanford',

	bills: [77, 475, 110, 45],	//in $USD

	calculateTips: function() {

		this.tips = [];
		this.amounts = [];

		for (var i = 0; i < this.bills.length; i++) {

			var tip;
			var bill = this.bills[i];

			if (bill < 100) {

				tip = 0.2;

			} else if (bill >= 100 && bill <= 300) {

				tip = 0.1;

			} else {

				tip = 0.25;

			}

			this.tips.push(tip * bill);
			this.amounts.push(this.tips[i] + bill);

		}

	}

};

john.calculateTips();
mark.calculateTips();

output(john);
output(mark);

var family = average(john.tips) > average(mark.tips) ? john.fullName + '\'s' : mark.fullName + '\'s';

console.log(family + ' family paid highest tips on average.');

*/

//end
