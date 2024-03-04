

const textbox = document.querySelector("#textbox");   
const listcontainer = document.getElementById("list-container");



       function Addtask(){
           if(textbox.value === ''){
                  alert("Write Something to Add in list");
           }
           else{
                 let li = document.createElement("li");
                  li.innerHTML = textbox.value;
                  listcontainer.appendChild(li);

                  let span = document.createElement("span");
                     span.innerHTML = "\u00d7";
                     li.appendChild(span);
           }
           textbox.value = "";
           savedata();
      }


       listcontainer.addEventListener("click",function(e){


                     if(e.target.tagName === "LI"){                         
                            e.target.classList.add("cheaked");  
                            savedata();     
                     }
                   else if(e.target.tagName === "SPAN") {
                     e.target.parentElement.remove();
                     savedata();
                   }
       },false)

       
       function savedata(){
              localStorage.setItem("data",listcontainer.innerHTML)
       }
       function showtask(){
             listcontainer.innerHTML = localStorage.getItem("data");  
       }

showtask();


