/**
 * Module for a hand.
 * @module src/Hand
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

/**
 * Class representing a hand of a player or dealer.
 * @class Hand
 */
class Hand {
  /**
   * Creates an instance of Hand.
   * @param {string} - The name of the player. Defaults to 'Dealer'.
   * @memberof Hand
   */
  constructor (name = 'Dealer') {
    /**
     * The name of the player. Defaults to 'Dealer'.
     * @type {string}
     */
    this.name = name

    /**
     * An array representing the current hand.
     * @type {Array}
     */
    this.hand = []
  }

  /**
   *Returns the sum of the hand.
   *
   * @returns {number} - A number representing the sum of the hand.
   * @memberof Hand
   */
  sum () {
    let total = 0
    for (let i = 0; i < this.hand.length; i++) {
      total += this.hand[i].value
    }
    return total
  }
}

/**
 * Har kort
 * Har namn
 * Gör - räknar ut summa
 *
 */

// Exports
module.exports = Hand
