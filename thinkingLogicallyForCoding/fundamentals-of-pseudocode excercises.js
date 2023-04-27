


function randomNumberArray(min, max){
    let newNumberArray = [];

    for (let i = 0; i < 10; i++){
        newNumberArray.push(Math.floor(Math.random() * (max - min) + min));
    }

    return newNumberArray;
}




// ---------------------------------------------------------------------------------
//excercise 1 - find the largest number


//PROGRAM <findLargestNumber>

    //define variable arrayOfCards
    //define variable highestCard

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




// ---------------------------------------------------------------------------------
//excercise 2 - find the smallest number

//PROGRAM <findSmallestNumber>

    //define variable lowestCard
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




// ---------------------------------------------------------------------------------
//excercise 3 - is in list

//PROGRAM <isInList>

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

// ---------------------------------------------------------------------------------
//excercise 7 - find second largest number

//PROGRAM <programName>

//define variable numberList
//define variable 




//END

// ---------------------------------------------------------------------------------
//excercise 8 - count specific number

//PROGRAM <programName>

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




//END

// ---------------------------------------------------------------------------------
//excercise 11 - count larger than 10

//PROGRAM <largerThan10>

    //DEFINE VARIABLE numberList
    //DEFINE VARIABLE count

    //forEach currentNumber in numberList DO:
        //IF (currentNumber > 10) DO:
            //count = count + 1
            //move onto next card
        //ELSE
            //move onto next number
        //END IF

        //RETURN count


//END

// ---------------------------------------------------------------------------------
//excercise 12 - count smaller than 10

//PROGRAM <smallerThan10>

    //DEFINE VARIABLE numberList
    //DEFINE VARIABLE count

    //forEach currentNumber in numberList DO:
        //IF (currentNumber > 10) DO:
            //count = count + 1
            //move onto next card
        //ELSE
            //move onto next number
        //END IF

    //RETURN count


//END


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
