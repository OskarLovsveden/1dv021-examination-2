/**
 * Module for a game of 21.
 * @module src/Game
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */
'use strict'

const Deck = require('./src/Deck')
const Hand = require('./src/Hand')

/**
 *
 *
 * @class Game
 */
class Game {
  constructor () {
    //  Skapar kortlek
    const deck = new Deck()

    //  Blandar kortlek
    deck.shuffle()

    //  Skapar spelare
    const player = new Hand('Player')

    //  Skapar dealer
    const dealer = new Hand()
    //  Ger varje spelare ett kort
    //  For-loop - genom spelarna
    function getCard () {
      player.hand.push(deck.deck.shift())
    }

    getCard()

    //
    //  Spelare spelar mot dealer:
    //  Kolla summa
    //  Kallar på hand.sum

    //  if / else
    //  Ta ett till - Gör någonting (ge ett till kort) / stanna
    //  När spelare stannar - Dealers tur
    function getCardDealer () {
      dealer.hand.push(deck.deck.shift())
    }

    getCardDealer()
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
