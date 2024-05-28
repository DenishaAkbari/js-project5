// // 1.1
// const mycolor = ["Red", "Green", "White", "Black"];
// let pr1 = document.getElementById('#pr1');
// pr1.innerHTML = mycolor.join(',');

// // 1.1
// const color = ["Red", "Green", "White", "Black"];
// let pr1_2 = document.getElementById('#pr1_2');
// pr1_2.innerHTML = mycolor.join('+');

// // 1.3
// const  myColor = ["Red", "Green", "White", "Black"];
// let pr1_3 = document.getElementById('#pr1_3');
// pr1_3.innerHTML = myColor.pop();
// pr1_3.innerHTML = myColor

// // 1.6
// const colorrrr = ["Red", "Green", "White", "Black"];
// let pr1_6 = document.getElementById('#pr1_6');
// pr1_6.innerHTML = colorrrr.shift();


// // 1.4
// const colorr = ["Red", "Green", "White", "Black"];
// let pr1_4 = document.getElementById('#pr1_4');
// pr1_4.innerHTML = colorr.shift();

// // 1.5
// const colorrr = ["Red", "Green", "White", "Black"];
// const count = colorrr.push('orange');
// let pr1_5 = document.getElementById('#pr1_5');
// pr1_5.innerHTML = colorrr;
const arraycolor = ["Red", "Green", "White", "Black"];
const arraycolor2 = ["Red", "Green", "White", "Black"];
const arraycolor3 = ["Red", "Green", "White", "Black"];
const arraycolor4 = ["Red", "Green", "White", "Black"];
const arraycolor5 = ["Red", "Green", "White", "Black"];

let pr5_1 = document.querySelector(".pr5_1");
let pr5_11 = document.querySelector(".pr5_11");
let pr5_12 = document.querySelector(".pr5_12");
let pr5_13 = document.querySelector(".pr5_13");
let pr5_14 = document.querySelector(".pr5_14");

arraycolor3.pop();
const arrayshift = arraycolor3.shift();
arraycolor5.splice(4, 1, 'orange');


pr5_1.innerHTML = arraycolor.join(",");
pr5_11.innerHTML = arraycolor2.join("+") ;
pr5_12.innerHTML = arraycolor3;
pr5_13.innerHTML = arrayshift;
pr5_14.innerHTML = arraycolor5;