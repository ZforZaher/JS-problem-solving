//1. Print the entered number
// let num = prompt("Enter a number:");
// console.log(num);

// 2. Check if number divisible by 3 and 4
// let n = prompt("Enter a number:");
// if (n % 3 === 0 && n % 4 === 0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// 3. Maximum of two numbers
// let a = prompt("Enter first number:");
// let b = prompt("Enter second number:");

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// 4. Positive or negative
// let x = prompt("Enter a number:");
// if (x < 0) {
//     console.log("negative");
// } else {
//     console.log("positive");
// }

// 5. Max and Min of 3 numbers
// let n1 = prompt("Enter first number:");
// let n2 = prompt("Enter second number:");
// let n3 = prompt("Enter third number:");
// let max = n1;
// if (n2 > max) max = n2;
// if (n3 > max) max = n3;
// let min = n1;
// if (n2 < min) min = n2;
// if (n3 < min) min = n3;
// console.log("Max element = " + max);
// console.log("Min element = " + min);

// 6. Even or Odd
// let num2 = prompt("Enter a number:");
// if (num2 % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// 7. Vowel or Consonant
// let ch = prompt("Enter a character:").toLowerCase();
// if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }

// 8. Print numbers from 1 to input
// let limit = prompt("Enter a number:");
// for (let i = 1; i <= limit; i++) {
//     console.log(i);
// }

// 9. Multiplication table up to 12
// let table = prompt("Enter a number:");
// for (let i = 1; i <= 12; i++) {
//     console.log(table * i);
// }

// 10. Even numbers up to input
// let limit2 = prompt("Enter a number:");
// for (let i = 2; i <= limit2; i += 2) {
//     console.log(i);
// }

// 11. Power of a number
// let base = prompt("Enter base:");
// let exp = prompt("Enter exponent:");
// let result = 1;
// for (let i = 1; i <= exp; i++) {
//     result = result * base;
// }
// console.log(result);

// 12. Marks total, average, percentage
// let m1 = Number(prompt("Enter mark 1:"));
// let m2 = Number(prompt("Enter mark 2:"));
// let m3 = Number(prompt("Enter mark 3:"));
// let m4 = Number(prompt("Enter mark 4:"));
// let m5 = Number(prompt("Enter mark 5:"));
// let total = m1 + m2 + m3 + m4 + m5;
// let avg = total / 5;
// let perc = (total / 500) * 100;
// console.log("Total marks = " + total);
// console.log("Average marks = " + avg);
// console.log("Percentage = " + perc);

// 13. Days in month
// let month = prompt("Enter month number:");
// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     console.log("Days in Month: 31");
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log("Days in Month: 30");
// } else if (month == 2) {
//     console.log("Days in Month: 28 or 29");
// } else {
//     console.log("Invalid month");
// }

// 14. Percentage & Grade
// let p = Number(prompt("Enter Physics marks:"));
// let c = Number(prompt("Enter Chemistry marks:"));
// let b = Number(prompt("Enter Biology marks:"));
// let m = Number(prompt("Enter Math marks:"));
// let comp = Number(prompt("Enter Computer marks:"));
// let totalMarks = p + c + b + m + comp;
// let percentage = (totalMarks / 500) * 100;
// console.log("Percentage = " + percentage);
// if (percentage >= 90) console.log("Grade A");
// else if (percentage >= 80) console.log("Grade B");
// else if (percentage >= 70) console.log("Grade C");
// else if (percentage >= 60) console.log("Grade D");
// else if (percentage >= 40) console.log("Grade E");
// else console.log("Grade F");

// 15. Days in month (switch)
// let mth = Number(prompt("Enter month number:"));
// switch (mth) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("31 days");
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log("30 days");
//         break;
//     case 2:
//         console.log("28 or 29 days");
//         break;
//     default:
//         console.log("Invalid month");
// }

// 16. Vowel or Consonant (switch)
// let letter = prompt("Enter a letter:").toLowerCase();
// switch (letter) {
//     case "a": case "e": case "i": case "o": case "u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }

// 17. Maximum between two numbers
// let numA = Number(prompt("Enter first number:"));
// let numB = Number(prompt("Enter second number:"));
// switch (true) {
//     case (numA > numB):
//         console.log(numA);
//         break;
//     default:
//         console.log(numB);
// }

// 18. Even or Odd (switch)
// let val = Number(prompt("Enter a number:"));
// switch (val % 2) {
//     case 0:
//         console.log("Even");
//         break;
//     default:
//         console.log("Odd");
// }

// 19. Positive, Negative or Zero
// let number = Number(prompt("Enter a number:"));
// switch (true) {
//     case (number > 0):
//         console.log("Positive");
//         break;
//     case (number < 0):
//         console.log("Negative");
//         break;
//     default:
//         console.log("Zero");
// }

// 20. Simple Calculator

let n11 = Number(prompt("Enter first number:"));
let n22 = Number(prompt("Enter second number:"));
let op = prompt("Enter operator (+, -, *, /):");

switch (op) {
    case "+":
        console.log(n11 + n22);
        break;
    case "-":
        console.log(n11 - n22);
        break;
    case "*":
        console.log(n11 * n22);
        break;
    case "/":
        console.log(n11 / n22);
        break;
    default:
        console.log("Invalid operator");
}