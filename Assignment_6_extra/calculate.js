//! Baslik 
const baslik = document.createElement("h1")
baslik.className="baslik1"
const metin = document.createTextNode("Lütfen Yaricap Giriniz")
baslik.appendChild(metin)

document.querySelector(".container").before(metin)
//!##################################################################


const input = document.querySelector("#input")

const DaireAlan = document.querySelector("#alan")
const DaireninCevresi = document.querySelector("#cevre")

document.querySelector("button").onclick=()=>{

    DaireAlan.innerHTML = `${(input.value)**2*Math.PI}`
    DaireninCevresi.innerHTML = `${(input.value)*2*Math.PI}`
    dil.value=""

}





