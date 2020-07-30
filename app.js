const splash = document.querySelector('.splash')
document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000 );
})

let card = document.querySelector('.thecard1');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

let card2 = document.querySelector('.thecard2');
card2.addEventListener( 'click', function() {
  card2.classList.toggle('is-flipped');
});
let card3 = document.querySelector('.thecard3');
card3.addEventListener( 'click', function() {
  card3.classList.toggle('is-flipped');
});
const $bundle1 = document.querySelector(".thecard1")
const $bundle2 = document.querySelector(".thecard2")
const $bundle3 = document.querySelector(".thecard3")
// const $facecard = document.querySelector(".facecard")
const $bundleTag = document.createElement("div")
const $maincontainer = document.querySelector(".maincontainer")
const baseURL = "http://localhost:3000/cards/" 
const baseCardURL = "http://localhost:3000/cards/id=" 

fetch(baseURL)
    .then(response => response.json())
    .then(displayCards)

function displayCards(cards){

    
    const $card1 = random(1,26).toFixed()
    const $card2 = random(27,52).toFixed()
    const $card3 = random(53,78).toFixed()
    
    $bundle1.append( eachCard(cards, "PAST", $card1)[0], eachCard(cards, "PAST", $card1)[1], eachCard(cards, "PAST", $card1)[2]) 
    $bundle2.append( eachCard(cards, "PRESENT", $card2)[0], eachCard(cards, "PRESENT", $card2)[1], eachCard(cards, "PRESENT", $card2)[2]) 
    $bundle3.append( eachCard(cards, "FUTURE", $card3)[0], eachCard(cards, "FUTURE", $card3)[1], eachCard(cards, "FUTURE", $card3)[2]) 
    $maincontainer.append($bundle1, $bundle2, $bundle3)
  }
  
  function eachCard(card, $bundle, $cardID){
    const $thefront = document.createElement("div")
    $thefront.classList.add("thefront")
    
    const $label = document.createElement("div")
    $label.classList.add("label")
    
    const $firstImage = document.createElement('img')
    $firstImage.src = "https://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg"
    $thefront.append($firstImage)
    // console.log($cardID.toString())
    const $chosenCard = card.filter(card => card.bundle === $bundle && card.id.toString() === $cardID.toString())
    // console.log(card.bundle)
    
    // const oneCard = bundleCard($chosenCard.name, $chosenCard.desc, $chosenCard.image, $chosenCard.bundle)
    const oneCard = bundleCard($chosenCard[0].name, $chosenCard[0].desc, $chosenCard[0].image, $chosenCard[0].bundle)
    // console.log(oneCard)
    return ["",$thefront, oneCard];  
}


function bundleCard(name, desc, cardImage, state){
        
    const $theback = document.createElement("div")
    $theback.classList.add("theback")
    const $facecard = document.createElement("div")
    $facecard.classList.add("facecard")
    const $description = document.createElement("div")
    $description.classList.add("description")
    const $labels = document.createElement("div")
    $labels.classList.add("labels")
    const $stateName = document.createElement("h2")
    $stateName.classList.add("state")
    $stateName.textContent = state
    $labels.append($stateName)
  
    //the face card after flipped
    const $image = document.createElement('img')
    $image.src = `${cardImage}`
    $image.width = "277"
    $image.height = "477"
    $facecard.append($image)

    //description div
    const $cardName = document.createElement("h2")
    const $desc = document.createElement("p")
    $cardName.textContent = name
    $desc.textContent = desc
    $description.append($cardName, $desc)

    //the flipped side of the card
    $theback.append($labels,$facecard, $description)

    //a single bundle
    return $theback
}


function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  
}  