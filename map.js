function myCustomMap(num) {
    let result = [];
    for (let i = 0; i < num.length; i++) 
      result.push(num[i]**2);
    return result;
  }
  
let numbers = [1, 2, 3, 4, 5];
let mappedNumbers = myCustomMap(numbers);

console.log("Input Numbers array: "+numbers);
console.log("Squared Numbers array: "+mappedNumbers); 
  