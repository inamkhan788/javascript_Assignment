
      // =====================  CHAPTER NO 05     ====================================//

// Question 1


var num1 = 5;
var num2 = 7;

var sum = num1 + num2;

document.write("The sum of " + num1 + " and " + num2 + " is: " + sum );

// Question 2


var num1 = 5;
var num2 = 7;

var subtractionResult = num1 - num2;

var multiplicationResult = num1 * num2;


var divisionResult = num1 / num2;


var modulusResult = num1 % num2;

document.write("The division of " + num1 + " and " + num2 + " is: " + sum );
document.write("The multiplication of " + num1 + " and " + num2 + " is: " + sum );
document.write("The modulus of " + num1 + " and " + num2 + " is: " + sum );


// Question 3


var myVariable;
document.write("Value after variable declaration is: " + myVariable);
myVariable = 5;
document.write("Initial value: " + myVariable);
myVariable++;
document.write("Value after increment is: " + myVariable);
document.write("Value after addition is: " + myVariable);
document.write("Value after decrement is: " + myVariable);
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder);

// Question 4

var ticketPrice = 600;

var numberOfTickets = 5;

var totalCost = ticketPrice * numberOfTickets;

document.write("Cost of one movie ticket is: " + ticketPrice + " PKR");
document.write("<Movie Ticket Cost");
document.write("Number of tickets to buy: " + numberOfTickets);
document.write("Total cost for " + numberOfTickets + " tickets is: " + totalCost + " PKR");

// Question 5

var number = 6;

document.write("Multiplication Table of " + number);

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i));
};

  // Question 6


var ctemp = 30;

var ftemp = (ctemp * 9/5) + 32;
document.write("<p>" + ctemp + "C is " + ftemp + "F</p>");
var ftemp = 86;
var ctemp = (ftemp - 32) * 5/9;
document.write("<p>" + ftemp + "F is " + ctemp + "C</p>");

  // Question 7

  var pitem1 = 25; 
  var pitem2 = 35; 
  var qitem1 = 3; 
  var qitem2 = 2; 
  var charges = 10;
  var totalCost = (pitem1 * qitem1) + (pitem2 * qitem2) + charges;
  document.write("<Receipt</h2>");
  document.write("Price of item 1: $" + pitem1);
  document.write("Price of item 2: $" + pitem2);
  document.write("Ordered quantity of item 1: " + qitem1);
  document.write("Ordered quantity of item 2: " + qitem2);
  document.write("Shipping charges: $" + charges);
  document.write("Total cost: $" + totalCost);

//  Question 8

   var total = 500;
   var obtaine = 430;
   var percentage = (obtaine / total) * 100;
 
 
   document.write("Percentage Calculation");
   document.write("Total marks: " + total);
   document.write("Marks obtained: " + obtaine);
   document.write("Percentage: " + percentage);

  //  Question 9
   

  var dollar = 10;
  var riyal = 25;

  
  var exchangeUSD = 104.80; 
  var exchangeSAR = 28;    

  
  var rupees = (dollar * exchangeUSD) + (riyal * exchangeSAR);

  
  document.write("Currency Conversion</h2>");
  document.write("Total US Dollars: " + dollar);
  document.write("Total Saudi Riyals: " + riyal);
  document.write("Total Pakistani Rupees: " + rupees);
   
  // Question 10

  
   var number = 10;

   
   var result = (((number + 5) * 10) / 2);
 
   document.write("Arithmetic Operations");
   document.write("Initial number: " + number);
   document.write("Result after arithmetic operations: " + result);


// Question  11

  var currentYear = new Date().getFullYear();

  var birthYear = 2004; 

  var age= currentYear - birthYear;


  document.write("Age Calculator");
  document.write("Current Year: " + currentYear);
  document.write("Birth Year: " + birthYear);
  document.write("Age: You are " + age + " years old.");


  //  Question  12

   
  var radius = 5; 
  
  
  var circumference = 2 * Math.PI * radius;

  
  var area = Math.PI * Math.pow(radius, 2);

  // Display the results
  document.write("Circle Properties Calculator");
  document.write("Radius: " + radius);
  document.write("The circumference is " + circumference.toFixed(2));
  document.write("The area is " + area.toFixed(2));


    //  Question  13

  var favoriteSnack = "chocolate bars";

  var currentAge = 30; 

  var maxAge = 80; 
  var amountPerDay = 2; 

  var yearsRemaining = maxAge - currentAge;
  var totalSnacksNeeded = yearsRemaining * 365 * amountPerDay;

  document.write("Lifetime Supply Calculator");
  document.write("Your favorite snack: " + favoriteSnack);
  document.write("Your current age: " + currentAge);
  document.write("Your maximum age: " + maxAge);
  document.write("Amount of snack per day: " + amountPerDay);
  document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge );


      // =====================  CHAPTER NO 05 END     ====================================//
