/**
 * The starting point of the application.
 *
 * @author Oskar Lövsveden
 * @version 1.0
*/
'use strict'

const Deck = require('./src/Deck')

const deck = new Deck()
console.log(deck.deck)
