//Question 2 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
let max = maxOfThree(200,300,170)

console.log(max)

function maxOfThree(num1,num2,num3) { //comparing all 3 numbers
    if( num1 > num2 && num1 > num3){
    return num1;
    } 
    else if( num2 > num1 && num2 > num3){
        return num2;
    }
    else(num3 > num1 && num3 > num2)
        return num3;
    }

