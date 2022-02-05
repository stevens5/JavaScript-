const form = document.querySelector('.form');
const input = document.querySelector('.input');
const calculateBtn = document.querySelector('.button');
const result = document.querySelector('.result');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const radius = input.value;
    const calculatedArea = area(radius);
    const calculatedCircumference = circumference(radius)
    result.value = ('The area of a circle with radius ' + radius + 'cm is ' + calculatedArea.toFixed(2) + 'cm. And the circumference is ' + calculatedCircumference.toFixed(2) + 'cm')
})
// var radius = input.value;
function area(radius){
    return radius * radius * Math.PI;
}
function circumference(radius){
    return 2 * Math.PI * radius;
}
