const cero = document.getElementById("cero");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");

let suma = document.getElementById("suma");
let display = document.getElementById("display");

display.value = 0;
let number;
let newNumber;

cero.addEventListener('click', ()=>
{
   insertarNumeros(0);
})

uno.addEventListener('click', ()=>
{
   insertarNumeros(1);
})

dos.addEventListener('click', ()=>
{
   insertarNumeros(2);
})

tres.addEventListener('click', ()=>
{
   insertarNumeros(3);
})

cuatro.addEventListener('click', ()=>
{
   insertarNumeros(4);
})

cinco.addEventListener('click', ()=>
{
   insertarNumeros(5);
})

seis.addEventListener('click', ()=>
{
   insertarNumeros(6);
})

siete.addEventListener('click', ()=>
{
   insertarNumeros(7);
})

ocho.addEventListener('click', ()=>
{
   insertarNumeros(8);
})

nueve.addEventListener('click', ()=>
{
   insertarNumeros(9);
})

function insertarNumeros(number) 
{
   if(display.value === 0)
   {
      number = display.innerText = number;
      display.value = number;
   }

   else
   {
      let crearNodo = document.createTextNode(number);
      newNumber = display.appendChild(crearNodo);
      display.value = parseInt(`${display.value}${number}`);
   }
}