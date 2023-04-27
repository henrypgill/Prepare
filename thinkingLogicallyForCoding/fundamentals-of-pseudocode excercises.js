


function randomNumberArray(min, max){
    let newNumberArray = [];

    for (let i = 0; i < 25; i++){
        newNumberArray.push(Math.floor(Math.random() * (max - min) + min));
    }

    return newNumberArray;
}




// ---------------------------------------------------------------------------------
//excercise 1 - find the largest number


//PROGRAM <findLargestNumber>

    //define variable arrayOfCards
    //define variable highestCard = first card

    //forEach card in  arrayOfCards DO:
    //    IF (currentCard > highestCard) DO:
    //       highestCard = currentCard
    //        move onto next card
    //    ELSE
    //        move onto next card
    //    END IF
    //END forEach
    //RETURN highestCard

//END

function findLargestNumber() {

    let arrayOfNumbers = randomNumberArray(0, 100);
    console.log(arrayOfNumbers);
    
    let largestNumber = arrayOfNumbers[0];
    
    arrayOfNumbers.forEach(number => number > largestNumber ? largestNumber =  number: null);
    
    
    return largestNumber
    }
    
console.log("findLargestNumber");
console.log(findLargestNumber());


// ---------------------------------------------------------------------------------
//excercise 2 - find the smallest number

//PROGRAM <findSmallestNumber>

    //define variable arrayOfCards
    //define variable lowestCard = first card

    //forEach card in the arrayOfCards DO:
    //    IF (currentCard < lowestCard) DO:
    //       lowestCard = currentCard
    //        move onto next card
    //    ELSE  
    //        move onto next card
    //    END IF
    //END forEach
    //RETURN lowestCard

//END


    
    
function findSmallestNumber(){
    
    let arrayOfNumbers = randomNumberArray(0, 100);
    console.log(arrayOfNumbers);
    
    let smallestNumber = arrayOfNumbers[0];
    
    arrayOfNumbers.forEach(number => number < smallestNumber ? smallestNumber =  number: null );
    
    
    return smallestNumber
    }
    
console.log("findSmallestNumber");
console.log(findSmallestNumber());


// ---------------------------------------------------------------------------------
//excercise 3 - is in list

//PROGRAM <isInList>

    //define variable arrayOfCards
    //define variable targetNumber
    //define variable answer = FALSE

    //forEach card in the arrayOfCards DO:
    //    IF currentCard = targetNumber DO:
    //       answer = TRUE
    //       END forEach
    //    ELSE
    //        move onto next card
    //    END IF
    //END forEach
    //RETURN answer

//END

function isInList(){
    
    let arrayOfNumbers = randomNumberArray(0, 10);
    console.log(arrayOfNumbers);    

    let answer = false;
    let target = 5;
    
    arrayOfNumbers.forEach(number => {
        if (number == target){
            answer = true;
        }});
    
    
    return answer;
}
    
console.log("isInList");
console.log(isInList());

// ---------------------------------------------------------------------------------
//excercise 4 - add numbers

//PROGRAM <numberListSum>
    //define variable sumTotal = 0
    //define list numberList

    //FUNCTION <addTwoNumbers> (number1, number2)
    //RETURN number1 + number2
    //END FUNCTION

    //forEach currentNumber in numberList DO:
        //sumTotal = addTwoNumbers(sumTotal, currentNumber)
    //END forEach
    
    //return sumTotal
    
//END

addTwoNumbers = (number1, number2) => {return number1 + number2};

function listTotal() {

    let arrayOfNumbers = randomNumberArray(0, 100);
    console.log(arrayOfNumbers);

    let currentTotal = 0;

    arrayOfNumbers.forEach(number => currentTotal = addTwoNumbers(currentTotal, number));

    return currentTotal

}

console.log("isInList");
console.log(listTotal());




// ---------------------------------------------------------------------------------
//excercise 5 - find the largest even number

//PROGRAM <largestEvenNumber>

    //define variable numberList
    //define variable largestEvenNumber

    //define FUNCTION  <compareNumbers> with arguments (currentLargest AND number) DO:
        //IF (number > currentLargest) AND (number % 2 == 0) DO:
            //RETURN TRUE
        //ELSE DO:
            //RETURN FALSE
        //END IF

        //forEach currentNumber in numberList DO:
            //define variable isEvenAndLarger = function: compareNumbers with (currentLargest as largestEvenNumber) and (currentNumber as number)
            //IF (isEvenAndLarger == TRUE) DO:
                //largestNumber = currentNumber
                //move onto next card
            //ELSE DO:
                //move onto next number
            //END IF
        //END forEach

    //RETURN largestEvenNumber


//END

function largestEvenNumber(){

    let arrayOfNumbers = randomNumberArray(0, 100);
    console.log(arrayOfNumbers);

    let largestEvenNumber = 0;

    arrayOfNumbers.forEach(number => number > largestEvenNumber && number % 2 == 0 ? largestEvenNumber = number : null);

    if ( largestEvenNumber == 0){
        return "no even numbers in list";
    }
    return largestEvenNumber;

}

console.log("largestEvenNumber");
console.log(largestEvenNumber());


// ---------------------------------------------------------------------------------
//excercise 6 - find the largest odd number

//PROGRAM <largestOddNumber>

    //define variable numberList
    //define variable largestOddNumber

    //define FUNCTION  <compareNumbers> with arguments (currentLargest AND number) DO:
        //IF (number > currentLargest) AND (number % 2 =/= 0) DO:
            //RETURN TRUE
        //ELSE DO:
            //RETURN FALSE
        //END IF

        //forEach currentNumber in numberList DO:
            //define variable isOddAndLarger = function: compareNumbers with (currentLargest as largestOddNumber) and (currentNumber as number)
            //IF (isOddAndLarger == TRUE) DO:
                //largestNumber = currentNumber
                //move onto next card
            //ELSE DO:
                //move onto next card
            //END IF
        //END forEach

    //RETURN largestOddNumber


//END


function largestOddNumber(){

    let arrayOfNumbers = randomNumberArray(0, 100);
    console.log(arrayOfNumbers);

    let largestOddNumber = 0;

    arrayOfNumbers.forEach(number => number > largestOddNumber && number % 2 != 0 ? largestOddNumber = number : null);

    if ( largestOddNumber == 0){
        return "no odd numbers in list";
    }
    return largestOddNumber;

}

console.log("largestOddNumber");
console.log(largestOddNumber());



// ---------------------------------------------------------------------------------
//excercise 7 - find second largest number

//PROGRAM <programName>

    //define variable numberList
    //define variable largestNumber = 0
    //define variable secondLargestNumber = 0

    //forEach (number in numberList) DO:

        // IF (number > secondLargestNumber) AND (number > largestNumber) DO:
            //secondLargestNumber = largestNumber
            //largestNumber = number
            //move onto next card
        //ELSE IF (number > secondLargestNumber) DO:
            //secondLargestNumber = number
            //move onto next card
        //ELSE DO:
            //move onto next card
        //END IF

    //RETURN count

//END

function largerThanWhich(secondLargestNumber, largestNumber, number) {

    if ( number > largestNumber && number > secondLargestNumber ){
        return [largestNumber, number];

    } else if (number > secondLargestNumber && number < largestNumber){
        return [number, largestNumber];

    } else {
        return [secondLargestNumber, largestNumber];
    }

}


function secondLargestNumber(){

    let twoLargestNumbers = [0, 0];

    let arrayOfNumbers = randomNumberArray(0, 10);
    console.log(arrayOfNumbers);

    arrayOfNumbers.forEach(number => {

        twoLargestNumbers = largerThanWhich(twoLargestNumbers[0], twoLargestNumbers[1], number)
    });

    return twoLargestNumbers[0];

}

//console.log("secondLargestNumber");
//console.log(secondLargestNumber());

// ---------------------------------------------------------------------------------
//excercise 8 - count specific number

//PROGRAM <countSpecicNumber>

    //define variable numberList
    //define variable count
    //define variable target

    //forEach (number in numberList) DO:
        // IF (number = target) DO:
            //count = count + 1
            //move onto next card
        //ELSE DO:
            //move onto next number
        //END IF

    //RETURN count

//END

function countSpecicNumber(){

    let arrayOfNumbers = randomNumberArray(0, 10);
    console.log(arrayOfNumbers);

    let count = 0;
    let target = 5;
    console.log(`target number: ${target}`);

    arrayOfNumbers.forEach(number => number == target ? count++ : null);

    return count;

}

console.log("countSpecicNumber");
console.log(countSpecicNumber());

// ---------------------------------------------------------------------------------
//excercise 9 - count positive numbers

//PROGRAM <countPositiveNumbers>

    //define variable numberList
    //define variable count

    //forEach number in numberList DO:
        //IF (number > 0) DO:
            //count = count + 1
            //move onto next card
        //ELSE DO:
            //move onto next number
        //END IF
    //END forEach

    //RETURN count


//END

function countPositiveNumbers(){

    let arrayOfNumbers = randomNumberArray(-100, 100);
    console.log(arrayOfNumbers);

    let count = 0;

    arrayOfNumbers.forEach(number => number > 0 ? count++ : null);

    return count;

}

console.log("countPositiveNumbers");
console.log(countPositiveNumbers());

// ---------------------------------------------------------------------------------
//excercise 10 - count negative numbers

//PROGRAM <countNegativeNumbers>

    //define variable numberList
    //define variable count

    //forEach number in numberList DO:
        //IF (number < 0) DO:
            //count = count + 1
            //move onto next card
        //ELSE DO:
            //move onto next number
        //END IF
    //END forEach

    //RETURN count


//END

function countNegativeNumbers(){

    let arrayOfNumbers = randomNumberArray(-100, 100);
    console.log(arrayOfNumbers);

    let count = 0;

    arrayOfNumbers.forEach(number => number < 0 ? count++ : null);

    return count;

}

console.log("countNegativeNumbers");
console.log(countNegativeNumbers());

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



