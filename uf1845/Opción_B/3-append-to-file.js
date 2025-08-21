/*   Añade la siguiente línea al final del fichero "log.txt":
 
  "Nuevo acceso detectado."
 
  Si el fichero no existe, debe crearse. 

  */
const fs = require('fs');

fs.appendFileSync('log.txt', 'Nuevo acceso detectado.');

console.log('Línea añadida a log.txt.');

// fs.appendFileSync añade texto al final del fichero.
// Si log.txt no existe, lo crea automáticamente.
// El \n es para que la línea nueva quede en una línea separada.
