const modo = document.querySelector(".btn")
const img= document.getElementById("imagem")
const body= document.body
const menu = document.querySelector("header")


modo.addEventListener("click",()=>{   
        if(body.classList.toggle("dark")){
                
                img.src="/assets/fotos/sun-moon.svg"
                img.style.float="left"
                menu.style.backgroundColor="#010409"
        }else{
                img.style.float="right"
                img.src="/assets/fotos/moon.svg"
                menu.style.backgroundColor="#0D1117"
        }
        
})




//biblioteca de efeitos css
AOS.init();