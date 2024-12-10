//this is the api key provided by open weather
const key = "7b3e1822f926176351fccdf439293804";
// url for searching with query
const url = "http://api.openweathermap.org/data/2.5/weather?units=metric";
//here we access the input field html element 
const search = document.getElementById('search');
const inputcity = document.getElementById('inputcity');

//action for searching + acessing search element
search.addEventListener("click", weather);
inputcity.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        weather();
    }
});
//asynchronous function 
async function weather() {
    let city = inputcity.value;  //user given city
   
    //this is for fetching data from server using url, key and search value
    const response = await fetch(url + `&q=${city}` + `&APPID=${key}`);
    var data = await response.json(); //formatting in json
   //  operation of temperature
    let temp = document.getElementById('temp');
    let dtt = data.main.temp;
    temp.innerHTML = dtt;
     // keeping city name as it is entered
    let cnm = document.getElementById('cityname');
    cnm.innerHTML=city;
    //operation for humidity
    let hdm = document.getElementById('humidity');
    hdmdtt = data.main.humidity;
    hdm.innerHTML=hdmdtt;
    //operation for windspeed
    let wdn = document.getElementById('windspeed');
    wdndtt = data.wind.speed;
    wdn.innerHTML=wdndtt;
    //operation for state
    let wthh = document.getElementById('state');
    wthhdtt = data.weather[0].main;
    wthh.innerHTML=wthhdtt;
    //operation for pressure
    let press= document.getElementById('pres');
    press.innerHTML=data.main.pressure;
    //operations for changing images of weather according to the api server data
    let myimage = document.getElementById('myimage')

    if(data.weather[0].main=="Clear"){
        myimage.src='./images/clear.png';
    }else if(data.weather[0].main=="Clouds"){
        myimage.src='./images/clouds.png'
    }else if(data.weather[0].main=="Haze"){
        myimage.src='./images/mist.png';
    }else if(data.weather[0].main=="Rain"){
        myimage.src='./images/rain.png';
    }else if(data.weather[0].main=="Snow"){
        myimage.src='./images/snow.png';
    }

}
//this code part is for the current date and day..
const today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = days[today.getDay()];
const date = today.toLocaleDateString();
let set_day = document.getElementById('day');
set_day.innerHTML=day;
let set_date = document.getElementById('date');
set_date.innerHTML=date;
 

