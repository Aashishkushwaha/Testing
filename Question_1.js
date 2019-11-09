/*
--- Question ---
Write a function that takes an array of integers and returns that array rotated by N positions.
For example, if N=2, given the input array [1, 2, 3, 4, 5, 6]
the function should return [5, 6, 1, 2, 3, 4]

*/

// Answer =>

// here I will use third parameter as the modifier, this will be used whether we want to support the
// position to be greater than the inputArray lenght

let rotateArray = (inputArray, positionCount, supportGreaterPositionThanArrayLength = false) => {
  if(!supportGreaterPositionThanArrayLength && positionCount > inputArray.length)
      throw new Error(`Error: position can't be larger than the size of the array i.e ${inputArray.length}`);
  else
  if(supportGreaterPositionThanArrayLength && positionCount > inputArray.length){
    let newArray = [...inputArray];
    positionCount %= inputArray.length;
    newArray = [...newArray.slice(newArray.length - positionCount),
                  ...newArray.slice(0, newArray.length - positionCount)];
    return newArray;
  }
  if(positionCount === inputArray.length || positionCount === 0){
    return inputArray;
  }
  else{
    let newArray = [...inputArray];
    newArray = [...newArray.slice(newArray.length - positionCount),
                  ...newArray.slice(0, newArray.length - positionCount)];
    
    return newArray;
  }
}

// --- Test cases ---
console.log(rotateArray([1, 2, 3, 4, 5, 6], 4)); 
console.log(rotateArray([1, 2, 3, 4, 5, 6], 0));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 6));
console.log(rotateArray([1, 2, 3, 4, 5, 6], 7, false));