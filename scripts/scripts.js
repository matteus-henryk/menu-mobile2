const btnMenu = document.querySelector('.hamburguer');

btnMenu.addEventListener('click', () => {
  const menuItems = document.querySelector('.menu');
  
  btnMenu.classList.toggle('active');
  menuItems.classList.toggle('active');

})