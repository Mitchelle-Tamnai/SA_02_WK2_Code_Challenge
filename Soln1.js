function switchCases(str) {

    //splits the string into an array of words
    let newString = str.split(' ')

    //returns the first letter of every index the new array in lowercase and the rest of the letters in uppercase 
    let switchCase = newString.map(i => {
        if (i[0] === i[0].toUpperCase()) {

            return i[0].toLowerCase() + i.slice(1).toUpperCase()
            
        } else {
            return i.toUpperCase()
            
        }
    })

    //joins the words back into a string
    return switchCase.join(' ')

    
}

console.log(switchCases('The Quick Brown Fox'))
