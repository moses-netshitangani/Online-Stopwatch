// Variables for time and stopwatch
var hour = 0;
var minute = 0;
var second = 0;
var heading_time = document.getElementById("time-display");
var sec = 0;
var min = 0;
var hr = 0;
var dateObject;
var interval; var start_stpw;
var stpw_button = document.getElementById("stpw");
var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");
var continue_button = document.getElementById("continue");
var reset_button = document.getElementById("reset");

// Display of time on top of page
interval = window.setInterval(time, 1000);

// The Time function
function time() {
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
function stpw() {
  window.clearInterval(interval);
  dateObject = new Date("January 1, 2020 00:00:00");
  heading_time.innerHTML = "00:00:00";

  // display of Start button
  stpw_button.style.display="none";
  start_button.style.display="inline-block";
}

// The Start method
function start(){
  start_stpw =  window.setInterval(increment,1000);
  start_button.style.display="none";
  stop_button.style.display="inline-block";
  reset_button.style.display="inline-block";
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
}

// The Continue method
function conti(){
  start_stpw = window.setInterval(increment, 1000);
  continue_button.style.display = "none";
  stop_button.style.display = "inline-block";
}

// The Reset method
function reset(){
  window.clearInterval(start_stpw);
  heading_time.innerHTML = "00:00:00";
  if(stop_button.style.display == "inline-block")
  {
    stop_button.style.display = "none";
    continue_button.style.display = "inline-block";
  }
  sec = 0; min = 0; hr = 0;
  dateObject = new Date("January 1, 2020 00:00:00");
}

// The Stop method
function stop() {
  window.clearInterval(start_stpw);
  stop_button.style.display = "none";
  continue_button.style.display = "inline-block";
}
