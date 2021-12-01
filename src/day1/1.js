import {getInput} from '../utils/inputs.js';

function isHigher(a, b){
  return a > b;
}

function getHigherCount(arr){
  return arr.reduce((acc, val, i, prevArr) => {
    if(val > prevArr[i - 1]) return acc + 1;
    return acc
  }, 0)
}

function sumXNextNums(arr, numbersToSum){
  return arr.map((val, i, initialArr) => {
    let newVal = val;
    for (let j = 1; j < numbersToSum; j++) {
      if (initialArr[i + j]) {
        newVal += initialArr[i + j];
      }
    }
    return newVal
  })
}

function part1(){
  const input = getInput("src/day1/task1input.txt").split("\n").map(Number);
  return getHigherCount(input);
}

function part2(){
  const input = getInput("src/day1/task1input.txt").split("\n").map(Number);
  return getHigherCount(sumXNextNums(input, 3));
}


console.log(part1())
console.log(part2())