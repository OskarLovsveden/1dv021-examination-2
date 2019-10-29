/**
 * Module for a game of 21.
 * @module src/Game
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */
'use strict'

const Deck = require('./Deck')
const Hand = require('./Hand')

/**
 * Class representing a game of 21.
 *
 * @class Game
 */
class Game {
  /**
   *  Creates an instance of Game.
   *  @param {number} [enterPlayers = 0]
   *  @param {number} [limit = 0]
   *  @memberof Game
   */
  constructor (enterPlayers = 0, limit = 17) {
    //  Skapar kortlek
    this.deck = new Deck()
    this.hand = new Hand()

    this.enterPlayers = enterPlayers
    this.limit = limit
    this.players = []
  }

  /**
   * Creates a player.
   *
   * @memberof Game
   */
  createPlayer () {
    for (let i = 1; i <= this.enterPlayers; i++) {
      const player = new Hand('Player ' + i)
      this.players.push(player)
    }
  }

  /**
   * Deals a card to each player.
   *
   * @memberof Game
   */
  dealOneCardEach () {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].hand.push(this.deck.dealOneCard())
    }
  }

  /**
   * Starts the game.
   *
   * @memberof Game
   */
  start () {
    this.createPlayer()
    this.dealOneCardEach()
    this.playRound()
  }

  /**
   * Plays a round for 1 player.
   *
   * @memberof Game
   */
  playRound () {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].sum()
      // if players points is under its set value(limit)...
      while (this.players[i].points < this.limit) {
        // ...hit me
        this.players[i].hand.push(this.deck.dealOneCard())
        this.players[i].sum()
      }
      // if players points is over 21...
      if (this.players[i].points > 21) {
        this.players[i].toString()
      } else if (this.players[i].points === 21 || this.players[i].hand.length === 5) {
        this.players[i].toString()
      } else {
        console.log('stopped')
        this.players[i].toString()
        // create dealer
        const dealer = new Hand()
        while (dealer.points < this.limit) {
          dealer.hand.push(this.deck.dealOneCard())
          dealer.sum()
        }
        dealer.toString()
        if (dealer.points > this.players[i].points && dealer.points <= 21) {
          // Dealer wins
          console.log('Dealer wins')
        } else if (dealer.points === this.players[i].points) {
          // Draw
          console.log('Dealer wins')
        } else {
          // Player wins
          console.log('Player wins')
        }
      }
      // Compare score of player and dealer
    }
  }

//
//  If / statements - vem vinner
//
//
//  Se vinnare
//  Släng kort
//  Fortsätt till nästa spelare
//
//
}

// Exports
module.exports = Game

/**
 * Har mängden spelare
 * Har spelregler
 *
 */
const game = new Game(10)
game.createPlayer()
game.dealOneCardEach()
game.playRound()
// console.log(game.players)
// console.log(game.players[0].hand)
// console.log(game.players[0].sum())
