var timer = 80;
var score = 0;
var rnHit = 0;

function makeBubble() {
    var clutter = "";
for(var i=1;i<=120 ;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;


}
function newHit() {
    rnHit = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent = rnHit;
}
function runTimer() {
    var timerin = setInterval(function () {
     if (timer > 0){
     timer--; 
     document.querySelector(".timeri").textContent = timer;  
    } else{
        clearInterval(timerin);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> 
        <h2>${score - 10}</h2>`;
     }
    },1000); 
}
function incScore() {
    
    document.querySelector(".newScore").textContent = score;
    score +=10;
}

// EVENT BUBBLING = jis elementn par click kare ga uspe event raise hoga , agar us element pr event listener nhi hua to uske parent pe search karega ga if vaha bhi nhi hua to parent ke bhi parent pr listener dhundega
document.querySelector("#pbtm").addEventListener("click", 
function (details){
//target vo element hai jispe click hua h,textContent sirf uska text lega,Number humko jo detail milegi string me usko integer me convert kar dega    
    var clicknum = Number(details.target.textContent);
    if (clicknum === rnHit){
        incScore();
        makeBubble();
        newHit();
       
    }
})

runTimer();
makeBubble();
newHit();
incScore(); 