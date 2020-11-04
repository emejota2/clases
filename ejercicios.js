/*
*una funcion que reciba un parametro del tipo numero, un numero entre 0 y 99999999
*/

// console.log(nuestraFuncion('f'));

//  function nuestraFuncion(num) {
//     if (isNaN(num)) {
//         return 'Not a Number!';
//     }
//     if (num >= 0 && num <= 99999999) {
//         let resto = num%23;
//         if (resto >= 0 && resto <= 22) {
//             switch (resto) {
//             case 0:
//                 return resto+' '+' la letra que le corresponde es: T';
//             case 1:
//                 return resto+' '+' la letra que le corresponde es: R';
//             case 2:
//                 return resto+' '+' la letra que le corresponde es: W';
//             case 3:
//                 return resto+' '+' la letra que le corresponde es: A';
//             case 4:
//                 return resto+' '+' la letra que le corresponde es: G';
//             case 5:
//                 return resto+' '+' la letra que le corresponde es: M';
//             case 6:
//                 return resto+' '+' la letra que le corresponde es: Y';
//             case 7:
//                 return resto+' '+' la letra que le corresponde es: F';
//             case 8:
//                 return resto+' '+' la letra que le corresponde es: P';
//             case 9:
//                 return resto+' '+' la letra que le corresponde es: D';
//             case 10:
//                 return resto+' '+' la letra que le corresponde es: X';
//             case 11:
//                 return resto+' '+' la letra que le corresponde es: B';
//             case 12:
//                 return resto+' '+' la letra que le corresponde es: N';
//             case 13:
//                 return resto+' '+' la letra que le corresponde es: J';
//             case 14:
//                 return resto+' '+' la letra que le corresponde es: Z';
//             case 15:
//                 return resto+' '+' la letra que le corresponde es: S';
//             case 16:
//                 return resto+' '+' la letra que le corresponde es: Q';
//             case 17:
//                 return resto+' '+' la letra que le corresponde es: V';
//             case 18:
//                 return resto+' '+' la letra que le corresponde es: H';
//             case 19:
//                 return resto+' '+' la letra que le corresponde es: L';
//             case 20:
//                 return resto+' '+' la letra que le corresponde es: C';
//             case 21:
//                 return resto+' '+' la letra que le corresponde es: K';
//             case 22:
//                 return resto+' '+' la letra que le corresponde es: E';    
//             }
//         }else{
//             console.log('Fuera de aqui, ese numero no corresponde a las opciones disponible');
//         }
//     }
//  }

// ejercicio 2

console.log(calificacion(0,1))

function calificacion(nota) {
    if (isNaN(nota)) {
        return 'Not a Number!';
         }
            if (nota >= 0 && nota <= 3) { 
                return 'Muy deficiente';
            }else if (nota > 3 && nota <= 5) {  
                return 'Insuficiente'; 
            } else if (nota > 5 && nota <= 6) {
                return 'suficiente';
            } else if (nota > 6 && nota <= 7) {
                return 'bien';  
            } else if (nota > 7 && nota <= 9) {
                return 'notable';
            } else if (nota > 9 && nota <= 10) {
                return 'sobresaliente'; 

            } else if (nota > 10) {
                return 'nota no valida';
                
            }
       }