/**
 * Module for a card.
 * @module src/Card
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

/**
 * Creates a Card instance representing a playing card.
 * @constructor
 * @param {string} - The suit and number of the card.
 * @param {number} - The numerical value of the card.
 */
function Card (suit, value) {
  /**
     * The suit and number of the card.
     * @type {string}
     */
  this.suit = suit

  /**
     * The numerical value of the card.
     * @type {number}
     */
  this.value = value
}

// Exports
module.exports = Card
