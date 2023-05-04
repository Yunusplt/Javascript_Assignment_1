
const cities = []
const city = document.querySelector(".input1");
const uyari = document.querySelector("p");

document.querySelector(".submit").onclick = () => {
  if(city.value==""){
    uyari.textContent = "Please enter a city"
  }else if(cities.includes(city.value)){
    uyari.textContent="You already have this city in your list"
  }else{
    uyari.textContent = ""
    cities.unshift(city.value)

  veriGetir();
  city.value = ""; // input kutusu bos gözükmesi icin.
}
};

city.onkeydown = (taste) => {
  if (taste.keyCode === 13) {
    document.querySelector(".submit").click();
  }
};

const veriGetir = async ()=>{
    const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=london&appid=f56f703795a90532f7b92917734c7e64&units=metric`
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=f56f703795a90532f7b92917734c7e64&units=metric`
    );

    const json = await  response.json()
    ekranaBastir(json)
}


function ekranaBastir(data) {
        document.querySelector("ul").innerHTML =
          `
        <li class="list-unstyled ">
              <div class="card" style="width: 18rem" >
                <img src="./img/${data.weather[0].icon}.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2>${data.name}<sup class="ms-2 fs-5 ps-1 pe-1" style="background-color: orange;">${data.sys.country}</sup></h2>
                  <div>
                    ${data.main.temp} <sup>&#176;C</sup>
                  </div>
                  <figure>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                    <figcaption class="mb-3">${data.weather[0].description}</figcaption>
                    <span> 🔼${data.main.temp_max}<sup>&#176;C</sup></span><span>🔽${data.main.temp_min}<sup>&#176;C</sup></span>
                  </figure>
                </div>
              </div>
            </li>
        ` + document.querySelector("ul").innerHTML;
}

