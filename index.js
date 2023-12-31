$(document).ready( function (){
const boxWidth = parseInt($("#box").css("width").slice(0,-2));
const initialLeft = $("#box").css("left").slice(0,-2);
const initialTop = $("#box").css("top").slice(0,-2);

let newLeft = parseInt(initialLeft);
let newTop = parseInt(initialTop);
let yDiff = 2*Math.random() + 1; //random value between 1 and 3
let xDiff = Math.sqrt(10 - yDiff*yDiff); //random value between 1 and 3

const loop = setInterval(moveBox, 10);

function moveBox(){
    if(newLeft + boxWidth + 2 >= innerWidth || newLeft < initialLeft){
        xDiff *= -1;
    }
    if(newTop + boxWidth + 2 >= innerHeight || newTop < 10){
        yDiff *= -1;
    }
    newLeft = newLeft + xDiff;
    newTop = newTop + yDiff;
    $("#box").css("left", newLeft);
    $("#box").css("top", newTop);
};
});
