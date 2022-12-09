/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-07-JS/sw.js", {
    scope: "/Unit-5-07-JS/",
  })
}

"use strict"
  
function calculate() {
  const number = parseInt(document.getElementById("pay").value);
  let answer = 0;

  for (let counter = 1; counter <= number; counter++) {
    answer += counter;
  }
  document.getElementById("answers").innerHTML = "The answer is: " + answer;
}
