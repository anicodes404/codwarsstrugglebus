function sumDigPow(a, b) {
    const result = []
    for (let num = a; num <= b; num++){
       const digits = String(num).split('').map(Number)
    const sumOfPowers = digits.reduce((sum, digit, index) => sum + Math.pow(digit, index + 1), 0)
    if (sumOfPowers == num) {
      result.push(num)
    }
    }
    return result; 
    
  }


//   https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

 