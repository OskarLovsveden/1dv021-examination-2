/**
 * Module for a card.
 * @module src/Card
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

/**
 * Class representing a playing card.
 * @class
 * @param {string} numberAndSuit - The number and suit of the card.
 * @param {number} value - The numerical value of the card.
 */
function Card (numberAndSuit, value) {
  /**
     * The number and suit of the card.
     * @type {string}
     */
  this.numberAndSuit = numberAndSuit

  /**
     * The numerical value of the card.
     * @type {number}
     */
  this.value = value
}

/**
 * Returns the value of a card
 * @returns the value of a card
*/
Card.prototype.getValue = function () {
  return this.value
}

// Exports
module.exports = Card
