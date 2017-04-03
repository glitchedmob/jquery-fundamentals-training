var foo = "hello";
var sayHello1 = function() {
	console.log(foo);
}
sayHello1();
console.log(foo);


var sayHello2 = function() {
	var bar = "hello";
	console.log(bar);
}
sayHello2();
//console.log(bar);


var baz = "world"
var sayHello3 = function() {
	var baz = "hello";
	console.log(baz);
}
sayHello3();
console.log(baz);


var foobar = "world";
var sayHello4 = function(f) {
	f = "hello " + f;
	console.log(f);
}
sayHello4(foobar);
console.log(foobar);
//console.log(f);
