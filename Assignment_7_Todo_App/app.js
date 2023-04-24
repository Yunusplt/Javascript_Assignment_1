


const addButton = document.querySelector("#todo-button")
const myTask = document.querySelector("#todo-input")
const newLi = document.querySelector("#todo-ul")


addButton.onclick=()=>{
    newLi.innerHTML = `<li class="listem">
    <i class="fa-solid fa-check"></i> 
    <p class="parag">${myTask.value}</p>  
    <i class="fa-solid fa-trash-can">
    </i></li>` + newLi.innerHTML
    myTask.value=""
    document.querySelector("#toplam").textContent = +(document.querySelector("#toplam").textContent) + 1
    // document.querySelector(".name").style.color="red"


}

// todo neden olmadi ?????#########################
document.querySelector(".fa-check").onclick=()=>{
console.log("hello");
document.querySelector(".parag").style.textDecoration = "line-through"}
//todo #############################################

myTask.onkeydown=(taste)=>{

    if(taste.keyCode===13){
        addButton.click()
    }
}

