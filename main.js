
var Menu = document.querySelector(".menu");
var Nav = document.querySelector("#sidemenu");
var Close = document.querySelector(".close");



Menu.addEventListener("click",function(){
 Nav.style.width = "100%";
})

Close.addEventListener("click",function(){
  Nav.style.width = "0%";

})
