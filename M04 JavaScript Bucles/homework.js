/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   let num1 = x;
   let num2 = y;

   if (x === y) {
      return num2;
   }else if (x > y) {
      return num1;
   } else {
      return num2;
   }
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   let MayorEd = edad;

   if (MayorEd >= 18) {
      return 'Allowed';
   } else {
      return 'Not allowed';
   }
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   let User = status;
   
   if (User === 1) {
      return 'EL usuario esta Online';
   } else if (User === 2) {
      return 'El usuario esta Away';
   }else {
      return 'El usuario esta Offline'
   }
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   let A = "Guten Tag!";
   let M = "Ni Hao!";
   let I = "Hello!"; 
  
   if (idioma === A) {
      return A;
   } else if (idioma === M) {
      return M;
   } else if (idioma === I) {
      return I;
   } else {
      return 'Hola';
   }
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
     switch (color) {
      case 'blue':
        return 'This is blue';
        break;
      case 'red':
        return 'This is red';
        break;
      case 'green':
        return 'This is green';
        break;
      case 'orange':
        return 'This is orange';
        break;
      default:
        return 'Lo lamentamos, Color not found' + color + '.';
   }
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if (num === 10 || num === 5) {
      return true;
   } else {
      return false;
   }
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if (num < 50 && num > 20) {
      return true;
   } else {
      return false;
   }
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 1 === 0) {
      return true;
   } else {
      return false;
   }
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 5 ===0 && num % 3 ===0) {
      return 'fizzBuzz';
   } else  if (num % 5 ===0) {
      return 'buzz';
   } else if (num % 3 === 0) {
      return 'fizz';
   } else {
      return false;
   }
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   let x = num1;
   let y = num2;
   let h = num3;

   if (x > y && x > h && x > 0) {
      return 'Numero 1 es el valor mayor y positivo';
   }  else if (y < 0 || h < 0 ) {
      return 'Hay negativos';
   } else if (x < h && y < h) {
      ++h;
      return h;
   } else if (x === 0 && y === 0 && h === 0) {
      return 'error' 
   } else {
      return false;
   }
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if (num == 0 || num == 1 || num == 4) {
       return false;}
	for (let x = 2; x < num / 2; x++) {
		if (num % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}



function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor === true) {
      return 'Soy verdadero';
   } else {
      return 'Soy falso'
   }
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if (num >= 100 && num <= 999) {
      return true;
   } else {
      return false;
   }
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let contador = 0;
   let TotalSum = 0;

    do {
    // Incrementar el número
  TotalSum = num + 5; 
    // Incrementar el contador
   contador ++;
  } while(contador < 8);
  // Devolver resultado
  return TotalSum;
}
 



}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
