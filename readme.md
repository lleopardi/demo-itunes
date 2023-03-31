# Como ejecutar el app

1. Clonar repositorio - ```git clone https://github.com/lleopardi/demo-itunes.git```
2. Instalar dependencias - ```npm install```
3. Iniciar el servidor - ```npm run start```

## CORS
Los servicios usados no soportan CORS por lo que se esta usando cors-anywhere para solventar ese problema.

Para poder ejecutar el app de debe dirigir a la pagina https://cors-anywhere.herokuapp.com/corsdemo y presionarl el boton ```Request temporary access to the demo server```, con ello se podra acceder a los recursos, de lo contrario los endpoint arrojaran el codigo de error 403

Si se desea crear el bundle, solo hay que ejecutar ```npm run build```