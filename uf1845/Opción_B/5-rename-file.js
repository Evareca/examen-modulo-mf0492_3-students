/*  Renombra el archivo "user.json" a "usuario.json". */

// Esto importa el módulo fs (File System) que viene con Node.js. Este módulo permite interactuar con el sistema de archivos: leer, escribir, renombrar, eliminar archivos, etc.
const fs = require('fs');

// fs.rename es una función asincrónica que se usa para renombrar o mover un archivo.
// Parámetros que recibe:
    // 'user.json' → el nombre actual del archivo que quieres renombrar.
    // 'usuario.json' → el nuevo nombre que quieres darle al archivo.
    // Una función de callback → se ejecuta cuando termina el renombramiento.
fs.rename('user.json', 'usuario.json', () => {
  console.log('Archivo renombrado a usuario');
});

// La función de callback garantiza que el mensaje se imprima solo después de que el archivo haya sido renombrado.