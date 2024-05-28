const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let pr8 = document.querySelector('.pr8');

const result = words.filter((word) => word.length > 8);

pr8.innerHTML = result;
