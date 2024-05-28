const sentence = 'airplane';
let pr9 = document.querySelector('.pr9');

let index = 2;

pr9.innerHTML = `airplane ${index} = ${sentence.at(index)}`;

// 9.2
let x = "oxoxoxox";
let output = "";
let pr91 = document.querySelector('.pr91');

for (let i = 0; i < x.length; i++) {
    if (i % 2 === 0) {
        output += x[i].toLowerCase();
    } else {
        output += x[i].toUpperCase();
    }
}

pr91.innerHTML = output;
// 9.3

const book = "A New Java Book";
let pr93 = document.querySelector('.pr93');

// console.log(city.toLocaleUpperCase('en-US'));

pr93.innerHTML = "A New Java Book" + " = " +book.toLocaleUpperCase('en-US');
// Expected output: "ISTANBUL"

// console.log(city.toLocaleUpperCase('TR'));
// Expected output: "İSTANBUL"