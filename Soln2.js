function numSequence(num1, num2) {
    //initializing the result as an empty array
    let result = []

    for (let i = num1; i <= num2; i++) {
        //pushing each value of i into the empty array
        result.push(i)
        
    }
    //result containing all the values in an array is returned
    return result
    
}

//console.log(numSequence(-3, 8))