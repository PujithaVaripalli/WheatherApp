//openweather api

const apikey= "70eb5da7be143f0af0f1e8c8a8cfcb62";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector('.search .input1');
const searchBtn=document.querySelector('.search #btn1');
const weatherIcon=document.querySelector('.weather-icon');

//fetch data from the API
async function CheckWeather(city){
    const responce=await fetch(apiUrl + city + `&appid=${apikey}`);

    if(responce.status == 404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
    }
   else{

    var data=await responce.json();
    console.log(data);


//     document.querySelector('.weather').style.display="flex";

//     //display data
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML= data.main.humidity + "%";
    document.querySelector('.wind').innerHTML= data.wind.speed + "km/h";
    
//    //change weather icon
   if(data.weather[0].main == "Clouds"){
    weatherIcon.src="https://allroundclub.com/blog/wp-content/uploads/2021/10/how-to-draw-clouds.png";
   }
   else if(data.weather[0].main == "Clear") {
    weatherIcon.src="https://as2.ftcdn.net/v2/jpg/02/87/32/93/1000_F_287329359_yf8zNSEXib1R3nelZjZkbM3Ei7idVxyJ.jpg";

   }

   else if(data.weather[0].main == "Rain") {
    weatherIcon.src="https://www.pngitem.com/pimgs/m/5-56832_cloud-weather-rain-rainfall-rainclouds-raincloud-weather-symbols.png";

   }
   else if(data.weather[0].main == "Drizzle") {
    weatherIcon.src="https://c8.alamy.com/comp/2JTRBJF/weather-forecast-cloud-rain-and-sun-icon-vector-color-outline-symbol-rainy-day-weather-forecast-of-overcast-with-heavy-showers-and-cold-drizzle-2JTRBJF.jpg";

   }
   else if(data.weather[0].main == "Mist") {
    weatherIcon.src="https://www.pngitem.com/pimgs/m/19-198457_fog-mist-foggy-misty-nebulous-brumous-cloudy-foggy.png";

   }
   else if(data.weather[0].main == "Snow") {
    weatherIcon.src="https://img.freepik.com/free-photo/3d-winter-snowy-landscape_1048-11515.jpg";

   }
   document.querySelector('.weather').style.display='block';
   document.querySelector(".error").style.display="none";
   document.getElementById('footer').style.margin="0%";

   }


}

searchBtn.addEventListener("click", ()=>{
  CheckWeather(searchBox.value);
}); 






