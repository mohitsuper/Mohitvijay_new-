
/*var side = document.getElementsById('sidebar');

function openmen(){
  side.style.right = '0';
}

function closemen(){
    side.style.right = '100%';
}*/



var sidemeu = document.getElementById('sidemenu');

var ac = document.getElementsByClassName('active')[0];
  
  function openmenu(){
    sidemenu.style.right ='0';
  }
  
  function closemenu(){
        sidemenu.style.right ='100%';

  }
  
  
  remove =() =>{
    ac.style.width='0%';
  }