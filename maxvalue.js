var message = "Add an item to the array (it must be a number)";
message = message + "\nType exit to stop";

var arr = [];
while(true)
{
    var input = prompt(message);
    if(input.toLowerCase() === "exit")
    {
        break;
    }
    else
    {
        input = parseInt(input);
        if(!isNaN(input))
        {
            arr.push(input);
        }
    }
}

if(arr.length === 0)
{
    document.write("<p> Your array is empty </p>")
}
else
{
    var res = arr.reduce(function(acc, element){
        if(acc > element)
        {
            return acc;
        }
        else
        {
            return element;
        }
    }, arr[0]);

    document.write("<p>The max value is <strong> " + res + " </strong> </p>");
}