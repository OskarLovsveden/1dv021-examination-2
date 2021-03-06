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
   *  @param {number} [enterPlayers = 0] - The number of players to enter the game.
   *  @memberof Game
   */
  constructor (enterPlayers = 0) {
    this.deck = new Deck()
    this.deck.generateDeck()
    this.deck.shuffleDeck()

    this.enterPlayers = enterPlayers
    this.players = []
  }

  /**
   * Creates a player.
   *
   * @memberof Game
   */
  createPlayer () {
    for (let i = 0; i < this.enterPlayers; i++) {
      const player = new Hand('Player ' + (i + 1))
      player.randomizeLimit()
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
   * Deals a card repeatedly up to the limit of the player.
   *
   * @param {Object} player
   * @memberof Game
   */
  dealCardsUntilPlayerLimit (player) {
    while (player.points < player.limit) {
      this.deck.mergeThrowAndDeck()
      player.hand.push(this.deck.dealOneCard())
      player.sum()
    }
  }

  /**
   * Throws the players hand in the throwpile.
   *
   * @param {array} playerHand
   * @memberof Game
   */
  throwCardsInHand (playerHand) {
    for (let i = 0; i < playerHand.length; i++) {
      this.deck.throw.push(playerHand[i])
    }
  }

  /**
   * Plays a round for one player at the time.
   *
   * @memberof Game
   */
  playersPlay () {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].sum()

      this.dealCardsUntilPlayerLimit(this.players[i])

      if (this.players[i].points > 21) {
        const dealer = new Hand()
        this.logPlayerScore(this.players[i], dealer, false)
      } else if (this.players[i].points === 21 || this.players[i].hand.length === 5) {
        const dealer = new Hand()
        this.logPlayerScore(this.players[i], dealer, true)
      } else {
        this.dealerPlays(i)
      }
      this.throwCardsInHand(this.players[i].hand)
    }
  }

  /**
   * The dealers round.
   *
   * @param {number} indexOfPlayers - The index of the array of players
   * @memberof Game
   */
  dealerPlays (indexOfPlayers) {
    const dealer = new Hand()

    this.dealCardsUntilPlayerLimit(dealer)

    if (dealer.points > this.players[indexOfPlayers].points && dealer.points <= 21) {
      this.logPlayerScore(this.players[indexOfPlayers], dealer, false)
    } else if (dealer.points === this.players[indexOfPlayers].points) {
      this.logPlayerScore(this.players[indexOfPlayers], dealer, false)
    } else {
      this.logPlayerScore(this.players[indexOfPlayers], dealer, true)
    }
    this.throwCardsInHand(dealer.hand)
  }

  /**
   *  Logs the hand, score of player and dealer and winner of the current round.
   *
   * @param {Object} player
   * @param {Object} dealer
   * @param {Boolean} playerWin
   * @memberof Game
   */
  logPlayerScore (player, dealer, playerWin) {
    player.toString()
    dealer.toString()
    if (playerWin === true) {
      console.log('Player win!\n-')
    } else {
      console.log('Dealer win!\n-')
    }
  }

  /**
   * Starts the game.
   *
   * @memberof Game
   */
  startGame () {
    this.createPlayer()
    this.dealOneCardEach()
    this.playersPlay()
  }
}

// Exports
module.exports = Game
