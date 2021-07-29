draggables = document.querySelectorAll(".draggable")
containers = document.querySelectorAll(".container")
console.log(draggables[0])


draggables.forEach(item => {


    item.addEventListener("dragstart",()=>{
        item.classList.add("dragging_now")
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging_now")
    })
    }
)


containers.forEach(container =>{
    container.addEventListener("dragover",(event)=>{
        event.preventDefault()
        draggable = document.querySelector(".dragging_now")
        container.appendChild(draggable)
    })

})


function getDragAfterElement(container,y){
    container.querySelectorAll("draggable")
}