'use strict'

/**
 * function to return an array consisting of the largest number from each provided sub-array
 * @param {Array} array - provided sub-array
 */
const largestOf = array => {
    /**
     * return an array consisting of the largest number from each provided sub-array
     * @type {Array}
     */
    return Array.from (
        /** loop through array to get sub-array */
        array.map(subArray => {
            /** sort sub-array into ascending order */
            return subArray.sort((a, b) => b - a)
                           .shift(); // remove the first item from the array
        })
    );
};

/** call @function largestOf */
largestOf([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);