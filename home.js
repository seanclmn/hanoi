const rules = document.querySelector(".rules")
const modal = document.querySelector("#modal")
const close_modal = document.querySelector("#close")

const links = document.querySelectorAll(".links")


let top_score = null


var wood_2 = new Audio("wood_2.wav"); 
wood_2.play()


//Function for closing modal
function close_the_modal () {
    var wood_2 = new Audio("wood_2.wav"); 
    wood_2.play()

    modal.style.display="none"

}
// close_the_modal()
close_modal.addEventListener("click",close_the_modal)

rules.addEventListener("click",function(){
    var wood_2 = new Audio("wood_2.wav"); 
    wood_2.play()
    modal.style.display="block"
})

