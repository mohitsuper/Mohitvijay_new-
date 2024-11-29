gsap.registerPlugin(ScrollTrigger);

let navLinks = document.querySelectorAll('.a')
navLinks.forEach((v,i)=>{
  gsap.from(v,{
    duration: 1,
    opacity:0,
    y:50,
    ease: 'power2.out',
  });
})

gsap.from('#about', {
  y: 100, 
  scrollTrigger: {
      trigger: '#about', 
      start: 'top 80%', 
      end: 'bottom 80%', 
  }
});

let ServerList = document.querySelectorAll('.service-list');
ServerList.forEach((v,i)=>{
  gsap.from(v, {
    y: 100, 
    scrollTrigger: {
        trigger: v, 
        start: 'top 80%',
        end: 'bottom 90%', 
      }
  });
})


let Project  = document.querySelectorAll('.project');
Project.forEach((v,i)=>{
  gsap.from(v, {
    y: 100, 
    scrollTrigger: {
        trigger: v, 
        start: 'top 90%', 
        end: 'bottom 100%', 
    }
  });
})


let heading = document.querySelectorAll('.heading')
heading.forEach((v,i)=>{
  gsap.from(v,{
    x:-500,
    duration:0.5,
    ease: 'power2.out',
    scrollTrigger:{
      trigger: v, 
      start: 'top 50%', 
      end: 'bottom 100%', 
    }

  })
})

var Menu = document.querySelector(".menu");
var Nav = document.querySelector("#sidemenu");
var Close = document.querySelector(".close");



Menu.addEventListener("click",function(){
 Nav.style.width = "100%";
})

Close.addEventListener("click",function(){
  Nav.style.width = "0%";

})
