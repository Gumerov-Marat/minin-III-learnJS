// function sayHi(phrase, who) {
//   alert(phrase + ', ' + who);
// }

// setTimeout(sayHi, 1000, "Привет", "Джон");

let conter = 0

let interval = setInterval(() => {
  console.log(++conter);
  
}, 600);

setInterval(() => {
  clearInterval(interval)
}, 3000);