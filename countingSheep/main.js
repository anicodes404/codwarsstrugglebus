function countSheeps(sheep) {
    var count = 0
    
    for(let i = 0; i < sheep.length; i++){
      if (sheep[i] === true){
        count += 1
      }
    }
    return count
  }