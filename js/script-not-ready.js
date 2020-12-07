const hamburger = document.getElementById('hamburger');
const times = document.getElementById('times');



hamburger.addEventListener('click', function() {
  const mobileOpen = document.getElementById('menu-open');
  console.log(mobileOpen);
  this.classList.add('hide');
  mobileOpen.classList.add('menu-animation', 'show');
  times.classList.add('show');

  
  times.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.remove('show');
    mobileOpen.classList.add('menu-animation-rev');
    hamburger.classList.remove('hide');
    setTimeout(function(){
      mobileOpen.classList.remove('show', 'menu-animation-rev');
       mobileOpen.classList.remove('menu-animation');
    },900);
    
  });
});




