const form = document.querySelector("#new-item-form")
const input_data = document.querySelector("#item-input")
const todo_list = document.querySelector("#list")
console.log(form)

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const item = document.createElement("div")
    item.innerHTML = input_data.value
    item.classList.add("list-item")
    input_data.value = ""

    todo_list.appendChild(item)
    
    // Delete Item From List
    item.addEventListener("click", ()=>{
        // console.log("delete", item.innerHTML)
        item.style.color="red"
        item.style.textDecoration = "line-through"
        setTimeout(()=>item.remove(), 1000)
    })

})


// section 2
const modal_btn = document.querySelector("#open-modal-btn");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const close_btn = document.querySelector("#close-modal-btn");

modal_btn.addEventListener('click', ()=>{
    if (!modal.classList.contains("open")){
        modal.classList.add("open")
        overlay.classList.add("open")
    }
})

const closeModal = ()=>{
    modal.classList.remove("open")
    overlay.classList.remove("open")
}


close_btn.addEventListener('click', closeModal)

overlay.addEventListener("click", closeModal)