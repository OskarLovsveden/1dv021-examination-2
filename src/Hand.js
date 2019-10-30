/**
 * Module for a hand of a player.
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
function Hand (name = 'Dealer') {
  /**
  * The name of the player.
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

  /**
  * The limit of the player.
  * @type {number}
  */
  this.limit = 15

  /**
   * The number of aces worth 14 in a hand.
   * @type {number}
   */
  this.ace = 0
}

Hand.prototype.randomizeLimit = function () {
  this.limit = Math.floor((Math.random() * 5) + 15)
}

/**
   * Sets the sum of the players hand.
   *
   * @memberof Hand
   */
Hand.prototype.sum = function () {
  let totalOfCards = 0
  for (let i = 0; i < this.hand.length; i++) {
    if (this.hand[i].getValue() === 14) {
      this.ace += 1
    }
    totalOfCards += this.hand[i].value
  }
  if (this.ace > 0 && totalOfCards > 21) {
    totalOfCards -= this.ace * 13
    this.ace = 0
  }
  this.points = totalOfCards
}

/**
   * Logs a string of the current players hand and score.
   *
   * @memberof Hand
   */
Hand.prototype.toString = function () {
  let str = ''
  for (let i = 0; i < this.hand.length; i++) {
    str += this.hand[i].numberAndSuit + ' '
  }
  if (this.points <= 21) {
    console.log(`${this.name}: ${str}(${this.points})`)
  } else {
    console.log(`${this.name}: ${str}(${this.points}) BUSTED!`)
  }
}

// Exports
module.exports = Hand
