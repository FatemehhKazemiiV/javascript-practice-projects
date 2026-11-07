let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue")
let greenBtn = document.getElementById("green")
let yellowBtn = document.getElementById("yellow")
let randomBtn = document.getElementById("random")


redBtn.addEventListener("click", function () {
    changeColor("red")
})

blueBtn.addEventListener("click", function () {
    changeColor("blue")
})

greenBtn.addEventListener("click", function () {
    changeColor("green")
})

yellowBtn.addEventListener("click", function () {
    changeColor("yellow")
})
randomBtn.addEventListener("click", function () {
    randomColor()
})

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.body.style.backgroundColor = rgb

}