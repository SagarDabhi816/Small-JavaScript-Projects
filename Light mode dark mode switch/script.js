

   var btn = document.querySelector("button");
   var bg = document.querySelector("body")
   var h1 = document.querySelector("h1")
   var currentmode = "Dark"
            
      btn.addEventListener("click",() =>{
                     
            if(currentmode === "Dark"){
               currentmode = "Light"
               btn.style.color = "black"
               btn.style.border = "2px solid black"
               btn.innerHTML = "<i class='ri-moon-line'></i>"
               h1.innerText = "Light mode Enabled"
               h1.style.color = "black"
               bg.style.backgroundColor = "#e5e5e5"

            console.log(currentmode)
            }
            else{
               currentmode = "Dark"

               btn.style.color = "white"
               btn.style.border = "2px solid white"
               btn.innerHTML = "<i class='ri-sun-line'></i>"
               h1.innerText = "Dark mode Enabled"
               h1.style.color = "WHITE"
               bg.style.backgroundColor = "#2D3138"

               console.log(currentmode)
            }
                  
         })
                  

