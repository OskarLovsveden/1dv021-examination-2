/**
 * The starting point of the application.
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'
const Game = require('./src/Game')
const game = new Game(5)
// GameOn(numOfPlayers = 0, limitValue = 0, )
game.createPlayer()
console.log(game.hands)

//  Ange antal spelare
//  Ange när spelare och giv är nöjda
//
//  Starta en omgång med dessa villkor

//  Returnera resultatet som en console.log
//  .console.log('Player #(number of the player): (Cards) (sum)(Potentially BUSTED!)\nDealer  : (Cards) (sum)(Potentially BUSTED!)\n(X) wins!')
