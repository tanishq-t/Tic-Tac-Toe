let player1 = prompt("Enter the name of Player 1: ");
let name1=document.querySelector("#player1");
name1.innerText = player1;
let player2 = prompt("Enter the name of Player 2: ");
let name2=document.querySelector("#player2");
name2.innerText = player2;

let chance0=true; //matlab ki Player1 ki chance hai
const winning =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = ()=>{
    chance0=true;
    enableboxes();
    winName.innerText="";
    blink_1.style.background="red";
    blink_2.style.backgroundColor="transparent";

}

let boxes = document.querySelectorAll(".mark-box");
let resetbtn = document.querySelector(".reset");
let blink_1 = document.querySelector("#blink-1");
let blink_2 = document.querySelector("#blink-2");
let winName = document.querySelector(".winner-name");

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

blink_1.style.backgroundColor="red";
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked!")
        if(chance0){
            box.innerText="O";
            blink_1.style.background="transparent";
            blink_2.style.backgroundColor="red";
            chance0=false;
        }
        else{
            box.innerText="X";
            blink_2.style.backgroundColor="transparent";
            blink_1.style.backgroundColor="red";
            chance0=true;
        }
        box.disabled = true;  //To ensure that the value cannot be changed from O to X in same box

        checkWinner();
    })
})

const checkWinner = ()=>{
    for(let pattern of winning){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1=="O" && pos1==pos2 && pos2==pos3){
                winName.innerText=player1;
                disableboxes();
            }
            else if(pos1=="X" && pos1==pos2 && pos2==pos3){
                winName.innerText=player2;
                disableboxes();
            }
        }
    }
}

resetbtn.addEventListener("click",resetGame);