let str1 = "Type 1 to check if a product is available\n";
let str2 = "Type 2 to list all the products\n";
let str3 = "Type q to quit";
let info = str1 + str2 + str3;
let myProducts = "apple blackberry banana tomato brocolli pumpkin";
var whatToDo = prompt(info);
console.log(whatToDo);

if(whatToDo === "2")
{
    console.log("The product available : " + myProducts);
    document.write("<p class = info> The products available : " + myProducts + "  </p>");
}
else if(whatToDo === "1")
{
    let product = prompt("Enter the name of the product to see if availbale : ");
    if(myProducts.indexOf(product) === -1)
    {
        console.log("Sorry the product is not available");
        document.write("<p class = error>Sorry the product is not available</p>");
    }
    else
    {
        console.log("The product is available");
        document.write("<p class = success>The product is available</p>")
    }
}
else
{
    document.write("<p class = info>Refresh the page if you want to look for a product or list of all product</p>");
}