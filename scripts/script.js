var hour = 0;
var minute = 0;
var second = 0;
var heading_time = document.getElementById("time-display");
var sec = 0;
var min = 0;
var hr = 0;
var dateObject;
var interval;
var check = 0;
// Display of time on top of page
interval = window.setInterval(calc, 1000);
function calc() {
  dateObject = new Date();
  hour = dateObject.getHours();
  minute = dateObject.getMinutes();
  second = dateObject.getSeconds();
  if(hour<10)
    hour = `0${hour}`;
  if(minute<10)
    minute = `0${minute}`;
  if(second<10)
    second = `0${second}`;
  heading_time.innerHTML = `${hour}:${minute}:${second}`;
}

// Option for selecting a stopwatch
function stp() {
  window.clearInterval(interval);
  dateObject = new Date("January 1, 2020 00:00:00");
  heading_time.innerHTML = "00:00:00";

  // Changing the title of the button
  var btn1 = document.getElementById("stpw-button");
  btn1.innerHTML = "Start";

  // Setting up methods for new buttons
  btn1.onclick=ch();

  // btns[1].onclick="stop()";
  // increment();
}

// Checking
function ch(){
  if(check>1)
    increment();
}

// When the start button is pressed
function increment() {
  sec += 1;
  if(sec<60) {
    dateObject.setSeconds(sec);
  }
  else {
    sec = 0; min += 1;
    dateObject.setSeconds(sec);
    if (min<60)
      dateObject.setMinutes(min);
    else {
      min = 0; hr += 1;
      dateObject.setMinutes(min);
      if (hr<24)
        dateObject.setHours(hr);
      else {
        hr = 0;
        dateObject.setHours(0);
      }
    }
  }
  hour = dateObject.getHours();
  minute = dateObject.getMinutes();
  second = dateObject.getSeconds();
  if(hour<10)
    hour = `0${hour}`;
  if(minute<10)
    minute = `0${minute}`;
  if(second<10)
    second = `0${second}`;
  heading_time.innerHTML = `${hour}:${minute}:${second}`;
  setInterval(increment,1000);
}

function stop() {

}
