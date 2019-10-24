/**
 * Module for a player.
 * @module src/Player
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

class Hand {
  constructor (name = 'Dealer') {
    this.name = name
    this.hand = [{ suit: '9♡', value: 9 }, { suit: '6♤', value: 6 }]
  }

  sum () {
    let total = 0
    for (let i = 0; i < this.hand.length; i++) {
      total += this.hand[i].value
    }
    return total
  }
}

const hand = new Hand()
console.log(hand.sum())

/**
 * Har kort
 * Har namn
 * Gör - räknar ut summa
 *
*/

// Exports
module.exports = Hand
