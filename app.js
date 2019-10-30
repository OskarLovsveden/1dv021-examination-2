/**
 * The starting point of the application.
 *
 * @author Oskar Lövsveden
 * @version 1.0
 */

'use strict'
const Game = require('./src/Game')

// Ange antal spelare
const game = new Game(10)
game.startGame()
