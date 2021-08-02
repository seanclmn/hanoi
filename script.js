let draggables = document.querySelectorAll(".draggable")
let containers = document.querySelectorAll(".container")
let restart = document.querySelector("#restart")
let counter = document.querySelector("#counter")




let modal = document.getElementById("modal")
let close_modal = document.getElementById("close")

let topscore = null

let parent_id = null




update_draggable()

close_modal.addEventListener("click",function(){
    modal.style.display="none"

})

restart.addEventListener("click",function(){
    draggables.forEach(item =>{
        containers[0].appendChild(item)
    })
    counter.innerHTML=0
})

draggables.forEach(item => {
    item.addEventListener("dragstart",()=>{
        parent_id = item.parentElement.id
        console.log(parent)
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


function check_win(){
    if(containers[0].querySelector(".draggable") == null && containers[1].querySelector(".draggable") == null){
        modal.style.display="block"

    }
}

function update_draggable(){
    //This function makes the top div of each container draggable
    console.log(`<br>`)
    for(i=0;i<3;i++){
        let x= document.querySelector(`#container_${i+1}`).querySelectorAll(".draggable")
        let top = x[x.length - 1]
        if(x.length>0)
            x.forEach(item =>{
                if(item!==undefined){
                    if(item==top){
                        console.log(item)
                        item.setAttribute('draggable', true)
                    }else{
                        item.setAttribute('draggable', false)
                    }
        
                }
            
            }

        )


    }
}