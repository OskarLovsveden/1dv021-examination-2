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
}

const deck1 = new Deck()
console.log(deck1.deck)

// Exports
module.exports = Deck
