function getPrime(arr) {

    //filters through the array to find prime numbers
    let primeNums = arr.filter(num => {
        if (num >= 1 && num === 2) {
            return true
            
        }else if (num%2 === 0) {
            return false

        }
        // Check divisibility by odd numbers starting from 3 up to the square root of num
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return false;
            }
        }
        //num is prime if no divisor is left
        return true
    })
    //returns new array of prime numbers found
    return primeNums
}