const splash = document.querySelector('.splash')
document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 2000 );
})


var slider1 = document.getElementById("range1");
var output = document.getElementById("value1")
output.innerHTML = slider1.value;
slider1.oninput = function(){
    if (this.value < 50){
        output.innerHTML = " Drink some Milk"
    }else if(this.value > 49 &&  this.value < 60){
        output.innerHTML = " Good job"
    
    }else if(this.value > 59 &&  this.value < 84){
        output.innerHTML = " Okay I see you"
    
    }else if(this.value > 83 ){
        output.innerHTML = "   You must be taking crack. Don't do drugs kids!"
    }
    
}
slider1.addEventListener("mousemove", function(){
    var x = slider1.value
    var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x +'%)'
    slider1.style.background = color;

})

var slider2 = document.getElementById("range2");
var output2 = document.getElementById("value2")
output2.innerHTML = slider2.value;
slider2.oninput = function(){
    if (this.value < 50){
        output2.innerHTML = " Drink some Milk"
    }else if(this.value > 49 &&  this.value < 60){
        output2.innerHTML = " Good job"
    
    }else if(this.value > 59 &&  this.value < 84){
        output2.innerHTML = " Okay I see you"
    
    }else if(this.value > 83 ){
        output2.innerHTML = "   You must be taking crack. Don't do drugs kids!"
    }
    
}
slider2.addEventListener("mousemove", function(){
    var x = slider2.value
    var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x +'%)'
    slider2.style.background = color;

})


var slider3 = document.getElementById("range3");
var output3 = document.getElementById("value3")
output3.innerHTML = slider3.value;
slider3.oninput = function(){
    if (slider3.value < 50){
        output3.innerHTML = " Drink some Milk"
    }else if(this.value > 49 &&  this.value < 60){
        output3.innerHTML = " Good job"
    
    }else if(this.value > 59 &&  this.value < 84){
        output3.innerHTML = " Okay I see you"
    
    }else if(this.value > 83 ){
        output3.innerHTML = "   You must be taking crack. Don't do drugs kids!"
    }
    
}
slider3.addEventListener("mousemove", function(){
    var x = slider3.value
    var color = 'linear-gradient(90deg, rgb(117,252,117)' + x + '%, rgb(214,214,214)' + x +'%)'
    slider3.style.background = color;

})
