// const form = document.querySelector(".form")
// const calculateBtn = document.querySelector(".button")
// const input = document.querySelector(".input")
// const result = document.querySelector('.result');


// form.addEventListener("submit", (event)=>{
//     event.preventDefault()
//     const number = input.value;
//     const calculatedValue = factorial(number);
//     result.value = "The factorial of " + number + " is " + calculatedValue;
//     console.log("The factorial of " + number + " is " + calculatedValue);
// })

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//         return answer;
//     }else{
//         for(var i = n ; i >= 1 ; i --){
//             answer = answer * i;
//         }
//         return answer
//     }
// }




const form = document.querySelector('.form');
const input = document.querySelector('.input');
const calculateBtn = document.querySelector('.button');
const result = document.querySelector('.result');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const number = input.value;
    const calculatedValue = factorial(number);
    result.value = ('The factorial of ' + number + ' is ' + calculatedValue);
    console.log('The factorial of ' + number + ' is ' + calculatedValue)
})



function factorial(i){
let answer = 1;

if (i == 0 || i == 1 ){
    return answer
} else{
    for (i == 0; i >=1 ; i --)
    answer = answer * i
    return answer
}

}

factorial() 