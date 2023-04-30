

let logbt=document.querySelector("#login-bt")

let signbt=document.querySelector("#sign-bt")

logbt.onclick=()=>{
   
   let nodeList= document.querySelectorAll(".sign").forEach((e)=>{
    e.style.display="block"
   })
   
    document.querySelectorAll(".login").forEach((e)=>{
     e.style.display="none"
    })
}
signbt.onclick=()=>{
   
    document.querySelectorAll(".login").forEach((e)=>{
        e.style.display="block"
       
       })
    document.querySelectorAll(".sign").forEach((e)=>{
     e.style.display="none"
    })
}