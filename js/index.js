let digits = [];
let display = document.getElementById("display");
let btnSum = document.getElementById("sum");
let btnRest = document.getElementById("rest");
let btnDivision = document.getElementById("division");
let btnMultiplication = document.getElementById("multiplication");
let btnTotal = document.getElementById("total");
let reset = document.getElementById("reset");
let del = document.getElementById("del");
let point = document.getElementById("point");
let value;
let firstValue = undefined;
let results;
let keyOperation;
let searchOperationKey;
let secondValue;
let valueString;

//Obtener ids de los digitos

for(var i = 0; i <= 9; i++)
{
   digits[i] = document.getElementById(`digit${i}`);
}      

digits[0].addEventListener('click', ()=> 
{
   insertKeys(0)
}) 

digits[1].addEventListener('click', ()=> 
{
   insertKeys(1)
}) 

digits[2].addEventListener('click', ()=> 
{
   insertKeys(2)
}) 

digits[3].addEventListener('click', ()=> 
{
   insertKeys(3)
}) 

digits[4].addEventListener('click', ()=> 
{
   insertKeys(4)
}) 

digits[5].addEventListener('click', ()=> 
{
   insertKeys(5)
}) 

digits[6].addEventListener('click', ()=> 
{
   insertKeys(6)
}) 

digits[7].addEventListener('click', ()=> 
{
   insertKeys(7)
}) 

digits[8].addEventListener('click', ()=> 
{
   insertKeys(8)
}) 

digits[9].addEventListener('click', ()=> 
{
   insertKeys(9)
}) 

point.addEventListener("click", ()=>
{
   insertKeys(".")
})

reset.addEventListener("click", ()=> 
{
   let resetValue = display.innerText = "";
   display.value = resetValue;
})

del.addEventListener("click", ()=> 
{
   let string = display.value;
   display.value = string.substring(0, string.length-1)
})

btnSum.addEventListener("click", ()=> 
{
   firstValue = Number(display.value);
   insertKeys("+");
   keyOperation = "+"
})

btnRest.addEventListener("click", ()=> 
{
   firstValue = Number(display.value);
   insertKeys("-");
   keyOperation = "-"
})

btnDivision.addEventListener("click", ()=> 
{
   firstValue = Number(display.value);
   insertKeys("/");
   keyOperation = "/"
})

btnMultiplication.addEventListener("click", ()=> 
{
   firstValue = Number(display.value);
   insertKeys("x");
   keyOperation = "x"
})

btnTotal.addEventListener("click", ()=>
{
   searchOperationKey = display.value.indexOf(keyOperation);  
   valueString = display.value.slice(searchOperationKey + 1);
   
   getNumbers(keyOperation);
   operation(keyOperation);

   keyOperation = "";

})

function operation(operation)
{
   switch(operation)
   {
      case "+":
         results = firstValue + secondValue; 
         display.value = results;
      break;

      case "-":
         results = firstValue - secondValue; 
         display.value = results;
      break;

      case "/":
         results = firstValue / secondValue; 
         display.value = results;
      break;

      case "x":
         results = firstValue * secondValue; 
         display.value = results;
      break;
   }
}

function insertKeys(n) 
{
   let createNodo = document.createTextNode(n);
   value = display.appendChild(createNodo);
   display.value = `${(display.value)}${n}`; 
}

let cadena 
function getNumbers (operator)
{
   cadena = display.value;
   console.log("Cadena: " + cadena)
   
   let segundoNumero = "";
   let primerNumero = "";
   let invertirPrimerNumero = "";
   console.log("Tamaño de la Cadena: " + cadena.length)
   let evaluarPosicionesAlaDerecha
   let evaluarPosicionesAlaIzquierda
   let operacionMatematica

      operacion("x")
      operacion("/")
      operacion("+")
      operacion("-")


function operacion(operador)
{
   while(cadena.indexOf(operador) != -1) 
   {
      primerNumero = "";
      segundoNumero = "";
      invertirPrimerNumero = "";
      operacionMatematica = "";
      
      buscarPosicionOperator = cadena.indexOf(operador);
      console.log("En la posicion " + buscarPosicionOperator + " hay un signo " + operador)
      
      evaluarPosicionesAlaDerecha = buscarPosicionOperator + 1; 
      evaluarPosicionesAlaIzquierda = buscarPosicionOperator - 1; 

      // -15 x 4

      while(evaluarPosicionesAlaIzquierda >= 0 && cadena.charAt(evaluarPosicionesAlaIzquierda) != "x" && cadena.charAt(evaluarPosicionesAlaIzquierda) != "/" && cadena.charAt(evaluarPosicionesAlaIzquierda) != "+" && cadena.charAt(evaluarPosicionesAlaIzquierda) != "-" )
      {
         primerNumero = primerNumero + cadena.charAt(evaluarPosicionesAlaIzquierda); 
         evaluarPosicionesAlaIzquierda--;
      }    
      
      while(evaluarPosicionesAlaDerecha < cadena.length && cadena.charAt(evaluarPosicionesAlaDerecha) != "x" && cadena.charAt(evaluarPosicionesAlaDerecha) != "/" && cadena.charAt(evaluarPosicionesAlaDerecha) != "+" && cadena.charAt(evaluarPosicionesAlaDerecha) != "-" )
      {
         segundoNumero = segundoNumero + cadena.charAt(evaluarPosicionesAlaDerecha);
         evaluarPosicionesAlaDerecha++;
      }    

      if(primerNumero.length > 1)
      {
         for (let x = primerNumero.length - 1; x >= 0; x--) 
         {
            invertirPrimerNumero += primerNumero[x];
         }
      }

      else 
      {
         invertirPrimerNumero = primerNumero;
      }
         
      console.log("Primer numero: " + invertirPrimerNumero)
      console.log("Segundo numero: " + segundoNumero)

      switch(operador)
      {
         case "x":
            operacionMatematica = Number(invertirPrimerNumero) * Number(segundoNumero);
            console.log("Resultado: " + operacionMatematica);
         break;

         case "/":
            operacionMatematica = Number(invertirPrimerNumero) / Number(segundoNumero);
            console.log("Resultado: " + operacionMatematica);
         break;

         case "+":
            operacionMatematica = Number(invertirPrimerNumero) + Number(segundoNumero);
            console.log("Resultado: " + operacionMatematica)
         break;

         case "-":
            operacionMatematica = Number(invertirPrimerNumero) - Number(segundoNumero);
            console.log("Resultado: " + operacionMatematica)
         break;
      }

      cadena = cadena.replace(`${invertirPrimerNumero}${operador}${segundoNumero}`, operacionMatematica)
      console.log("NUeva cadena: " + cadena)
         
   }
}

      
}








