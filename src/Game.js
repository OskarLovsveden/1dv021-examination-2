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
   *  @param {number} [enterPlayers=0]
   *  @memberof Game
   */
  constructor (enterPlayers = 0) {
    //  Skapar kortlek
    this.deck = new Deck()

    this.enterPlayers = enterPlayers
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

  // ger varje spelare 1 kort
  dealOneCardEach () {
    for (let i = 0; i < this.players.length; i++) {
      const card = this.deck.dealOneCard()
      this.players[i].hand.push(card)
    }
  }

  start () {
    game.createPlayer()
    game.dealOneCardEach()
  }

  //  Spelare spelar mot dealer:
  //  Kolla summa
  //  Kallar på hand.sum

  //  if / else
  //  Ta ett till - Gör någonting (ge ett till kort) / stanna
  //  När spelare stannar - Skapa dealer. Dealers tur.

//
//  När ska spelare stanna?
//  Har spelare 5 kort - gör vad?
//  Har spelare blackjack - gör vad?
//  Har spelare över 21 - BUSTED
//  Har spelare 2 ess i rad i starthanden - Andra räknas som 1
//  Har spelare fått 3 ess?
//  Har spelare fått alla 4 ess
//
//
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
