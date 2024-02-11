//Using RegEx to validate a set of credit card number; say MasterCard

const cardNumber = /^\d{4}(.\d{4})*$/.exec("3211 1234 4784 5499")

/*the pattern uses the "^" to assert the first value.
the "d" is used to test for digits; say to validate the credit card numbers
the "{4}" indicates the amount of numbers on each set of number we want to validate
the "." is used to specify a space that separates the sets of credit card numbers
the "*" use to initiate a search within the set of numbers to be validated either a string or digit (ours will return digits)
the "$" use to assert the end of pattern matching 
*/


console.log(cardNumber)
console.log(`${cardNumber} is validated`);