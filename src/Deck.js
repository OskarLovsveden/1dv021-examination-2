/**
 * Module for a standard deck of cards.
 * @module src/Deck
 *
 * @author Oskar Lövsveden
 * @version 1.0
*/
'use strict'

/**
 * Class representing a deck of cards.
 * @class Deck
 */
class Deck {
  /**
   * Creates an instance of Deck.
   * @memberof Deck
   */
  constructor () {
    /**
     * An array representing a deck of cards.
     * @type {Array} - An array.
    */
    this.deck = []

    const suits = ['♡', '♤', '♧', '♢']
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

    for (const suit in suits) {
      for (const value in values) {
        this.deck.push(`${values[value]} ${suits[suit]}`)
      }
    }
  }

  /**
   * Returns this.deck shuffled.
   *
   * @returns {array} - this.deck shuffled.
   * @memberof Deck
   */
  shuffle () {
    let m = this.deck.length
    let t
    let i

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--)

      // And swap it with the current element.
      t = this.deck[m]
      this.deck[m] = this.deck[i]
      this.deck[i] = t
    }

    return this.deck
  }
}

// Exports
module.exports = Deck
