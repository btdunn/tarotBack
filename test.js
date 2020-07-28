fetch("http://localhost:3000/cards")
  .then(response => response.json())
  .then(cardFilter)


const $card1 = document.querySelector('.theCard1')
const $card2 = document.querySelector('.theCard2')
const $card3 = document.querySelector('.theCard3')





function cardFilter(cards){
  const singleBundle = cards.filter(card => card.bundle === "1")
  console.log(singleBundle.filter(card => card.id === 5))
}


// function showCards(cards){
//   cards.forEach(card => {
//     const $theFront = document.createElement('div')
//     $theFront.classList.add('theFront')
//     const $theBack = document.createElement('div')
//     $theBack.classList.add('theBack')
//     const $faceCard = document.createElement('div')
//     $faceCard.classList.add('faceCard')
//     const $description = document.createElement('div')
//     $description.classList.add('description')

//     const $firstImage = document.createElement('img')
//     $firstImage.src = "https://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg"
//     $theFront.append($firstImage)

//     const $image = document.createElement('img')
//     $image.src = card.image
//     $faceCard.append($image)

//     const $cardName = document.createElement("h2")
//     const $desc = document.createElement("p")
//     $cardName.textContent = card.name
//     $desc.textContent = card.description
//     $description.append($cardName, $desc)

//     console.log($theFront)
//     $card1.append($theFront, $theBack)
//   })
// }