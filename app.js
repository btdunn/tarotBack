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
const $maincontainer = document.querySelector(".maincontainer")
const baseURL = "http://localhost:3000/cards/" 
const baseCardURL = "http://localhost:3000/cards/id=" 
fetch(baseURL)
    .then(response => response.json())
    .then(displayCards)

function displayCards(cards){
    const $card1 = random(1,26)
    const $card2 = random(27,52)
    const $card3 = random(53,78)

    cards.forEach(card => {
        if(card.bundle === "1"){
            for (i = 1; i < 27; i++) {
                if (i === $card1.toFixed()) {
                    fetch(baseCardURL +i.toString() )
                      .then(response => response.json())
                      .then(eachCard)
                    break; }
                return;
              }
        } else if (card.bundle === "2") {
            for (i = 27; i < 53; i++) {
                if (i === $card2.toFixed()) { 
                    fetch(baseCardURL +i.toString() )
                      .then(response => response.json())
                      .then(eachCard)
                  break; }
                return;
                
              }
            // console.log("there are none")
            // console.log(card.id = $card2.toFixed())
        
        } else{
            for (i = 53; i < 79; i++) {
                if (i === $card3.toFixed()) {
                    fetch(baseCardURL +i.toString() )
                      .then(response => response.json())
                      .then(eachCard)
                  break; }
                return ;
              }
            console.log("these are the third")
            console.log(card.id = $card3.toFixed())
        }      
    });
}

function eachCard(card){
  
    bundleCard(card.name, card.desc, card.image)
    
}


function bundleCard(name, desc, image){
    console.log(bundle.id, "got the name")
    const $thefront = document.createElement("div")
    $thefront.classList.add("thefront")
    const $theback = document.createElement("div")
    $theback.classList.add("theback")
    const $facecard = document.createElement("div")
    $facecard.classList.add("facecard")
    const $description = document.createElement("div")
    $description.classList.add("description")
    
    //the first image
    const $firstImage = `<img src='${"https://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg"}' alt="front card">`
    $thefront.append($firstImage)


    //the face card after flipped
    const $image = `<img src='${image}' alt="card"></img>`
    $facecard.append($image)

    //description div
    const $cardName = document.createElement("h2")
    const $desc = document.createElement("p")
    $cardName.textContent = name
    $desc.textContent = desc
    $description.append($cardName, $desc)

    //the flipped side of the card
    // $theback.append($facecard, $description)

    //a single bundle
    // return $thefront, $thefront
    $bundle1.append($thefront,$theback)
    // $bundle2.append($thefront,$theback)
    // $bundle3.append($thefront,$theback)
    $maincontainer.append($bundle1, $bundle2, $bundle3)


}


function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  
}  