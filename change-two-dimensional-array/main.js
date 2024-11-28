//Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

function matrix(a){
    return a.map((a, i) => a.map((a, j) => i == j ? + ! (a < 0) : a ))
}