
document.querySelector("h1").onmouseover=()=>{
    document.querySelector("h1").style.textAlign="center"
    document.querySelector("h1").style.color = "red"
    document.querySelector("h1").textContent = "ORNEKLER"
}

const resim = document.querySelector("#img1")

resim.onmouseover=()=> resim.src = "./img/aslan1.jpeg"

resim.onmouseout=()=> resim.src = "./img/aslan2.jpeg"


// const but = document.getElementsByTagName("button")

// but.style.width = "100px"
// but.style.color = "white"


const buton = document.getElementsByClassName("btn")

// buton[0].style.width = "100px"
// buton[0].style.color = "white"
console.log(buton.length);              // 3 

for(let i = 0 ; i<buton.length ; i++){

    buton[i].style.padding = "20px 40px"
    buton[i].style.borderRadius = "5px"
    buton[i].style.backgroundColor = "white"
    buton[i].style.fontSize = "20px"

}