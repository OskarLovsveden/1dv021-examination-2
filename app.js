/**
 * The starting point of the application.
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'
const Game = require('./src/Game')
const game = new Game(45)
game.startGame()
console.log(game.deck.throw)

//  Ange antal spelare
//  Ange när spelare och giv är nöjda
//
//  Starta en omgång med dessa villkor

//  Returnera resultatet med en "toString()"
