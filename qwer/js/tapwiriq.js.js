var ul=document.querySelector("#ul");
var button=document.querySelector(".push")
var input=document.querySelector("input")



button.addEventListener("click",function(){
    
    ul.innerHTML="";
    for(var i=0; i<input.value;i++){
        var li=document.createElement("li")
        ul.appendChild(li);
     
     }

     })


