const form = document.getElementById('form');
const base = document.getElementById('base');
const height = document.getElementById('height');
const result = document.getElementById('results');
const calculateBtn = document.getElementById('btn');

    var x = document.forms['form']['base'].value;
    var y = document.forms['form']['height'].value;

calculatedArea()
function calculatedArea(base, height){
    return (base * height)/ 2;
}
calculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const b = base.value
    const h = height.value
    const c = calculatedArea(b, h);
    if (b == "" || b == 0 || h == " "|| h == 0||x !== Number || y !== Number){
        result.value = ('Enter numeric value of base and height of triangle.')
    }else{
    result.value = ('The area of the triangle with base ' + b + ' and height ' + h + ' is ' + c.toFixed(2));
    }
});
