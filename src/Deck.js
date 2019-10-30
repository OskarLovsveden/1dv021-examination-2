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

    /**
     * An array representing the throwpile of a deck.
     * @type {Array}
    */
    this.throw = []
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

  // Fisher-Yates Shuffle
  /**
   * Returns this.deck shuffled.
   *
   * @returns {array} - this.deck shuffled.
   * @memberof Deck
   */
  shuffleDeck () {
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
   *Deals one card to a specified hand.
   *
   * @returns The first card of the deck.
   * @memberof Deck
   */
  dealOneCard () {
    return this.deck.shift()
  }

  /**
   * Merge the throwpile(throw) and the drawpile(deck).
   *
   * @memberof Deck
   */
  mergeThrowAndDeck () {
    if (this.deck.length === 1) {
      for (let i = 0; i < this.throw.length; i++) {
        this.deck.push(this.throw[i])
      }
      this.throw = []
      this.shuffleDeck()
    }
  }
}

// Exports
module.exports = Deck
