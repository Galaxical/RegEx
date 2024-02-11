The pattern uses the "^" to assert the begining of matching digits.

The *"d"* is used to test and match for sets of digits; say the credit card numbers

The *"{4}"* indicates the amount of numbers on each set of number we want our pattern to validate or match

The "." is used to specify a space that separates the sets of validated credit card numbers

The "*" use to initiate a search within the set of numbers to be validated either a string or digit (ours will return digits)

The *"$"* use to assert the end of pattern matching. 

The *Exec* is used to output the validated numbers, the index of the first number matched, and the number groups which is outputed as undefined.
