import {getInput} from '../utils/inputs.js';

function getHigherCount(arr){
  return arr.reduce((acc, val, i, prevArr) => {
    if(val > prevArr[i - 1]) return acc + 1;
    return acc
  }, 0)
}

const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

function sumXNextNums(arr, numbersToSum){
  return arr.map((val, i, initialArr) => {
    const numsToSum = initialArr.slice(i, i + numbersToSum);
    return sum(numsToSum);
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