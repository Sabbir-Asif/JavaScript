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