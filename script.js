const btnClick = () => {
     const inputField = document.getElementById('input-field');
     const inputFieldValue = inputField.value;
     
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldValue}&appid=fb4ac0dc1f4e461b052c750dcf656f21`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayThis(data))
}

const displayThis = cityNames => {
     console.log(cityNames);
     const cityNameHaree = document.getElementById('cityNameHare');
     cityNameHaree.innerText = cityNames.name;
     const tempareturee = document.getElementById('tempareture');
     tempareturee.innerText = Math.floor(cityNames.main.temp);
     const cloudss = document.getElementById('clouds');
     cloudss.innerText = `Clouds: ${cityNames.clouds.all}`;
     const winds = document.getElementById('wind');
     winds.innerText = `Wind: ${cityNames.wind.speed}km/h`;
     const Humiditys = document.getElementById('Humidity');
     Humiditys.innerText = `Humidity: ${cityNames.main.humidity}%`;
     const airPressuree = document.getElementById('airPressure');
     airPressuree.innerText = `Air Pressure: ${cityNames.main.pressure}`;
}