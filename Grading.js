var name = prompt("Enter your name : ");
var number = prompt("Enter your marks : ");
var grade;

if(number >= 33 && number <=39)
{
    grade = "D";
}
else if(number >= 40 && number <=49)
{
    grade = "C";
}
else if(number >= 50 && number <=59)
{
    grade = "B";
}
else if(number >= 60 && number <=69)
{
    grade = "A-";
}
else if(number >= 70 && number <=79)
{
    grade = "A";
}
else if(number >= 80 && number <=100)
{
    grade = "A+";
}
else
{
    grade = "F";
}
document.write("Welcome " + name + "</br>");
document.write("Your grade is " + grade + ".</br>");