
var finalDate = new Date("Dec 31, 2017 12:00:00").getTime();


var init = setInterval(function() {
  var timeNow = new Date().getTime();

  var distance = finalDate - timeNow;

  //Calculate time
  var days = Math.floor(distance/(1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Displaying the time remaining
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    clearInterval(init);


}, 1);

var x = setInterval(function() {
  var timeNow = new Date().getTime();

  var distance = finalDate - timeNow;

  //Calculate time
  var days = Math.floor(distance/(1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Displaying the time remaining
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if(distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "It's time.";
  }
}, 1000);
