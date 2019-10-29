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

    this.ace = false
  }

  /**
   *Returns the sum of the hand.
   *
   * @returns {number} - A number representing the sum of the hand.
   * @memberof Hand
   */
  sum () {
    let totalOfCards = 0
    for (let i = 0; i < this.hand.length; i++) {
      if (this.hand[i].Value === 14) {
        this.ace = true
      }
      totalOfCards += this.hand[i].Value
    }
    if (this.ace && totalOfCards > 21) {
      totalOfCards -= 13
      this.ace = false
    }

    this.points = totalOfCards
  }

  /**
   * Returns a string of the current players hand.
   *
   * @returns {string} - A string of the current players hand.
   * @memberof Hand
   */
  toString () {
    let str = ''
    for (let i = 0; i < this.hand.length; i++) {
      str += this.hand[i].NumberAndSuit + ' '
    }
    return this.points <= 21
      ? console.log(`${this.name}: ${str}(${this.points})`)
      : console.log(`${this.name}: ${str}(${this.points}) BUSTED!`)
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
