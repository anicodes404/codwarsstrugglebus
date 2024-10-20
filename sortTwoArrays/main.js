<<<<<<< HEAD
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b){
    let merge = [...a, ...b].sort()
    let unique = new Set(merge)
    return Array.from(unique).sort((a, b) => a - b)
=======
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b){
    let merge = [...a, ...b].sort()
    let unique = new Set(merge)
    return Array.from(unique).sort((a, b) => a - b)
>>>>>>> 24e62ec00ba51b4fb7d7e37d98cdaa3140a3e358
}