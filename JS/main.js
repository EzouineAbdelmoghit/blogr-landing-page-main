arrow=document.querySelectorAll(".light")
hum = document.querySelector(".open")


arrow.forEach(element => {  
    console.log(element.parentElement);
    element.parentElement.addEventListener("click",function(e){
        arrow.forEach(el=>{
            if(el.parentElement!=e.target && e.target != el.parentElement.children[0] ){
                el.parentElement.children[0].classList.remove("rot")
                el.parentElement.children[1].classList.remove("more")
            }
    })
        console.log(element.parentElement.children[0])
        element.parentElement.children[0].classList.toggle("rot")
        element.parentElement.children[1].classList.toggle("more")
    })
    
});
console.log(hum.src);
hum.addEventListener("click",function(){
    if(hum.src.includes("images/icon-hamburger.svg")){
        document.querySelector(".menu-m").style.display="flex"
        hum.src="images/icon-close.svg"
    }else{
        document.querySelector(".menu-m").style.display="none"
        hum.src="images/icon-hamburger.svg"
    }
})