var arr = [12, 83, 45, 23, 45];

var sum = arr.reduce(function(acc,element){
    return acc + element;
}, 0);

console.log(sum);