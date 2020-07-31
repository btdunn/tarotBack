# Tarot

Tarot is your invitation to divination! Attain greater understanding of the cosmic powers that be, and chart your life course with insightful cards from the famous Rider Waite deck.

## About

Tarot presents three card Tarot readings, each card relating to the Past, Present and Future respectively. Don't like your reading? Fret not; Tarot provides a bespoke (random) selection of cards on every visit. With 17,576 possible combinations, every user is assured a unique experience!

## Video Tour

WIP

## Under the Hood

Ruby ver 2.6.1
Rails 6.0.3.2
ActiveRecord ver 6.0 3.2
SQLite3 ver 1.4
Sinatra ver 2.0
Sinatra ActiveRecord ver 2.0

## Install

To check out Tarot, install locally by cloning the GitHub repositories. For the backend, run rails db:migrate, rails db:seed and rails s to start a local server. For the frontend, run lite-server.

## Code Highlights

`    const $chosenCard = card.filter(card => card.bundle === $bundle && card.id.toString() === $cardID.toString())
`

`let card = document.querySelector('.thecard1');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});`

## Contact

Created by [Ben Dunn](https://github.com/btdunn) and [Brook Beyene](https://github.com/brookbeyene)

