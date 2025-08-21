/* 
  Crea un fichero llamado "user.json" que contenga el siguiente objeto convertido en JSON:
 
  {
    "name": "Ana",
    "age": 30,
    "email": "ana@mail.com"
  }
 */
const fs = require('fs');

fs.writeFileSync('user.json', JSON.stringify({
  name: 'Ana',
  age: 30,
  email: 'ana@mail.com'
}, null, 2));

console.log('Archivo user.json creado.');