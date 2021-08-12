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
let exitCycle = false;
let cont = 0;
let firstNumber = "";
let secondNumber = "";
let reverseNumber = "";
let positionsRight;
let positionsLeft;
let searchPositionOperator;
let calcOperation;
let string;
let counter = 0;
let counterRest = 0;
let actualPosition;
let counterPoints = 0;

for(let i = 0; i <= 9; i++)
{
   digits[i] = document.getElementById(`digit${i}`).addEventListener('click', () =>
   {
      insertKeys(i);
   });
}      

point.addEventListener("click", ()=>
{
   let zeroBeforePoint = display.value;

   if(zeroBeforePoint[zeroBeforePoint.length-1] == "+" || zeroBeforePoint[zeroBeforePoint.length-1] == "-" || zeroBeforePoint[zeroBeforePoint.length-1] == "x" || zeroBeforePoint[zeroBeforePoint.length-1] == "/" || zeroBeforePoint.length-1 == -1)
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
   firstNumber = "";
   secondNumber = ""
   reverseNumber = ""
   calcOperation = ""
   searchPositionOperator = ""
   positionsRight = ""
   positionsLeft = ""
   counterOperadores = 0
   exitCycle = false
})

del.addEventListener("click", ()=> 
{
   let deleteString = display.value;
   display.value = deleteString.substring(0, deleteString.length - 1)
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
   string = display.value;
   console.log("Cadena: " + string)
   console.log("Tamaño de la Cadena: " + string.length)
   exitCycle = false;
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
   if(string.charAt(0) == "x" || string.charAt(0) == "/" || string.charAt(string.length -1) == "." || string.charAt(string.length -1) == "x" || string.charAt(string.length -1) == "/" || string.charAt(string.length -1) == "+" || string.charAt(string.length -1) == "-")
   {
      display.value = "Operacion malformada";
   }

   else 
   {
      operation("x")
      operation("/")
      operation("+")
      operation("-")
   }
}      

function operation(operator)
{
   while(string.indexOf(operator) != -1 && exitCycle == false) 
   {      
      if(string[0] == "+")
      {
         string = string.replace("+", "")
         console.log(string)
      }

      firstNumber = "";
      secondNumber = "";
      reverseNumber = "";
      calcOperation = "";

      searchPositionOperator = string.indexOf(operator);
      console.log("En la posicion " + searchPositionOperator + " hay un signo " + operator)
      
      positionsRight = searchPositionOperator + 1; 
      positionsLeft = searchPositionOperator - 1; 

      //------------------codigo para restas con signos negativos 
      
      counter = 0;

      for(var i = 0; i < string.length; i++) 
      {
         if (string[i] == "+" || string[i] == "x" || string[i] == "/") 
         {
            counter++;
         }
      }

      if(counterRest == 0 && string[0] == "-" && counter == 0)
      {
         for(var i = 0; i < string.length; i++) 
         {
            if (string[i] == "-" ) 
            {
               counterRest++;
            }

            if(counterRest == 1)
            {
               firstNumber = firstNumber + string[i];
            }

            else if(counterRest == 2)
            {
               secondNumber = secondNumber + string[i];
            }
         }

         if(secondNumber == "")
         {
            exitCycle = true;
         }

         else
         {        
            if(firstNumber.length > 1)
            {
               for (let x = firstNumber.length - 1; x >= 0; x--) 
               {
                  reverseNumber += firstNumber[x];
               }
            }

            else 
            {
               reverseNumber = firstNumber;
            }

            reverseNumber = Number(reverseNumber);
            secondNumber = Number(secondNumber);

            //--------SI SON NUMEROS DECIMALES SE LES AGREGA 2 DECIMALES


            //--------------------------------------------

            calcOperation = Number(reverseNumber) + Number(secondNumber);
   
            console.log("PRIMERO: " + reverseNumber)
            console.log("SEGUNDO: " + secondNumber)
         
            string = string.replace(`${reverseNumber}${secondNumber}`, calcOperation)
            console.log("Nueva string: " + string) 
            display.value = string;
         }

         counterRest = 0
         firstNumber = "";
         secondNumber = "";
         calcOperation = ""; 
         reverseNumber = "";
      }

      else 
      {
         //------------------------------PARA OBTENER EL PRIMER VALOR -------------------------------------

         cont = 0;    
         actualPosition = "";

         while(positionsLeft >= 0 && string.charAt(positionsLeft) != "x" && string.charAt(positionsLeft) != "/" && cont < 1)
         {
            if(string.charAt(positionsLeft) == "-")
            {
               cont++;

               if(cont == 1)
               {
                  firstNumber = firstNumber + string.charAt(positionsLeft);
                  positionsLeft--;
               }
            }

            else if(string.charAt(positionsLeft) == "+")
            {
               cont = 2;
            }

            else 
            {
               if(cont < 1)
               {
                  actualPosition =positionsLeft;
                  firstNumber = firstNumber + string.charAt(positionsLeft);
                  positionsLeft--;
               }
            }
         }    
         
         //------------------------------PARA OBTENER EL SEGUNDO VALOR -------------------------------------

         cont = 0;

         while(positionsRight < string.length && string.charAt(positionsRight) != "x" && string.charAt(positionsRight) != "/" && cont <= 1)
         { 
            if(string.charAt(positionsRight) != "-" && string.charAt(positionsRight) != "+")
            {
               secondNumber = secondNumber + string.charAt(positionsRight);
               positionsRight++;
            }

            else 
            {
               if(secondNumber == "")
               {
                  secondNumber = secondNumber + string.charAt(positionsRight);
                  positionsRight++;

                  cont++;
               }

               else 
               {
                  cont=2;
               }
            }
         }    
      
//------------------------------INVERTIR EL PRIMER VALOR -------------------------------------

         if(firstNumber.length > 1)
         {
            for (let x = firstNumber.length - 1; x >= 0; x--) 
            {
               reverseNumber += firstNumber[x];
            }
         }

         else 
         {
            reverseNumber = firstNumber;
         }

         if(reverseNumber[0] == "+")
         {
            reverseNumber = reverseNumber.replace("+", "");
         }
                     
         console.log("Primer numero: " + reverseNumber)
         console.log("Segundo numero: " + secondNumber)

         reverseNumber = Number(reverseNumber);
         secondNumber = Number(secondNumber);
      
         switch(operator)
         {
            case "x":
               calcOperation = reverseNumber * secondNumber;
               console.log("Operacion Matematica: " + calcOperation);
            break;

            case "/":
               calcOperation = reverseNumber / secondNumber;
               console.log("Operacion Matematica: " + calcOperation);
            break;

            case "+":
               calcOperation = reverseNumber + secondNumber;
               console.log("Operacion Matematica: " + calcOperation)
            break;

            case "-":
               calcOperation = reverseNumber - secondNumber;
               console.log("Operacion Matematica: " + calcOperation)
            break;
         }

         console.log("string antes de sustituir operacion matematica: " + string) 
         let sustituir = reverseNumber + operator + secondNumber;

         if(Math.sign(calcOperation) === 1 || Math.sign(calcOperation) === 0)
         {                 
            
            console.log("esto es lo que se va a sustituir por operacion matematica: " + sustituir);    
            
            console.log("esta es lo que hay en posicion actual: " + string[actualPosition-1]);    
            
            if(string[actualPosition -1] != "+")
            {
               string = string.replace(sustituir, "+" + calcOperation);
            }

            else
            {
               string = string.replace(sustituir, calcOperation)
            }
            
            if(string[0] == "+"  || string[positionsLeft + 1 == "+"])
            {
               string = string.replace("+", "")
            }
            console.log("string despues de sustituir: " + string) 
            
            display.value = string;
         }
         
         else 
         {
            string = string.replace(sustituir, calcOperation)
            console.log("Nueva string: " + string) 
            display.value = string;
         }
         
         let counterOperadores = 0;
         counterPoints = 0;

         for(var i = 0; i < string.length; i++) 
         {
            if (string[i] === "-" || string[i] === "+") 
            {
               counterOperadores++;
            }

            if (string[i] === ".")
            {
               counterPoints++;
            }
         }

         if(counterOperadores == 1 && string[0] == "-")
         {
            exitCycle = true;
            counterOperador = 0;
         }   
         
         if (counterPoints == 1)
         {
            string = Number(string);
            string = string.toFixed(2)
            display.value = String(string)
         }
      }    
   }
}