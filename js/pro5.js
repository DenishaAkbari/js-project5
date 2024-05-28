const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
let pr5 = document.querySelector('.pr5');

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
pr5.innerHTML = array.filter(isPrime);
