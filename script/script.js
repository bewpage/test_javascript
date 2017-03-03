// zadanie 3
console.log("zadanie 3");
var n = "lubie javascript";
var empty = "";

for (var i = 0; i <10; i++) {
	console.log(empty);
	console.log(n);

};

// zadanie 4
console.log("zadanie 4");
var result = 0;

for (var i = 0; i <= 10; i++) {
	result += i;
};
console.log(result);

// zadanie 5
console.log("zadanie 5");

var n = 10;
var result = 0;

for (var i = 0; i <= n; i++) {
	result = i;
	if (i%2 === 0) {
		console.log(result + " - parzysta");
	} else {
		console.log(result + " - nieparzysta");
	}
};

// zadanie 6
console.log("zadanie 6");

var n = 3;

for (var i = 0; i <= n; i++) {
	for (var j = 0; j <= n ; j++) {
		console.log ("i= " + i + " j= " + j);
	}
};

// zadanie 7
console.log("zadanie 7");

var n = 5;
var stars = "";

for (var i = 0; i < n; i++) {
	stars = "";
	for (var j = 0; j < n; j++) {
		stars += "*";
	}
	console.log("");
	console.log(stars);
};


// zadanie 8
console.log("zadanie 8");

var numberOfRepeat = 1
var numberOfElements = 8;
var stars = "";

for (var i = 0; i < numberOfRepeat; i++) {
	stars = "";
	for (var j = 0; j < numberOfElements; j++) {
		stars += "*";
		console.log("");
		console.log(stars);
	}
	
};


// zadanie 9
console.log("zadanie 9");

var n = 5;
var pattern = "";

for(var i=0; i<n; i++) {
	pattern = "";

	for(var j=0; j<n; j++) {
		if(j<=i) {
			pattern += "*";
		} else {
			pattern += (j+1);
		}
	}
	console.log(pattern);
};

for(var i=n-1; i>0; i--) {
	pattern = "";

	for(var j=0; j<n; j++) {
		if (j <=i) {
			pattern += "*";
		} else {
			pattern += (j+1);
		}
	}
	console.log(pattern);
};



