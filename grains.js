// console.log("There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board, with the number of grains doubling on each successive square.")
const grainCount = function(startingGrains,totalNumOfSquares){
    let countSquares = 1;
    let totalNumOfGrains = startingGrains
    while (countSquares<totalNumOfSquares) {
        console.log(startingGrains*2);
        startingGrains = startingGrains*2;
        totalNumOfGrains = totalNumOfGrains + startingGrains
        countSquares++;
    } return console.log(`The total number of grains is ${totalNumOfGrains}`
}

grainCount(1,64)