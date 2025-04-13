---
title: 06. More notes
layout: base.njk
---

# Node

- **What is:** Entorno de Ejecucion, es un CLI(Command Line Interface)
- **Why use:** Creacion de Aplicacion de Servidor
- Package.json
    - Fichero JSON que contiene serie de atributos referentes a la aplicacion


## Npm (Node Package Manager)

- Repositorio de Paquetes
- Manera de gestionar paquetes instalados en computadora
- Estandar para definir dependencias en otros paquetes

Formas de instalacion

- Global
- Local (default)
```js
/**
 * Instalacion
 *  Global
 *  Local
*/
npm install -g sax
npm i -g sax

npm install sax
npm install sax@0.2.4
npm install sax@0.2.x

/**
 * Desinstalacion
 *  Global
 *  Local
*/
npm uninstall -g sax
npm uninstall sax

/**
 * Actualizacion
 *  Global
 *  Local
*/
npm update -g sax
npm update sax

/**
 * Instalar dependencias
*/
npm install
npm i
```

## NODE INTRODUCTION

Node usa el Estilo "EVENT-DRIVEN PROGRAMMING"

- Closures
    - En JS, las funciones son considerados objetos de primera clase.
    - Permite pasarle parametros y este ser ejecutados despues de su termino.
    - Conocidos como callback

## MODULES

- CommonJS Modules
```js
/**
 * Module File
*/
function add(a, b) {
    return a + b;
}

function rest(a, b) {
    return a - b;
}

// module.exports.add = add
// module.exports.rest = rest

module.exports = {
    add,
    rest
};

/**
 * App File
*/
// const operations = require('./modules/operators.js')
let {add: suma, rest: resta} = require('./modules/operators.js');

```

- ESM
```js
/**
 * Module File
*/
export function add(a, b) {
    return a + b;
}

export function rest(a, b) {
    return a - b;
}

/**
 * App File
*/

import * as Operations from './modules/operators.js';
import {rest} from './modules/operators.js';

```

## BUFFER

- Espacio en memoria que almacena datos binarios temporalmente
- Contendra valores random, no ceros.

```js
let mBuffer = new Buffer("Hola Mundo", "utf8");
// ascii
// base64
let mBuffer2 = new Buffer(5);
mBuffer.copy(mBuffer2, 0, 5, 9);

mBuffer.length
mBuffer.slice(5, 9).toString();
mBuffer,toString("base64");

```
## Event Binding

Aplicando al **"readStream"**

- addListener/ on
- once
- removeEventListener
- removeAllEventListener

## PROCESS

Es el Objeto global del entorno de Node que proporcionar informacion de control.

Los metodos son los sgtes:

- stdin
- argv
- env
- stderr
- exit

## FILES

Modules Base

- path (join, resolve, relative, basename, extname, exists)
- fs (stat, appendFile, open, read, write, close)
    - Open
        - r  -> Read
        - r+ -> Open, Read and Write
        - w  -> Write
        - w+ -> Open, Read and Write
        - a  -> Open, Write
        - a+ -> Open, Read and Write

## PROCESS
## STREAM
## TCP
## HTTP