
const click = document.querySelector("#menu")
let checked = document.querySelector(".close-menu").checked = true;
const body = document.querySelector("body")
function openMenu (){
    let menuLateral = document.querySelector(".container-left");
    
    
    
    if(checked === true) {
    
        menuLateral.style.display ='none';
        checked = document.querySelector(".close-menu").checked = false;
        click.replaceChildren("☰")
        click.style.backgroundColor=""
        click.style.border=""
        body.style.overflowY=""
        
        
       

        
       
        
    } else {
        checked = document.querySelector(".close-menu").checked = true;
        click.replaceChildren("x")
        click.style.backgroundColor="#000"
        click.style.border="solid 0.5px #fff"
        click.style.width="40px"
        click.style.display="flex"
        click.style.justifyContent="center"
        menuLateral.style.display ='';
        menuLateral.style.transition=" 5s linear;"
        body.style.overflowY="hidden"
     } 
    
}
click.addEventListener("click",openMenu)
 openMenu()

      
 const sair = document.querySelector("#sair");
    sair.addEventListener('click', function () {

        location.href='login.html';
        
    
    } )


