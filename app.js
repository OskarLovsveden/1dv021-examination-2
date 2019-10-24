/**
 * The starting point of the application.
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'

// const Game = require('./src/Game')
const Deck = require('./src/Deck')

//  Ange antal spelare
//  Ange när spelare och giv är nöjda
//
//  Starta en omgång med dessa villkor

const deck = new Deck()
deck.shuffle()
console.log(deck.deck)
//  Returnera resultatet som en console.log
//  .console.log('Player #(number of the player): (Cards) (sum)(Potentially BUSTED!)\nDealer  : (Cards) (sum)(Potentially BUSTED!)\n(X) wins!')
