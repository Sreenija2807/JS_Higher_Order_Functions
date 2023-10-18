function myCustomForEach(num){
    let result=[]
    for(let i=0;i<num.length;i++)
        result.push(num[i]+1);
    return result;
}

let numbers=[1,2,3,4,5]
let incrementedNumbers=myCustomForEach(numbers);

console.log("Input Array elements: "+numbers);
console.log("Array elements after each element is incremented by 1: "+incrementedNumbers);