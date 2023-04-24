
document.querySelector("h1").onmouseover=()=>{
    document.querySelector("h1").style.textAlign="center"
    document.querySelector("h1").style.color = "red"
    document.querySelector("h1").textContent = "ORNEKLER"
}

const resim = document.querySelector("#img1")


resim.onmouseover=()=> resim.src = "./img/aslan1.jpeg"

resim.onmouseout=()=>  resim.src = "./img/aslan2.jpeg"




// const but = document.getElementsByTagName("button")

// but.style.width = "100px"
// but.style.color = "white"


const buton = document.getElementsByClassName("btn")

// buton[0].style.width = "100px"
// buton[0].style.color = "white"
console.log(buton.length);              // 3 

for(let i = 0 ; i<buton.length ; i++){
    buton[i].style.width="150px"
    buton[i].style.height="60px"
    buton[i].style.margin = "2px"
    buton[i].style.borderRadius = "5px"
    buton[i].style.backgroundColor = "white"
    buton[i].style.fontSize = "20px"

}


buton[0].style.color = "orange"
buton[0].style.border = "2px solid orange"

buton[1].style.color = "blue"
buton[1].style.border = "2px solid blue"

buton[2].style.color = "red"
buton[2].style.border = "2px solid red"


buton[0].onclick=()=>{

    document.getElementById("ses").play()
    resim.src="./img/img.gif"
    buton[0].onclick=()=>{
        document.getElementById("ses").pause()
    } 
}

buton[1].onclick=()=>{

    document.getElementById("ses").pause()
    resim.src="./img/telbağla.gif"
}

buton[2].onclick=()=>{
    resim.src="./img/telefon.gif"
}




