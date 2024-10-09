// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  = 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 = 4

function setReducer(input) {
    const result = []

    let current; 

    for (let i = 0; i < input.length; i++){
        if (current === input[i] {
            result[result.length - 1] += 1; 
            continue; 
        }
        current = input[i]
        result.push(1)
    
    }
    return setReducer(result)
}