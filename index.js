const burger= document.querySelector(".burger");
const navLinks=document.querySelector('.nav-links');
const links=document.querySelectorAll('.nav-links li');
burger.addEventListener("click",showNavLinks)

function showNavLinks(){
    navLinks.classList.toggle("nav-Active");
    console.log('hi');

    links.forEach((link, index)=>{
        console.log(index/7);
        if(link.style.animation){
            link.style.animation=''
        }else{
        link.style.animation=`navFade .5s ease forwards ${index / 9 + 0.1}s`;
            
        }
    })
    burger.classList.toggle('toggle')
}