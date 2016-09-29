/*
 * First-class functions
 */

// a 'traditional' style function
function foo() {
    console.log('function');
}

// anonymous functions -- we can assign them to a variable
var bar = function() { console.log('anonymous function') };
var times2 = function(x) { return x * 2; };

var a = [1,2,3];

// we can then pass then as arguments to other functions
a.map(times2);
a.map(function(x) { return x * 3});

// we can declare an anonymous function and immediately execute it
(function() { console.log('self calling anonymous function'); })();

/*
 * Prototypes
 */

// Javascript uses prototype style objects. Think of them as a series of lookup tables
// this object has two fields, and inherits other fields and methods from the Object object
var simpleObj = { x: 2, y: 2 };

simpleObj.toString();

// we can declare a prototype object in this style
// the this keyword refers to its local scope
function Baz() {
    this.x = 5;
    this.y = 2;
};

// outside of a closure, this refers to the global scope
x = 100;
console.log(x)

// we add methods to the object by adding them to the prototype 
Baz.prototype.stateXAndY = function() {
    console.log("x is " + this.x + " and y is " + this.y);
}

// we create an instance of the Baz object by using the new keyword
// new binds the scope within the object to this
var b = new Baz();

// the Baz object inherits from Object
b.toString();

// we can override by adding our own toString field
Baz.prototype.toString = function() { return "i am a baz"; };

var b2 = new Baz();
b2.toString();

/*
 * Call chaining
 */

function Circle() {
    this.x;
    this.y;
    this.color;
}

// by returning this, we can call the objects methods in a chain
Circle.prototype.setX = function(num) {
    this.x = num;
    return this;
}
Circle.prototype.setY = function(num) {
    this.y = num;
    return this;
}
Circle.prototype.setColor = function(hex) {
    this.color = hex;
    return this;
}

// this is compact and readable
var c = new Circle().setX(5).setY(2).setColor("#000000");