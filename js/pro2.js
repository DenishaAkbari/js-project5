// for loop
const arr1 = [10,50];
let sum1 = 0;
let pr2 = document.querySelector('.pr2');
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}

// console.log(sum1);
pr2.innerHTML = " for loop sum :" + " " + sum1;




// foreachloop
const arr2 = [5,20];
let sum2 = 0;
let pr21 = document.querySelector('.pr21');
arr2.forEach((element) => sum2 += element);
pr21.innerHTML =  " for each loop :" + " " + sum2;

