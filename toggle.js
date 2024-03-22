let btn=document.querySelector(".button")
let cir=document.querySelector(".circle")
let h2=document.querySelector("h2")
let h1=document.querySelector("h1")
let body=document.querySelector("body")
let count=0
cir.addEventListener("click",(e)=>{
    if(count%2==0){
    cir.style.float="right"
    cir.style.backgroundColor="white"
    btn.style.backgroundColor="green"
    h2.innerText="ON"
    h2.style.color="black"
    body.style.backgroundColor="black"
    h1.style.color="white"
    }
    if(count%2==1){
        cir.style.float="left"
    cir.style.backgroundColor="grey"
    btn.style.backgroundColor="grey"
    h2.innerText="OFF"
    h1.style.color="black"
    body.style.backgroundColor="white"
    }
    count++;
})