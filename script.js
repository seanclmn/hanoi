blocks = document.querySelectorAll(".block")
console.log(blocks)
containers = document.querySelectorAll(".container")

blocks.forEach(item => {

    item.draggable = "true"
    console.log(blocks[0])

    // let i = blocks.indexOf(item)

    // still_blocks = blocks.splice(i,1)
        
    // still_blocks.forEach(element =>{
    //     element.draggable = "false"
    // })

    item.addEventListener("dragstart",()=>{



        item.classList.add("dragging_now")
        item.style.background = "blue"
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("draggin_now")
        item.style.background = "antiquewhite"
    })
    }
)


containers.forEach(container =>{
    container.addEventListener("dragover",(event)=>{
        // event.preventDefault()
        draggable = document.querySelector(".dragging_now")
        container.appendChild(draggable)
    })

})