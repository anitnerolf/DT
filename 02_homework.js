// Detyra1
// let number = prompt("Write a three digit number: ");

// let first = parseInt(number / 100);
// let second = parseInt((number % 100) / 10);
// let third = number % 10;

// let identicalDigits = null;
// let maxIdenticalDigits = 3;

// (first == second) ? identicalDigits++ : maxIdenticalDigits--;
// (first == third) ? identicalDigits++ : maxIdenticalDigits--;
// maxIdenticalDigits == 1 ? (identicalDigits = 0) : identicalDigits = maxIdenticalDigits;
// console.log(`Number ${number} has ${identicalDigits} identical digits.`);



//Detyra2

// let number = prompt("Write a five digit number: ");

// let first = parseInt(number / 10000);
// let second = parseInt((number % 10000) / 1000);
// let fourth = parseInt((number % 100) / 10);
// let fifth = number % 10;

// let result = (first == fifth && second == fourth) ? "is palindrome" : "is not palindrome";

// console.log(`${number} ${result}.`);


//Detyra3

// let usdValue = prompt("Write USD value: ");
// let currency = prompt("Choose currency: ");

// let result = (currency == "EUR") ? (parseFloat(usdValue) * 0.84)
//              :(currency == "SEK") ? (parseFloat(usdValue) * 8.49)
//              :(currency == "AUD") ? (parseFloat(usdValue) * 1.29)
//              : 0.0;


// console.log(`${usdValue} USD are equal to ${result} ${currency}`);



//Detyra4

// let circumferenceLength = parseFloat(prompt("Write a length of a circumference: "));
// let perimeterOfSquare = prompt("Write perimeter of a square: ");

// const PI = parseFloat(3.14159265359);
// let twopi = parseFloat(2) * PI;
// let radius = parseInt(circumferenceLength / twopi);
// let lengthOfSquare = Math.sqrt(perimeterOfSquare);
// let result = (parseFloat(lengthOfSquare) == parseFloat(2.0 * radius)) ? "circumference can fit in that square" : "circumference can't fit in that square";

// console.log(result);


//Detyra5

let day = null;
let month = null;
let year = null;
day = parseInt(prompt("dd:"));
month = parseInt(prompt("mm:"));
year = parseInt(prompt("yy"));

let nextDay = (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) ? 1
         :(day == 28 && (month == 2) && (year % 4 == 0)) ? 29
         :(day == 28 && (month == 2) && (year % 4 != 0)) ? 1
         :(day == 29 && (month == 2)) ? 1
         :(day == 31) ? 1
         : day + parseInt(1);

let nextMonth = (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) ? month + parseInt(1)
                :(day == 28 && (month == 2) && (year % 4 == 0)) ? month
                :(day == 28 && (month == 2) && (year % 4 != 0)) ? month + parseInt(1)
                :(day == 29 && (month == 2)) ? month + parseInt(1)
                :(day == 31 && month == 12) ? parseInt(1)
                :(day == 31 && month != 12) ? month + parseInt(1)
                : month;
       
let nextYear = (month == 12 && day == 31) ? year + parseInt(1) : year;

console.log(`Tomorrow's date is: ${nextDay}:${nextMonth}:${nextYear}`);
