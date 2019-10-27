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
   *  @param {number} [players=0]
   *  @memberof Game
   */
  constructor(players = 0) {
    //  Skapar kortlek
    const deck = new Deck()
    this.players = players

    //  Blandar kortlek
    deck.shuffle()

    //  Skapar spelare
    createPlayers (this.players) {
      for (let i = 1; i <= this.players; i++) {
        const hand = []
        const player = {
          Name: 'Player ' + i,
          ID: i,
          Points: 0,
          Hand: hand
        }
        this.players.push(player)
      }
    }

    //  Skapar dealer
    // const dealer = new Hand()
    //  Ger varje spelare ett kort
    //  For-loop - genom spelarna

    //
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
}

// Exports
module.exports = Game

/**
 * Har mängden spelare
 * Har spelregler
 *
 */