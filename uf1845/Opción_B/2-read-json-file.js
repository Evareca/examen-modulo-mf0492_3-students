/*   Lee el fichero "user.json" y muestra por consola el nombre del usuario.
 */
const fs = require('fs');
// Esto importa el módulo fs (filesystem) de Node.js, que te permite trabajar con archivos.

const data = fs.readFileSync('user.json', 'utf8');
// fs.readFileSync lee el archivo llamado "user.json" de forma sincrónica (es decir, bloquea la ejecución hasta terminar).
// El segundo parámetro 'utf8' indica que quieres leer el archivo como texto en formato UTF-8 (para que el resultado sea un string).
// El contenido leído del archivo se guarda en la variable data como un texto (string).

const user = JSON.parse(data);
// JSON.parse convierte ese texto JSON en un objeto JavaScript.
// Ahora user es un objeto con las propiedades name, age, y email.

console.log("Nombre del usuario: " + user.name);
// Finalmente, mostramos en la consola el valor de la propiedad name del objeto user.