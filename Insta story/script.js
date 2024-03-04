
   var images = [
            {
                img:"https://plus.unsplash.com/premium_photo-1700984292461-fa2d83c28c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
                dp:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww"
             },
             {
                img:"https://images.unsplash.com/photo-1683009427470-a36fee396389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
                dp:"https://plus.unsplash.com/premium_photo-1688497831081-836510928186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww"
             },
             {
                img:"https://images.unsplash.com/photo-1703270102010-0003360a821f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx80",
                dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
             },
             {
                img:"https://images.unsplash.com/photo-1703217889032-c951a2934609?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
                dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
             }
            ];

            
   var storiya = document.querySelector("#storiya");
   var clutter = "";


      images.forEach(function(value,index){

      clutter += ` <div id="singlestory">
               <img id="${index}" src="${value.dp}" alt="">
      </div>`
})

 
    
   storiya.innerHTML = clutter;

      storiya.addEventListener("click",function(dets){
            document.querySelector("#full-scr").style.display = "block";
            document.querySelector("#full-scr").style.backgroundImage = `url(${images[dets.target.id].img})`;

            setTimeout(function(){
               document.querySelector("#full-scr").style.display = "none";
            },2000)
      })