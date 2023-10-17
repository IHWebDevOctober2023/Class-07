// Counter using setTimeout
let counter = 0;
const callbackFunction = function () {
  console.log(counter);
  if(counter < 10){
      setTimeout(callbackFunction, 1000);
  }
 
  counter += 1;
};
 
setTimeout(callbackFunction, 1000);

// Counter using setInterval 

let counter2 = 1;
const callbackFunction2 = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction2, 1000);

  counter2 += 1;

  if (counter > 10) {
    clearTimeout(timeoutId);
  }
};

let timeoutId = setTimeout(callbackFunction, 1000);

// REVERSE COUNTDOWN (exercise in portal)

let i = 10;
const intervalId = setInterval(function () {
  if (i > 0) {
    console.log(i);
  } else {
    console.log('Pop!');
    clearInterval(intervalId);
  }

  i--;
}, 1000);

