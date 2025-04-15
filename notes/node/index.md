---
title: Notas de Node js
layout: base.njk
---

# Node Js

## Introduction to Node js
### What is Node
### Why use Node
### History of Node js
### Node js vs Browser
### Running Node js Code
### Ficheros package

Cuando se configura un proyecto node, este setea dos ficheros clave y son:

- package.json
	- Archivo de configuracion principal de un proyecto
	- Propiedades clave
		- name
		- version
		- description
		- dependencies
			- librerias clave del proyecto node
		- devDependencies
			- Librerias de desarrollo
		- script
			- comandos para ejecutar scripts propios o custom
- package-lock.json
	- Archivo automático que guarda versiones exactas de paquetes instalados
	- Bloquea versiones exactas de los paquetes
	- Asegura que todos los usuarios usen las mismas versiones

### Script personalizados en package.json

En el package.json, contamos con la propiedad scripts.
Aquí puedes agregar scripts custom para ejecutar por consola

Nombres comunes de scripts
- dev
- start
- test
- lint
- build
- predeploy
- deploy

Ejecución de Script:
```js
npm run dev
```

## Modules

Los modulos organizan el codigo en fragmentos independientes enfocados a solucionar un problema en especifico, estos conforman una aplicacion grande y compleja.

### Common JSM

Conocidos como "Common JavaScript Modules", este es el sistema por defecto que Node considera a los modulos de JavaScript.

Las caracteristicas clave son que es la forma clasica y es sincrono.

```js
// Exportacion (messages)
// Forma 1
const sayHiMessage = (pStrMessage) {
    console.log(`Hi my friend, ${pStrMessage}`);
}

module.exports = {
    sayHiMessage
}

// Forma 2
exports sayHiMessage =  (pStrMessage) {
    console.log(`Hi my friend, ${pStrMessage}`);
}

// Importacion
const messages = require('./modules/messages.js');
```

### ESM

Conocidos como "EcmaScript Modules", habilitados para JavaScript. Para hacer uso de este tipo de modulos Node, es necesario habilitarlos mediante el `package.json` agregando `type: module`.

La otra alternativa es que mediaten un transpilador como Babel, se pueda convertir la sintaxis ES a Common JSM.

Es la forma moderna y es asincrono.

```js
// Console
export function sayHiMessage(pStrMessage) {
    console.log(`Hi my friend, ${pStrMessage}`);
}

import * as Console from "./modules/Console.js"
```

Ademas tambien podemos definir propiedades predeterminadas con la palabra clave default

```js
export default function sayHi(){
    console.log("Hi");
}

import {default as Message} from "./modules/messages.js"
```

### global keyword

Es un objeto global que pertenece a todo documento javascript. Esto solo esta enfocado al entorno de Node js.

Tiene metodos propios por defecto y si bien esto forma parte de javascript no confundir el invocarlo con la palabra `this`, ya que actualmente this es un objeto vacio.

## Error Handling
### Types Error
### Uncaught Exceptions
### Handling Async Errors
### Callstack/ Stack Trace
### Using Debugger

## Async programming
### Event Emitter
### Event Loop
### Writing Async Code
#### setTimeOut
#### setInterval
#### Promises
#### async/await
#### callbacks
#### setImmediate
#### process.nextTick

## Working with Files
### process.cwd()
### path module
### fs module
### __dirname
### __filename
### Opensource Packages

## Command Line Apps
### Exitting/ Exit Codes
### Enviroment variables
### Taking Input
### Printing Output
### Command Line args

## Seccion Aparte

- Npm
- Building & Consuming APIS
- Monitor Changes (Dev)
- Template Engines
- Working with Databases
- Testing
- Logging
- Keep and Running
- Threads
- Debugging
- Common Built-in Modules