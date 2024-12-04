// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let result = 0 
    for (const num of A){
      result ^= num
    }
    return result;
  }