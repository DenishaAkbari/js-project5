let pr131 = document.querySelector('.pr131');
let pr13 = document.querySelector('.pr13');
const paragraph = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";



pr13.innerHTML = paragraph.replaceAll('dog', 'cat');
pr131.innerHTML = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
