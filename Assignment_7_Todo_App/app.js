
const addButton = document.querySelector("#todo-button")
const myTask = document.querySelector("#todo-input")
const newLi = document.querySelector("#todo-ul")

const myList = []

addButton.onclick=()=>{

    if (myList.includes(myTask.value)) {
        alert("Girdiginiz deger zaten listede bulunmaktadir.")
    }else{

    newLi.innerHTML = `<li>
    <i id="firstEmo" class="fa-solid fa-check"></i> 
    <p class="parag">${myTask.value}</p>  
    <i id="secondEmo" class="fa-solid fa-trash-can">
    </i></li>` + newLi.innerHTML
    myList.push(myTask.value)
    myTask.value=""
    document.querySelector("#toplam").textContent = +(document.querySelector("#toplam").textContent) + 1
}
}

console.log(myList);

document.addEventListener("click", (e)=>{
    if (e.target.id == "firstEmo") {

        if (e.target.parentElement.className == "checked") {
            e.target.parentElement.className = "nochecked"
           document.querySelector("#tamamlanan").textContent = (document.querySelector("#tamamlanan").textContent) - 1
        }else{
        e.target.parentElement.className = "checked"
        document.querySelector("#tamamlanan").textContent = +(document.querySelector("#tamamlanan").textContent) + 1
        }
    }    
})

document.addEventListener("click", (e) =>{
    if (e.target.id=="secondEmo") {
        e.target.parentElement.remove()
        document.querySelector("#toplam").textContent = (document.querySelector("#toplam").textContent) - 1
    }
})

myTask.onkeydown=(taste)=>{

    if(taste.keyCode===13){
        addButton.click()
    }
}


