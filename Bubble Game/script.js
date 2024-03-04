var time = 60;
var score = 0;
var hit = 5;



function incresescore(){
        score += 10;
        document.querySelector("#scoreval").textContent = score;
}

function hitcount(){
        hit = Math.floor(Math.random()*15);
        document.querySelector("#hit").textContent = hit;
}

function bubblecreate(){
    
        var clutter ="";
        for(var i = 1;i<=168;i++){
                let random = Math.random()*15;
                let newvalue = Math.floor(random);
            clutter += `<div class="bubble">${newvalue}</div>`;
        }
        document.querySelector("#pbtm").innerHTML = clutter

}
 
function runtimer(){

       var timer = setInterval(function(){
            if(time>0){
                time--;
            document.querySelector("#timeint").textContent = time;          
            }
            else{
                clearInterval(timer);
                document.querySelector("#hit").textContent = 0;
                document.querySelector("#pbtm").innerHTML = `<h1>Game over <br> Final Score is ${score}</h1>`;
            }
        },1000);
        
}


document.querySelector("#pbtm").addEventListener("click",function(details){
  var clickedno = Number(details.target.innerText);
  if(clickedno === hit){
        incresescore();
        hitcount();
        bubblecreate();
  }
  else{
    clearInterval(timer);
   
  }
})

hitcount();
bubblecreate();
runtimer();