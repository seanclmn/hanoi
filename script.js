let draggables = document.querySelectorAll(".draggable")
let containers = document.querySelectorAll(".container")
let restart = document.querySelector("#restart")
let counter = document.querySelector("#counter")
let rules = document.querySelector("#rules")


const victory_modal = document.querySelector("#victory_modal")
const close_victory_modal = document.querySelector("#victory_close")

const rules_modal = document.querySelector("#rules_modal")
const close_rules_modal = document.querySelector("#rules_close")

var wood_2 = new Audio("wood_2.wav"); 

wood_2.play(); 


rules.addEventListener("click",function(){
    var wood_2 = new Audio("wood_2.wav"); 
    wood_2.play();   
    rules_modal.style.display="block"
})

//close rules modal
rules_close.addEventListener("click",close_the_rules_modal)

//function for closing rules modal

function close_the_rules_modal(){
    var wood_2 = new Audio("wood_2.wav"); 

    wood_2.play(); 
    rules_modal.style.display="none"
}




// close victory modal
close_victory_modal.addEventListener("click",close_the_modal)

//Function for closing victory modal
function close_the_modal(){
    victory_modal.style.display="none"
    draggables.forEach(item =>{
        containers[0].appendChild(item)
    })
    var wood_2 = new Audio("wood_2.wav"); 
    wood_2.play(); 
    counter.innerHTML=0
}



//We update which blocks are draggable
update_draggable()


//This restarts the game. Counter is set to 0 and the game is restarted.
restart.addEventListener("click",function(){
    var wood_2 = new Audio("wood_2.wav"); 

    wood_2.play(); 
    draggables.forEach(item =>{
        containers[0].appendChild(item)
    })
    counter.innerHTML=0
})

draggables.forEach(item => {
    item.addEventListener("dragstart",()=>{
        parent_id = item.parentElement.id
        item.classList.add("dragging_now")
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging_now")
        update_draggable()
        if(item.parentElement.id!==parent_id){
            counter.innerHTML++
        }
    })
})

containers.forEach(container =>{
    container.addEventListener("dragover",(event)=>{
        event.preventDefault()
        let draggable = document.querySelector(".dragging_now")
        let draggable_array = container.querySelectorAll(".draggable")
        let target = draggable_array[draggable_array.length-1]
        if(draggable_array.length==0 || draggable.id[1]>target.id[1]){
            container.appendChild(draggable)
            check_win()
        }
    })
})



//This function checks for a win. If the game is won, a victory modal is displayed.
function check_win(){
    if(containers[0].querySelector(".draggable") == null && containers[1].querySelector(".draggable") == null){
        victory_modal.style.display="block"
        var wood_3 = new Audio("wood_3.wav"); 

        wood_3.play(); 
    }
    else{
        var wood = new Audio("wood.wav"); 
        wood.play();
    }
}

//This function makes the top div of each container draggable
function update_draggable(){
    for(i=0;i<3;i++){
        let x= document.querySelector(`#container_${i+1}`).querySelectorAll(".draggable")
        let top = x[x.length - 1]
        if(x.length>0)
            x.forEach(item =>{
                if(item!==undefined){
                    if(item==top){
                        item.setAttribute('draggable', true)
                    }else{
                        item.setAttribute('draggable', false)
                    }
                }
            }
        )
    }
}


