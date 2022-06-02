var c=console.log.bind(document);

let date=document.getElementById("date");
let searchBtn=document.getElementById("searchBtn");
let fajr=document.getElementById("fajr");
let dhuhr=document.getElementById("dhuhr");
let asr=document.getElementById("asr");
let imsak=document.getElementById("imsak");
let isha=document.getElementById("isha");
let maghrib=document.getElementById("maghrib");
let midnight=document.getElementById("midnight");
let sunrise=document.getElementById("sunrise");
let sunset=document.getElementById("sunset");

searchBtn.addEventListener("click", function(){
    let dateValue=date.value;
    let dateParts=dateValue.split("-");
    c(dateParts)


    axios
    .get(`http://api.aladhan.com/v1/calendar?latitude=40.409264&longitude=49.867092&method=2&month=${dateParts[1]}&year=${dateParts[0]}`)
    .then(resp => {
        let currentDate=dateParts[2]-1;
        let times=resp.data.data[currentDate].timings;
        fajr.innerText=times.Fajr;
        dhuhr.innerText=times.Dhuhr;
        asr.innerText=times.Asr;
        imsak.innerText=times.Imsak;
        isha.innerText=times.Isha;
        maghrib.innerText=times.Maghrib;
        midnight.innerText=times.Midnight;
        sunrise.innerText=times.Sunrise;
        sunset.innerText=times.Sunset;
});
})

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}