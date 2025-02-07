/*
const abrirMenu= document.querySelector('.btn-menu')
const cerrarMenu= document.querySelector('.equis')
const wMenu= document.querySelector('.header-menu')

function bloquearBody (){
    document.body.style.height = "100vh"; // Altura máxima de la pantalla
    document.body.style.overflow = "hidden"; // Oculta el scroll
}
function normalizarBody(){
    document.body.style.height = "auto"; // Altura máxima de la pantalla
    document.body.style.overflow = "auto"; // Oculta el scroll
}

abrirMenu.addEventListener('click', () =>{
    wMenu.classList.remove ('ocultar')
    wMenu.classList.add ('mostrar')
    bloquearBody()
    
    
})
cerrarMenu.addEventListener('click', () =>{
    wMenu.classList.remove ('mostrar')
    wMenu.classList.add ('ocultar')
    normalizarBody()
    
})

*/

// Seleccionar elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Función para alternar el menú
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');

  // Añadir un pequeño retraso a cada elemento del menú
  const menuItems = document.querySelectorAll('.menu ul li');
  menuItems.forEach((item, index) => {
    item.style.setProperty('--i', index);
  });
});

// Función para cerrar el menú y redirigir a la página principal
function closeMenu() {
  menu.classList.remove('active');
  menuToggle.classList.remove('active');
  window.location.href = "#"; // Cambia esto por la URL de tu página principal
}


//menu panel

const panelMenu = document.querySelector('.panel-menu')
const cerrarPanel= document.querySelector('.cerrar-panel')

const servicesPanel= document.querySelector('.services-panel')

const footer= document.querySelector('.footer')
const feedback= document.querySelector('.feedback')
const services= document.querySelector('.services')
const allAbout= document.querySelector('.about')
const contact= document.querySelector('.contact')
const hero= document.querySelector('.hero')
const header= document.querySelector('.header')

panelMenu.addEventListener('click', () =>{
    services.classList.add('services-pfm')
    cerrarPanel.classList.remove('ocultar')
    footer.classList.add('ocultar')
    feedback.classList.add('ocultar')
    allAbout.classList.add('ocultar')
    contact.classList.add('ocultar')
    hero.classList.add('ocultar')
    header.classList.add('ocultar')
    
    

})

cerrarPanel.addEventListener('click', () =>{
    services.classList.remove('services-pfm')
    cerrarPanel.classList.add('ocultar')
    footer.classList.remove('ocultar')
    feedback.classList.remove('ocultar')
    allAbout.classList.remove('ocultar')
    contact.classList.remove('ocultar')
    hero.classList.remove('ocultar')
    header.classList.remove('ocultar')
    cerrarPanel.classList.add('ocultar')

})



