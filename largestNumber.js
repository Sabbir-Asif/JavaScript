let command = prompt("Want to find the largest number? y(yes) n(no)");
let maxNumber;
if(command == "y")
{
    let x = parseInt(prompt("Enter first number : "));
    let y = parseInt(prompt("Enter second number : "));
    let z = parseInt(prompt("Enter third number : "));

    if(x >= y && x >= z)
    maxNumber = x;
    else if(y >= x && y >= z)
    maxNumber = y;
    else 
    maxNumber = z;

    alert("Largest Number is : " + maxNumber);
}