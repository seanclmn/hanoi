const rules = document.querySelector(".rules")
const modal = document.querySelector("#modal")
const close_modal = document.querySelector("#close")

const links = document.querySelectorAll(".links")


let top_score = null

//Function for closing modal
function close_the_modal () {
    modal.style.display="none"

}
// close_the_modal()
close_modal.addEventListener("click",close_the_modal)

rules.addEventListener("click",function(){
    modal.style.display="block"
})

