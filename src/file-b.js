var addThings = function() {
	return 5;
};

var moreStuff = function(x) {
	return x + addThings();
};

var executeStuff = function() {
	var a = 3;
	var b = 7;
	var c = a * b;
	console.log(moreStuff(c));
};
