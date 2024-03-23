console.log("JS is running");

const arr = [3, -55, 35, 1045, 34, 67, 999, 147];

// Find the sum of the array
let sum = 0;
function summation(arr) {
  arr.map((num) => {
    return (sum = sum + num);
  });
  return sum;
}

console.log("Sum: ", summation(arr));

// Find the maximum value in the array.
console.log("Max: ", Math.max(...arr));

// Using reduce
const maxReduce =
  arr.reduce(function (max, currNum) {
    if (currNum > max) {
      return currNum;
    } else {
      return max;
    }
  });
  console.log('Max 2: ', maxReduce);

// Create 2 arrays, one of odd numbers, one even

function divide(arr){
    return arr.reduce(function (numArr, currNum){
        if (currNum % 2 === 0){
            numArr[1].push(currNum);
        } else {
            numArr[0].push(currNum);
        }
        return numArr;

    }, [[],[]])}

console.log('odds & evens: ', divide(arr));