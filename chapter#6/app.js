


      // =====================  CHAPTER NO 06     ====================================//


    //  Question  1

    // var a= 10;

    // document.write("the value of a is " + a);
    // document.write("the value of ++a is " + ++a);
    // document.write("now the value of a is " + a);

    // document.write("the value of a is " + a++);
    // a=a++;
    // document.write("now the value of a is " + a++);
    // a=--a;
    // document.write("the value of a is " + --a);
    // document.write(" now the value of a is " + a);
    // document.write("the value of a is " + a--);
    // a= a--;
    // document.write("the value of a is " + a--);

         // Question  2

//   var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is "+ a + "<br>");
// document.write("b is "+ b + "<br>");
// document.write("result = "+ result + "<br>");

// document.write("a  =" +--a + "<br>");
// document.write(--a - --b + "<br>");
// document.write(--a - --b + ++b + "<br>");
// document.write(--a - --b + ++b  + b-- + "<br>");

         // Question  3

    // var username= (prompt("enter your name"));

    // alert("welcome " + username);


             // Question  4

  // var userInput = prompt("Enter a number (default is 5):");

  // var number = parseInt(userInput);

  // if (isNaN(number) || number <= 0) {
  //   number = 5;
  //   document.write("<p>No valid input provided. Using default number: 5</p>");
  // }

  // // Generate and display the multiplication table
  // document.write("<h3>Table for " + number + "</h3>");
  // for (var i = 1; i <= 10; i++) {
  //   document.write(number + " × " + i + " = " + (number * i) + "<br>");
  // }

             // Question  5

  var subject1 = prompt("Enter name of first subject:");
  var subject2 = prompt("Enter name of second subject:");
  var subject3 = prompt("Enter name of third subject:");

  var totalMarks = 100;

  var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

  var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
  var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
  document.write("</table>");
  document.write("<p>Total Marks Obtained: " + totalObtainedMarks + "</p>");
  document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


