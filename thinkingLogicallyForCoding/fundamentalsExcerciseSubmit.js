// ---------------------------------------------------------------------------------
// Laura Hall pseudocode exercise
// exercise 11 - count larger than 10

// define procedure largerThan10

// input: array of numbers called List;
//        count = 0;

// Look at the first number in the List and proceed with
//  ForEach number in List, check
//      IF Number > 10;
//          Then increase count value by 1;

//      Else
//          Set count as current value of count;

//      Return count;

//      EndIf;

//  EndForEach;
//EndDefinedProcedure;


//JavaScript Solution to the exercise

function largerThan10(numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++ ) {
        if (numbers[i] > 10) {
            count = count + 1;
        }
    }
    return count;
}

console.log(largerThan10([2, 3, 15,66]));

// Laura Hall pseudocode exercise
// exercise 12 - count smaller than 10

// define procedure smallerThan10

// input: array of numbers called List;
//        count = 0;

// Look at the first number in the List and proceed with
//  ForEach number in List, check
//      IF Number < 10;
//          Then increase count value by 1;

//      Else
//          Set count as current value of count;

//      Return count;

//      EndIf;

//  EndForEach;
//EndDefinedProcedure;


//JavaScript Solution to the exercise

function smallerThan10(numbers) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++ ) {
        if (numbers[i] < 10) {
            count = count + 1;
        }
    }
    return count;
}

console.log(smallerThan10([2, 3, 15,66]));



// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

function randomNumberArray(min, max){
    let newNumberArray = [];

    for (let i = 0; i < 25; i++){
        newNumberArray.push(Math.floor(Math.random() * (max - min) + min));
    }

    return newNumberArray;
}

// ---------------------------------------------------------------------------------
//excercise 13 - count larger than x

//PROGRAM <largerThan10>

    //DEFINE VARIABLE numberList
    //DEFINE VARIABLE count
    //DEFINE VARIABLE target

    //forEach currentNumber in numberList DO:
        //IF (currentNumber > target) DO:
            //count = count + 1
            //move onto next card
        //ELSE
            //move onto next number
        //END IF

    //RETURN count


//END

function countGreaterThanX(){

    let arrayOfNumbers = randomNumberArray(-10, 10);
    console.log(arrayOfNumbers);

    let count = 0;
    let target = 7;

    arrayOfNumbers.forEach(number => number > target ? count++ : null);

    return count;

}

console.log("countGreaterThanX");
console.log(countGreaterThanX());

// ---------------------------------------------------------------------------------
//excercise 14 - count smaller than x

//PROGRAM <smallerThan10>

    //DEFINE VARIABLE numberList
    //DEFINE VARIABLE count
    //DEFINE VARIABLE target

    //forEach currentNumber in numberList DO:
        //IF (currentNumber > target) DO:
            //count = count + 1
            //move onto next card
        //ELSE
            //move onto next number
        //END IF

    //RETURN count


//END

function countLesserThanX(){

    let arrayOfNumbers = randomNumberArray(-10, 10);
    console.log(arrayOfNumbers);

    let count = 0;
    target = 0;

    arrayOfNumbers.forEach(number => number < target ? count++ : null);

    return count;

}

console.log("countLesserThanX");
console.log(countLesserThanX());