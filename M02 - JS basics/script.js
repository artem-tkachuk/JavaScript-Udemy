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
































//end
