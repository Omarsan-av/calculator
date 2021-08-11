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
let terminarCiclo = false;
let cont = 0;
let primerNumero;
let segundoNumero = "";
let invertirNumero = "";
let evaluarPosicionesAlaDerecha;
let evaluarPosicionesAlaIzquierda;
let operacionMatematica;
let cadena;
let contador = 0;
let contadorResta = 0;
let terminarCicloResta = false;
let posicionActual;

for(let i = 0; i <= 9; i++)
{
   digits[i] = document.getElementById(`digit${i}`).addEventListener('click', () =>
   {
      insertKeys(i);
   });
}      

point.addEventListener("click", ()=>
{
   let ceroAntesDelPunto = display.value;

   if(ceroAntesDelPunto[ceroAntesDelPunto.length-1] == "+" || ceroAntesDelPunto[ceroAntesDelPunto.length-1] == "-" || ceroAntesDelPunto[ceroAntesDelPunto.length-1] == "x" || ceroAntesDelPunto[ceroAntesDelPunto.length-1] == "/" || ceroAntesDelPunto.length-1 == -1)
   {
      insertKeys("0.")
   }

   else 
   {
      insertKeys(".")
   }
   
})

reset.addEventListener("click", ()=> 
{
   let resetValue = display.innerText = "";
   display.value = resetValue;
   primerNumero = "";
   segundoNumero = ""
   invertirNumero = ""
   operacionMatematica = ""
   buscarPosicionOperator = ""
   evaluarPosicionesAlaDerecha = ""
   evaluarPosicionesAlaIzquierda = ""
   contadorOperadores = 0
   terminarCiclo = false
})

del.addEventListener("click", ()=> 
{
   let string = display.value;
   display.value = string.substring(0, string.length - 1)
})

btnSum.addEventListener("click", ()=> 
{
   insertKeys("+");
})

btnRest.addEventListener("click", ()=> 
{
   insertKeys("-");
})

btnDivision.addEventListener("click", ()=> 
{
   insertKeys("/");
})

btnMultiplication.addEventListener("click", ()=> 
{
   insertKeys("x");
})

btnTotal.addEventListener("click", ()=>
{   
   getNumbers();
})

function insertKeys(n) 
{
   let createNodo = document.createTextNode(n);
   value = display.appendChild(createNodo);
   display.value = `${(display.value)}${n}`; 
}

function getNumbers ()
{
   cadena = display.value;
   console.log("Cadena: " + cadena)
   console.log("Tamaño de la Cadena: " + cadena.length)
   
                                                        // 0.5 + 6
//falta pasarlo en html
   if(cadena == "x" || cadena == "/" || cadena == "+" || cadena == "-" || cadena == ".")
   {
      console.log("operacion mal formada")
   }

   else if(cadena.charAt(0) == "x" || cadena.charAt(0) == "/" || cadena.charAt(cadena.length -1) == "." || cadena.charAt(cadena.length -1) == "x" || cadena.charAt(cadena.length -1) == "/" || cadena.charAt(cadena.length -1) == "+" || cadena.charAt(cadena.length -1) == "-")
   {
      console.log("operacion mal formada")
   }

   else 
   {
      operacion("x")
      operacion("/")
      operacion("+")
      operacion("-")
   }
}      
function operacion(operador)
{
   while(cadena.indexOf(operador) != -1 && terminarCiclo == false) 
   {      
      if(cadena[0] == "+")
      {
         cadena = cadena.replace("+", "")
         console.log(cadena)
      }

      primerNumero = "";
      segundoNumero = "";
      invertirNumero = "";
      operacionMatematica = "";

      buscarPosicionOperator = cadena.indexOf(operador);
      console.log("En la posicion " + buscarPosicionOperator + " hay un signo " + operador)
      
      evaluarPosicionesAlaDerecha = buscarPosicionOperator + 1; 
      evaluarPosicionesAlaIzquierda = buscarPosicionOperator - 1; 

      //------------------codigo para restas con signos negativos 
      
      contador = 0;

      for(var i = 0; i < cadena.length; i++) 
      {
         if (cadena[i] == "+" || cadena[i] == "x" || cadena[i] == "/") 
         {
            contador++;
         }
      }

      if(contadorResta == 0 && cadena[0] == "-" && contador == 0)
      {
         for(var i = 0; i < cadena.length; i++) 
         {
            if (cadena[i] == "-" ) 
            {
               contadorResta++;
               console.log(contadorResta)
            }

            if(contadorResta == 1)
            {
               primerNumero = primerNumero + cadena[i];
            }

            else if(contadorResta == 2)
            {
               segundoNumero = segundoNumero + cadena[i];
            }
         }

         if(segundoNumero == "")
         {
            terminarCiclo = true;
         }

         else
         {            
            operacionMatematica = Number(primerNumero) + Number(segundoNumero);
   
            console.log("PRIMERO: " + primerNumero)
            console.log("SEGUNDO: " + segundoNumero)
         
            cadena = cadena.replace(`${primerNumero}${segundoNumero}`, operacionMatematica)
            console.log("Nueva cadena: " + cadena) 

            contadorResta = 0
            primerNumero = "";
            segundoNumero = "";
            operacionMatematica = ""; 
         }
      }

      else 
      {
         //------------------------------PARA OBTENER EL PRIMER VALOR -------------------------------------

         cont = 0;    
         posicionActual = "";

         while(evaluarPosicionesAlaIzquierda >= 0 && cadena.charAt(evaluarPosicionesAlaIzquierda) != "x" && cadena.charAt(evaluarPosicionesAlaIzquierda) != "/" && cont < 1)
         {
            if(cadena.charAt(evaluarPosicionesAlaIzquierda) == "-")
            {
               cont++;

               if(cont == 1)
               {
                  primerNumero = primerNumero + cadena.charAt(evaluarPosicionesAlaIzquierda);
                  evaluarPosicionesAlaIzquierda--;
               }
            }

            else if(cadena.charAt(evaluarPosicionesAlaIzquierda) == "+")
            {
               cont = 2;
            }

            else 
            {
               if(cont < 1)
               {
                  posicionActual =evaluarPosicionesAlaIzquierda;
                  primerNumero = primerNumero + cadena.charAt(evaluarPosicionesAlaIzquierda);
                  evaluarPosicionesAlaIzquierda--;
               }
            }
         }    
         
         //------------------------------PARA OBTENER EL SEGUNDO VALOR -------------------------------------

         cont = 0;

         while(evaluarPosicionesAlaDerecha < cadena.length && cadena.charAt(evaluarPosicionesAlaDerecha) != "x" && cadena.charAt(evaluarPosicionesAlaDerecha) != "/" && cont <= 1)
         { 
            if(cadena.charAt(evaluarPosicionesAlaDerecha) != "-" && cadena.charAt(evaluarPosicionesAlaDerecha) != "+")
            {
               segundoNumero = segundoNumero + cadena.charAt(evaluarPosicionesAlaDerecha);
               evaluarPosicionesAlaDerecha++;
            }

            else 
            {
               if(segundoNumero == "")
               {
                  segundoNumero = segundoNumero + cadena.charAt(evaluarPosicionesAlaDerecha);
                  evaluarPosicionesAlaDerecha++;

                  cont++;
               }

               else 
               {
                  cont=2;
               }
            }
         }    
      
//------------------------------INVERTIR EL PRIMER VALOR -------------------------------------

         if(primerNumero.length > 1)
         {
            for (let x = primerNumero.length - 1; x >= 0; x--) 
            {
               invertirNumero += primerNumero[x];
            }
         }

         else 
         {
            invertirNumero = primerNumero;
         }

         if(invertirNumero[0] == "+")
         {
            invertirNumero = invertirNumero.replace("+", "");
         }
                     
         console.log("Primer numero: " + invertirNumero)
         console.log("Segundo numero: " + segundoNumero)

         invertirNumero = Number(invertirNumero);
         segundoNumero = Number(segundoNumero);
      
         switch(operador)
         {
            case "x":
               operacionMatematica = invertirNumero * segundoNumero;
               console.log("Operacion Matematica: " + operacionMatematica);
            break;

            case "/":
               operacionMatematica = invertirNumero / segundoNumero;
               console.log("Operacion Matematica: " + operacionMatematica);
            break;

            case "+":
               operacionMatematica = invertirNumero + segundoNumero;
               console.log("Operacion Matematica: " + operacionMatematica)
            break;

            case "-":
               operacionMatematica = invertirNumero - segundoNumero;
               console.log("Operacion Matematica: " + operacionMatematica)
            break;
         }

         console.log("cadena antes de sustituir operacion matematica: " + cadena) 
         let sustituir = invertirNumero + operador + segundoNumero;

         if(Math.sign(operacionMatematica) === 1 || Math.sign(operacionMatematica) === 0)
         {                 
            
            console.log("esto es lo que se va a sustituir por operacion matematica: " + sustituir);    
            
            console.log("esta es lo que hay en posicion actual: " + cadena[posicionActual-1]);    
            
            if(cadena[posicionActual -1] != "+")
            {
               cadena = cadena.replace(sustituir, "+" + operacionMatematica);
            }

            else
            {
               cadena = cadena.replace(sustituir, operacionMatematica)
            }
            
            if(cadena[0] == "+"  || cadena[evaluarPosicionesAlaIzquierda + 1 == "+"])
            {
               cadena = cadena.replace("+", "")
            }
            console.log("cadena despues de sustituir: " + cadena) 
         }
         
         else 
         {
            cadena = cadena.replace(sustituir, operacionMatematica)
            console.log("Nueva cadena: " + cadena) 
         }
         
         let contadorOperadores = 0;

         for(var i = 0; i < cadena.length; i++) 
         {
            if (cadena[i] === "-" || cadena[i] === "+") 
            {
               contadorOperadores++;
            }
         }

         if(contadorOperadores == 1 && cadena[0] == "-")
         {
            terminarCiclo = true;
            contadorOperador = 0;
         }    
      }    
   }
}