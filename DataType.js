//using of toString and parseInt
var num = 20;
console.log(typeof(num));
num = toString(num);
console.log(typeof(num));
num = parseInt(num);
console.log(typeof(num));

// using of parseFloat 
var variable2 = 20.5678;
console.log(typeof(variable2));
variable2 = toString(variable2);
console.log(typeof(variable2));
variable2 = parseFloat(variable2);
console.log(typeof(variable2));

// Set precision and set length
var temp = 2.5678
console.log(temp.toFixed(2));
console.log(temp.toPrecision(2));

// converting string to number
console.log(Number("3.1416"));
console.log(typeof(Number("3.1416")));