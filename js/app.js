var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

$("#create").on("click", function() {
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    $("#xForY").text('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
});

var favorites = [];
$("#save").on("click", function() {
    favorites.push($("#xForY").text());
    console.log(favorites);
});

var favList = document.getElementById("favorites");
$("#print").on("click", function() {
    favList.innerHTML = "";
    favorites.forEach(function(fave){
        favList.innerHTML += (fave + "<br>");
    })
});