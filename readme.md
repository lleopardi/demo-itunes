# Como ejecutar el app

1. Clonar repositorio - ```git clone https://github.com/lleopardi/demo-itunes.git```
2. Instalar dependencias - ```npm install```
3. Iniciar el servidor - ```npm run start```

## CORS
Los servicios usados no soportan CORS por lo que se esta usando cors-anywhere para solventar ese problema.

Para poder ejecutar el app de debe dirigir a la pagina https://cors-anywhere.herokuapp.com/corsdemo y presionarl el boton ```Request temporary access to the demo server```, con ello se podra acceder a los recursos, de lo contrario los endpoint arrojaran el codigo de error 403

Si se desea crear el bundle, solo hay que ejecutar ```npm run build```

# Mode
La app puede ser empaquetada minimificada o no, los 2 modos estan includios en los script del package.json.

* Ejecutar ```npm run build``` y la app se empaquetará en modo producción
* Ejecutar ```npm run build:debug``` y la app se empaquetará en modo desarrollo son minimificar