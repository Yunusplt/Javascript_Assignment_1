const myInput = document.querySelector(".input1");
const submitButton = document.querySelector(".submit");
const warning = document.querySelector("p");
const allCities = document.querySelector(".all-cities");
const myLocation = document.querySelector(".location");
const clearAllButton = document.querySelector(".clear-all");

//! language
const langButton = document.querySelector(".languages");

let units = "metric";
let lang = "en";
let url;
let cities = [];

localStorage.setItem(
  "apiKey",
  EncryptStringAES("f56f703795a90532f7b92917734c7e64")
);
const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
//! submit butonuna basinca olacaklar.
submitButton.addEventListener("click", () => {
  if (myInput.value) {
    const cityName = myInput.value;
    console.log(cityName);
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
    myInput.focus();
    getWeatherDataFromApi();
  }
  myInput.value = "";
  myInput.focus();
});

myInput.onkeydown = (taste) => {
  if (taste.keyCode === 13) {
    submitButton.click();
  }
};

myLocation.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`;
    getWeatherDataFromApi();
  });
});

//todo ################  lang button
langButton.addEventListener("click", (e) => {
  if (e.target.id == "de") {
    lang = "de";
    myInput.setAttribute("placeholder", "🔍 Suche nach einer Stadt");
    submitButton.innerHTML = "SUCHE";
    clearAllButton.innerHTML = "Alles Löschen";
  } else if (e.target.id == "en") {
    lang = "en";
    myInput.setAttribute("placeholder", "🔍 Search for a city");
    submitButton.innerHTML = "SEARCH";
    clearAllButton.innerHTML = "Clear all cities";
  }
  myInput.focus();
});

//todo clear all cities
clearAllButton.addEventListener("click", () => {
  allCities.innerHTML = "";
  cities = [];
  myInput.focus();
});

const getWeatherDataFromApi = async () => {
  try {
    const response = await fetch(url).then((response) => response.json());
    const { main, name, weather, sys } = response;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    if (cities.indexOf(name) == -1) {
      cities.unshift(name);
      allCities.innerHTML =
        `
      <li class="city list-unstyled" id=${name}>
        <button class="single-clear-btn btn btn-success">X</button>
              <div class="card" style="width: 14rem" >
                <img src="./img/${weather[0].icon}.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h2>${name}<sup class="ms-2 fs-5 ps-1 pe-1" style="background-color: orange;">${sys.country}</sup></h2>
                  <div class="city-temp fs-3 fw-bolder">
                    ${Math.round(main.temp)} <sup>°C</sup>
                  </div>
                  <figure>
                    <img class="city-icon" src="${iconUrlAWS}">
                    <figcaption class="mb-3">${weather[0].description}</figcaption>
                    <span> 🔼${main.temp_max}<sup>°C</sup></span><span>🔽${main.temp_min}<sup>°C</sup></span>
                  </figure>
                </div>
              </div>
      </li>` + allCities.innerHTML;
      //! single clear
      const singleClearButton = document.querySelectorAll(".single-clear-btn");
      singleClearButton.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          delete cities[cities.indexOf(e.target.closest(".city").id)];
          //todo cities.splice(cities.indexOf(e.target.closest(".city").id),1) //development aşamasında
          e.target.closest(".city").remove();
          console.log(cities);
        });
      });
    } else {
      if (lang == "de") {
        warning.innerText = `Sie kennen das Wetter für die ${name} bereits. Bitte suchen Sie nach einer anderen Stadt 😉`;
      } else {
        warning.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
      }

      setInterval(() => {
        warning.innerText = "";
      }, 3000);
    }
  } catch (error) {
    if (lang == "de") {
      warning.innerText = `Stadt nicht gefunden`;
    } else {
      warning.innerText = "City not found!";
    }
    setInterval(() => {
      warning.innerText = "";
    }, 3000);
  }
};
