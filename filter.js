function myCustomFilter(num){
    let result=[]
    for(let i=0;i<num.length;i++){
        if(num[i]%2==0)
        result.push(num[i]);
    }
    return result;
}

let numbers=[1,2,3,4,5]
let evenNumbers=myCustomFilter(numbers);

console.log("Input Array elements: "+numbers);
console.log("Array elements after even numbers are filtered: "+evenNumbers);