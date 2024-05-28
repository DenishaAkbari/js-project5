const num = [2,88,55,6,96,3,6,9,556,4];
const num1 = [88,55,556,2,3,5,4,1,2,444,];



let pr7 = document.querySelector('.pr7');
let pr71 = document.querySelector('.pr71');

num.sort(function(a, b) {
    return a - b;
});
num1.sort(function(a, b) {
    return b - a;
});

pr7.innerHTML = num;
pr71.innerHTML = num1;