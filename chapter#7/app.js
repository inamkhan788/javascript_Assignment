
      // =====================  CHAPTER NO 07     ====================================//

// Question 1

// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


//      =================  ANSWER   ===============



// Prompt the user to enter a city name
var cityName = prompt("Enter the name of your city:");

// Check if the entered city name is "Karachi"
if (cityName.toLowerCase() === "karachi") {
    // If the city name is "Karachi", display the welcome message
    alert("Welcome to the city of lights!");
} else {
    // If the city name is not "Karachi", display a generic message
    alert("Welcome!");
}

// Question 2

// . Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

//      =================  ANSWER   ===============


// Prompt the user to enter their gender
var gender = prompt("Enter your gender (male or female):");

// Convert the gender input to lowercase for case-insensitive comparison
gender = gender.toLowerCase();

// Check the gender input and display the appropriate greeting
if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Invalid input. Please enter 'male' or 'female'.");
}


// Question 3

// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

//      =================  ANSWER   ===============

// Prompt the user to enter the color of the road traffic signal
var color = prompt("Enter the color of the road traffic signal (red, yellow, or green):");

// Convert the color input to lowercase for case-insensitive comparison
color = color.toLowerCase();

// Check the color input and display the appropriate message
switch (color) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid input. Please enter 'red', 'yellow', or 'green'.");
        break;
}

// Question 4

// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    
//      =================  ANSWER   ===============

// Prompt the user to enter the remaining fuel in the car (in liters)
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// Check if the remaining fuel is less than 0.25 liters
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel in your car. Safe travels!");
}

// Question 5

// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
//      =================  ANSWER   ===============


// a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
// Output: "given condition for variable a is true"

// b.
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// Output: (No alert displayed)

// c.
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
// Output: "condition 2 is true"
//         "condition 4 is true"

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
// Output: "The cost equals"

// e.
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// Output: "True"

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}
// Output: "car is smaller than cat"


// Question 6

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
//      =================  ANSWER   ===============


  // Prompt the user to enter marks obtained in three subjects and total marks
  var subject1Marks = parseInt(prompt("Enter marks obtained in subject 1:"));
  var subject2Marks = parseInt(prompt("Enter marks obtained in subject 2:"));
  var subject3Marks = parseInt(prompt("Enter marks obtained in subject 3:"));
  var totalMarks = parseInt(prompt("Enter total marks:"));

  // Calculate total obtained marks
  var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

  // Calculate percentage
  var percentage = (totalObtainedMarks / totalMarks) * 100;

  // Calculate grade
  var grade;
  if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Determine remarks
  var remarks;
  if (grade === "F") {
    remarks = "You need to improve";
  } else {
    remarks = "Keep up the good work!";
  }

  // Display the result on the page
  document.write("<p>Total marks: " + totalMarks + "</p>");
  document.write("<p>Obtained marks: " + totalObtainedMarks + "</p>");
  document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
  document.write("<p>Grade: " + grade + "</p>");
  document.write("<p>Remarks: " + remarks + "</p>");


// Question 7

// . Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

//      =================  ANSWER   ===============


// Store the secret number (ranging from 1 to 10) in a variable
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (from 1 to 10):"));

// Check if the user's guess matches the secret number
if (userGuess === secretNumber) {
    // If user guesses the same number, show "Bingo! Correct answer"
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    // If the guessed number +1 or -1 is the secret number, show "Close enough to the correct answer"
    alert("Close enough to the correct answer");
} else {
    // If the user's guess is incorrect, display a message indicating the correct answer
    alert("Sorry, the correct answer was " + secretNumber);
}

// Question 8

// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

//      =================  ANSWER   ===============

// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    // If the number is divisible by 3, display a message
    alert("The number " + number + " is divisible by 3.");
} else {
    // If the number is not divisible by 3, display a message
    alert("The number " + number + " is not divisible by 3.");
}

// Question 9
// Write a program that checks whether the given input is an
// even number or an odd number.

//      =================  ANSWER   ===============


// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
    // If the number is divisible by 2 with no remainder, it's even
    alert("The number " + number + " is an even number.");
} else {
    // If the number is not divisible by 2 with no remainder, it's odd
    alert("The number " + number + " is an odd number.");
}



// Question 10

//Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”.

//      =================  ANSWER   ===============

// Prompt the user to enter the temperature
var temperature = parseInt(prompt("Enter the temperature:"));

// Check the temperature and display a message based on the criteria
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is freezing cold outside!");
}


// Question 11
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


//      =================  ANSWER   ===============


// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation (+, -, *, /, %)
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Declare a variable to store the result
var result;

// Check the operation and perform the corresponding calculation
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber === 0) {
        alert("Error: Division by zero is not allowed.");
    } else {
        result = firstNumber / secondNumber;
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation. Please enter one of the following: +, -, *, /, %");
}

// Display the result to the user
if (result !== undefined) {
    alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);
}
