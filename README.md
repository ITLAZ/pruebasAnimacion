# PruebasAnimacion

## Instalación de Librerías

Para instalar las librerías GSAP.js, P5.js y Animate.css usando Node.js, sigue estos pasos:

1. **Asegúrate de estar en la ruta correcta**. La terminal debe mostrar una ruta que termine en `/pruebasAnimacion`, como por ejemplo:
   ```
   /e:/ignac/Documents/TallerDig/pruebasAnimacion
   ```
   Si la ruta no es correcta, usa el siguiente comando para navegar a la carpeta del proyecto:
   ```bash
   cd /ruta/al/proyecto/pruebasAnimacion
   ```

2. **Instala las librerías**. Dado que ya existe un archivo `package.json`, simplemente ejecuta el siguiente comando:
   ```bash
   npm install
   ```
   Este comando instalará todas las dependencias listadas en `package.json`. Al finalizar, se creará una carpeta llamada `node_modules`, donde se encontrarán todos los archivos y componentes de las librerías instaladas.

## Iniciar el Proyecto

Para ejecutar el proyecto, sigue estos pasos:

1. **Inicia el servidor local** con el siguiente comando:
   ```bash
   npm start
   ```
   Este comando iniciará `http-server` y `browserSync` y abrirá automáticamente tu proyecto en el navegador predeterminado.

2. **Verifica la animación**. Si todo está configurado correctamente, deberías ver la animación funcionando en tu navegador.

## Ver el Proyecto

Al correr el proyecto en la consola saldra un mensaje diciendo `Avaliable on:` seguido de varios enlaces http, para ver el proyecto puedes hacer `ctrl + click` en cualquiera de estos enlaces. Al hacer esto se abrirá una ventana de tu navegador con el proyecto.

## Apagar el Servidor

Para apagar servidor que corre el proyecto solo debes hacer `ctrl + C` en la terminal de vs code dos veces. Al apagar el servidor ya no se podran ver los cambios del proyecto en el navegador.

## Entrar a una rama

Para ingresar a una rama especifica y ver las pruebas usa el comando:
```bash
git checkout 'nombre de la rama'
```
Por ejemplo:
```bash
git checkout ignacio
```
al ejecutar el comando deberia mostrar al final de la ruta en la terminal `(nombre de la Rama)` para indicar en que rama te encuentras actualmente

## Notas Adicionales

- Asegúrate de que Node.js y npm estén instalados en tu sistema. Puedes verificar esto ejecutando:
   ```bash
   node -v
   npm -v
   ```