var myVar = 5 + 10;
console.log(myVar);

var myName = "Lauren George";
console.log("Hello, " + myName);

var numbers = [47, 22, 48, 22, 13, 85, 33, 19, 24, 36];
var smallestNumber = numbers[0];
for (var i = 1; i < numbers.length; i = i +1 ) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }
}
console.log(smallestNumber);