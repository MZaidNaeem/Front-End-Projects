let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("game start");
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 500);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    // Random button
    let randIdx = Math.floor(Math.random() * 4); // Corrected to 4 to include all four buttons
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    gameflash(randBtn);
}


function checkAns(index){
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game Over! Your score was ${level*10} \nPress any key to start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector('body').style.backgroundColor="#f5f5f5";

        },2000)
        reset();
    }


}

function btnpress(){
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute('id');
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
    
