
const boxWidth = parseInt($("#box").css("width").slice(0,-2));
const initialLeft = $("#box").css("left").slice(0,-2);
const initialTop = $("#box").css("top").slice(0,-2);

let newLeft = parseInt(initialLeft);
let newTop = parseInt(initialTop);
let yDiff = Math.random() + 1; //random value between 1 and 2
let xDiff = Math.sqrt(5 - yDiff*yDiff); //random value between 1 and 2

const loop = setInterval(moveBox, 1);

function moveBox(){
    if(newLeft + boxWidth + 10 >= innerWidth || newLeft < initialLeft){
        xDiff *= -1;
    }
    if(newTop + boxWidth + 10 >= innerHeight || newTop < 10){
        yDiff *= -1;
    }
    newLeft = newLeft + xDiff;
    newTop = newTop + yDiff;
    $("#box").css("left", newLeft);
    $("#box").css("top", newTop);
}
