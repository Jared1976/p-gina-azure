const ccolor= document.getElementById('Tema');


function mensaje(){
    alert('correo enviado');
}

const b = document.getElementById('boton');
b.addEventListener('click', mensaje);

const c= document.getElementById('color');

const c1= document.getElementById('color1');
const t= document.getElementById('tcolor');

const t1 = document.getElementsByClassName('subt');
const txt= document.getElementById('txt');
function changecolor(){
   c.classList.toggle('color');
      c1.classList.toggle('color1');
      t1[0].classList.toggle('tcolor');
      t1[1].classList.toggle('tcolor');
      t1[2].classList.toggle('tcolor');
      t.classList.toggle('tcolor1');
      txt.classList.toggle('tcolor');
}
ccolor.addEventListener('click', changecolor);