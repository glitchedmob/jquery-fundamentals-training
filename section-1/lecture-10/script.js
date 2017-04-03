var myObject1 = {
	sayHello: function() {
		alert("Hello");
	},
	myName: "Rebecca"
}

var myObject2 = {
	sayHello: function() {
		alert("Hi, my name is " + this.myName);
	},
	myName: "Brian"
}

var myArray = [myObject1, myObject2];

for (var i = 0; i < myArray.length; i++) {
	myArray[i].sayHello();
}
