let count = 0;
let number = document.getElementById("number");
number.innerHTML = count;
document.getElementById("number").innerHTML = 0;

let increaseBtn = document.getElementById('increase');
increaseBtn.addEventListener("click" , increase)

let decreaseBtn = document.getElementById('decrease');
decreaseBtn.addEventListener("click" , decrease)

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener("click" , reset)

function increase(){
    count = count + 1;
    number.innerHTML = count
}

function decrease(){
    if (count > 0){
        count = count - 1;
        number.innerHTML = count
    }
}

function reset(){
    count = 0;
    number.innerHTML = count
}