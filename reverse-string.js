/**
 * reverseString() returns a reversed string
 * based on the passed in string
 * */
const reverseString = (string) => {
    /**
     * this solution uses array methods to reverse the string
     * split() splits the passed-in string object into an array of strings
     * reverse() reverses the array
     * join() joins all the elements of the array
     */
    return string.split('').reverse().join('');
}