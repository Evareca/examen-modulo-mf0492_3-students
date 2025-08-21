/*   Lee el fichero "poema.txt" y reemplaza todas las apariciones de la palabra "noche" por "día".
  Guarda el resultado en un nuevo archivo llamado "poema-editado.txt".
  */
const fs = require('fs');

// Leer el contenido del archivo poema.txt
const texto = fs.readFileSync('poema.txt', 'utf8');

// Reemplazar todas las apariciones de "noche" por "día"
const textoEditado = texto.replace(/noche/g, 'día');

// Guardar el resultado en poema-editado.txt
fs.writeFileSync('poema-editado.txt', textoEditado);

console.log('Archivo poema-editado.txt creado con los cambios.');