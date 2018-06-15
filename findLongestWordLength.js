'use strict'

/**
 * function to return the length of the longest word in the provided sentence
 * @param {string} string -  provided sentence
 */
const findLongestWordLength = string => {

  /** return the length of the longest word in the provided sentence 
   * @type {number}
   */
  return string.split(' ') // split the string into an array of words
               /** sort array into ascending order */
               .sort((a, b) => b.length - a.length)
               /** remove the first item from the array */
               .shift()
               /** get the length of the item */
               .length;
};

/** call @function findLongestWordLength */
findLongestWordLength("The quick brown fox jumped over the lazy dog");
