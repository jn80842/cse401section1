/*
 * This is legal Typescript, since Typescript is a superset of Javascript.
 * Try adding type annotations to the function arguments,
 * then compile using tsc and examine the Javascript the compile outputs.
 * Uncomment the last line and try compiling again.
 */




function Circle() {
    this.x;
    this.y;
    this.color;
}

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

var c = new Circle().setX(5).setY(2).setColor("#000000");

// var bad_c = new Circle().setX(2).setY(3).setColor(2);