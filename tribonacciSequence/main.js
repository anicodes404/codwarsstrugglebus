function tribonacci(signature, n) {
    if (n === 0) return []; 
    if (n < signature.length) return signature.slice(0, n); 
    
    let result = signature.slice(); 
    while(result.length < n) {
      result.push(result.slice(-3).reduce((a, b) => a + b, 0))
    }
    
    return result; 
  }

// you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)