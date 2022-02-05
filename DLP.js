const containerElement = document.querySelector('.container');
const leftEmement = document.querySelector('.left');
const rightElement = document.querySelector('.right');

leftEmement. addEventListener("mouseenter", ()=>{
    containerElement.classList.add("active-left")
})

leftEmement.addEventListener("mouseleave", () => {
    containerElement.classList.remove("active-left")
})

rightElement.addEventListener("mouseenter", () =>{
    containerElement.classList.add("active-right")

})

rightElement.addEventListener("mouseleave", () => {
    containerElement.classList.remove("active-right")
})