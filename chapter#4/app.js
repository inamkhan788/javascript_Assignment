


//       // =====================  CHAPTER NO 04      ====================================//

// // Question 1

// var one = 10, two = 20, three = 30;

// // Question 2

// // Legal variable names:

 document.write("<h2>"+ "legal variable names" + "</h2>");
 document.write("<li>"+ "myVar" + "</li>");
 document.write("<li>"+"number1" + "</li>");
 document.write("<li>"+"_data" + "</li>");
 document.write("<li>"+"$price" + "</li>");
 document.write("<li>"+"camelCaseVariable" + "</li>");

// // Illegal variable names:
document.write("<h2>"+ "illegal variable names" + "</h2>");
document.write("<li>"+ "2ndVariable" + "</li>");
document.write("<li>"+"my-variable" + "</li>");
document.write("<li>"+"my variable" + "</li>");
document.write("<li>"+"var" + "</li>");
document.write("<li>"+"let" + "</li>");


// // Question 3


var rule1 = "letters";
var rule2 = "numbers";
var rule3 = "underscores";
var rule4 = "dollar signs";

document.write("<h2>"+ "Rules for naming JS variables"+ "</h2>");
document.write("Variable names can only contain " + rule1 + ", " + rule2 + ", " + rule3 + " and " + rule4 + ".<br>");
document.write("For example $my_1stVariable<br>");

document.write("Variables must begin with a ");
document.write("letter, " + rule4 + ", or " + rule3 + ".<br>");
document.write( "For example $name, _name or name<br>");

document.write("Variable names are case sensitive.<br>");
document.write( "Variable names should not be JS keywords.");


    // =====================  CHAPTER NO 04 END     ====================================//