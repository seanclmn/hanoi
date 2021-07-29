draggables = document.querySelectorAll(".draggable")
containers = document.querySelectorAll(".container")



update_draggable()
draggables.forEach(item => {
    item.addEventListener("dragstart",()=>{
        item.classList.add("dragging_now")
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging_now")
        update_draggable()
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

        }
    })

})

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