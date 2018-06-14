'use strict'

/**
 * function to return the factorial of the provided integer
 * @param {number} num - provided integer
 */
const factoriseNum = num => {
  /**
   * create an array storing a range of numbers from 1 - num
   * @type {Array}
   */
  const factorialRange = num === 0 ? [1] : Array.from(Array(num), (number, index) => ++index);

  /**
   * return the factorial of the provided integer
   */
  return factorialRange.reduce((total, number) => total = total * number);
};

/** call @function factoriseNum */
factorialize(5);
