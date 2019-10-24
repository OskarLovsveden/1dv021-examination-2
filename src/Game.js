const Deck = require('./src/Deck')
const Player = require('./src/Hand')

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
//  Har spelare över 21
//
//
//  If / statements - vem vinner
//
//
//  Se vinnare
//
