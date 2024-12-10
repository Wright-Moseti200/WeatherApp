const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "293212ca047f8c918b343cb9dff94e43";
const button = document.querySelector("button");



async function weather()
{
    let value = document.querySelector("input").value;

    let response = await fetch(apiUrl+`q=${value}` + `&appid=${apiKey}`);
    let reading = await response.json();

    console.log(reading);

    let el = document.querySelector(".temp-num");
    el.innerHTML = reading.main.temp + "°k";

    let ment = document.querySelector(".city-name");
    ment.innerHTML = reading.name;

    let humidity = document.querySelector(".percentage");
    humidity.innerHTML = reading.main.humidity + " %";

    let windspeed = document.querySelector(".speed");
    windspeed.innerHTML = reading.wind.speed + " km/h";

    let image = document.querySelector(".img1");
    image.src = `images/${reading.weather[0].main}.png`;

    
}
 
button.addEventListener("click", weather);


let body = document.querySelector("body");    
function animate()
{
    body.classList.toggle("change");  
}
body.addEventListener("mouseover", animate);


