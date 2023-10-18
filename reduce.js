function myCustomReduce(num){
    let result=0
    for(let i=0;i<num.length;i++)
        result+=num[i];
    return result;
}

let numbers=[1,2,3,4,5]
let sum=myCustomReduce(numbers);

console.log("Input Array: "+numbers);
console.log("Sum of array elements: "+sum);