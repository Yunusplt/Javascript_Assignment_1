const city = ""

document.querySelector("button").onclick=()=>{
    const city = document.querySelector("input").value
    console.log(city);

}



const veriGetir = async ()=>{
    const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=london&appid=f56f703795a90532f7b92917734c7e64&units=metric`
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f56f703795a90532f7b92917734c7e64&units=metric`
    );

    const json = await  response.json()

    console.log(json);
    ekranaBastir(json)
}
veriGetir()
//! ${data.weather[0].icon}
function ekranaBastir(data) {

        document.querySelector("ul").innerHTML += `
        <li class="list-unstyled">
              <div class="card" style="width: 18rem" >
                <img src="./img/sun-g999db51cc_640.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2>${data.name}<sup>${data.sys.country}</sup></h2>
                  <div>
                    ${data.main.temp} <sup>&#176;C</sup>
                  </div>
                  <figure>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                    <figcaption>${data.weather[0].main}</figcaption>
                  </figure>
                </div>
              </div>
            </li>
        
        `;


}