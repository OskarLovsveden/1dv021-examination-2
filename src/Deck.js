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
     * @type {Array}
     */
    this.deck = []
    this.generateDeck()
    this.shuffle()
  }

  generateDeck () {
    const suits = ['♡', '♤', '♧', '♢']
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    for (const suit in suits) {
      for (const value in values) {
        const card = { NumberAndSuit: ranks[value] + suits[suit], Value: values[value] }
        this.deck.push(card)
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

  /**
   * Deals one card to a specified hand.
   *
   * @param {array} - The specified hand to recieve a card.
   * @memberof Deck
   */
  dealOneCard () {
    const card = this.deck.shift()
    return card
  }
}

/**
 * KORTLEK innehåller 52kort
 * skapar en kortlek
 * blandar en kortlek
 * delar ut kort
 *
*/

// Exports
module.exports = Deck
