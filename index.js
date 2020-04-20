//var moment = require ('moment')
//var temp = document.getElementById('temp')
var button = document.getElementById('#btn1')
button.addEventListener('click',function(){
    var inputValue = document.getElementByClass('.inputValue').value
    var name = document.getElementByClass('.name');
    var temp = document.getElementByClass('.temp');
    var desc = document.getElementByClass('.desc');
    var NowMoment = moment();
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue}&units=imperial&appid=70058c19934ab36e73a95f859c747db1`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        temp.innerHTML = Math.floor(data.main.temp) + '&#8457;'
        name.innerHTML = data.name
        desc.innerHTML = data.weather[0].description
    var lat=(data.coord.lat);
    var lon=(data.coord.lon);
    console.log(lat)
    console.log(lon)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=70058c19934ab36e73a95f859c747db1`)
    .then(response => response.json())
    .then(data => {
        console.log(data.timezone)
        var time=(moment().tz(data.timezone).format('hh:mm z'))
        let eDisplayMoment = document.getElementById('displayMoment');
        eDisplayMoment.innerHTML = time;
    })    
.catch(err => alert("invalid zip!"))
});
})


//70058c19934ab36e73a95f859c747db1