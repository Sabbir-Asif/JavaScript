var text = prompt("Enter your name : ");
document.write("Hi " + text + "<br>");
document.write("Number of character in your name = " + text.length + "<br>");
document.write(text.charAt(2) + "<br>");
document.write(text.toUpperCase() + "<br>");
document.write(text.toLocaleLowerCase() + "<br>");
var str1 = "Why so ";
var str2 = "serious?";
var str = str1.concat(str2);
document.write(str + "<br>");
//slice cuts the string from starting index to (finishing index - 1)
var str3 = str.slice(0,3);
document.write(str3 + "<br>");
