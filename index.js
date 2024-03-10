let menu = document.querySelector('.hamburger');
let menulist = document.querySelector('.nav-menu')
let open = false;
menu.addEventListener("click",()=>{
  if(open === false){
    menulist.style.left = "0%";
    open = true;
    menu.innerHTML= "<h1 style='color:white;font-style:bold;'>X</h1>";
  }
  else{
    menulist.style.left = "-100%";
    open = false;
    menu.innerHTML = "<span class='bar'></span><span class='bar'></span><span class='bar'></span>";
  }
});