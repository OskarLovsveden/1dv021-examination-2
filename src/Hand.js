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
     * The points of the player.
     * @type {number}
    */
    this.points = 0

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
    for (let i = 0; i < this.hand.length; i++) {
      this.points += this.hand[i].value
    }
    return this.points
  }
}

/**
 * Har kort
 * Har namn
 * Gör - räknar ut summa
 * har summa
 * har en identitet
 *
 */

// Exports
module.exports = Hand
