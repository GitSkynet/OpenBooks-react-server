# OpenBooks V2

Servidor de OpenBooks
* MongoDB 
* Express y Node para Backend
* Estilo propio con algo de React Bootstrap

## Comenzando 🚀
### Instalación 🔧
Para poder ver y probar este proyecto en tu ordenador local, haz Fork tanto de este repositorio como el repositorio del cliente **(enlace repo client openbooks V2)**

Antes de poner el servidor en marcha, debemos crear un archivo y descargar las pedendencias.
Crea  un **archivo .env** en el directorio raíz, donde añadiremos las siguientes keys:

### Keys 📋

```
* SECRET_SESSION=<nombre(anithing)>
* PUBLIC_DOMAIN=http://localhost:3000
* MONGODB_URI=<url_mongoDB local/atlas>
* DATABASE=<nombre de tu base de datos>
* PORT=4000
* SECRET_SESSION=<nombre>
* cloudName=<cloudinary>
* cloudKey=<cloudinary>
* cloudSecret=<cloudinary>
```


_Una vez creado nnuestro archivo .env, instalamos todas las dependencias y ejectuamos el servidor_

```
npm install
```

_Para ejecutar el servidor:_

```
npm run dev
```

_Ya tenemos a nuestro servidor en http://localhost:4000 en marcha escuchando y soncronizado con la base de datos_

## Realizando el deploy en Heroku ⚙️

## 📌Una vez tengas la build hecha del repo del cliente📌, ejecutamos:

_Para comprobar que se ha añadido a la carpeta public los cambios de la build_
```
git status
```
_Añadimos  Todos los cambios_
```
git add .
```
_Creamos el commit_
```
git commit -m"myCommit"
```
_Hacemos el push a Heroku_
```
git push heroku master"
```

### Configurando Heroku 🔩

_Habrá que crear en Heoku las mismas variables que declaramos arriba para el archivo .env, pero en este caso; en la dirección de la base de datos le daremos la dirección de mongoDB Atlas_

```
MONGODB_URI=tu dirección de mongodb atlas
```

## Construido con 🛠️

_Server realizado con_

* [nodeJS](https://nodejs.org/es/) - entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
* [Express](https://expressjs.com/es/) - Framework de nodeJS
* [Cloudinary](https://cloudinary.com/) - Nube para gestionar y almacenar imágenes en la web

## Actualemente trabajando🖇️

- Refactorizar y pulir todo el código del backend, para mejorar la eficiencia y rendimiento a la hora de hacer/recibir llamadas de la base de datos.
- Incorporar nodeMailer
- Incorporar Disquss en la web
- Habilitar la creación de listas (user)
- Habilitar feed social
- Habilitar añadir a favoritos/user Lists  

## Autor ✒️

* **LinkedIn** - [Carlos Curtido](https://www.linkedin.com/in/carlos-curtido/)
* **GitHub** - [GitSkynet](https://github.com/GitSkynet)

También puedes mirar mi [portfolio](https://portfoliocurtido.herokuapp.com/) donde muestro otros proyectos en los que estoy trabajando 

## Licencia 📄

Este proyecto está bajo Licencia libre - mira el archivo [LICENSE.md](LICENSE.md) para detalles

---
⌨️ con ❤️ por [Carlos Curtido](https://github.com/GitSkynet) ❤️
