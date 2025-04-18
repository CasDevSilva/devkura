---
title: 10_1. Bases de Node
layout: base.njk
---

# Bases de Node

## 1.1. REPL (Read, Eval, Print, Loop)

## 1.2. Objetos globales propios

Objetos accesibles por Node, sin necesidad de importarlos

- process
	- Manejo del entorno de ejecución
- global
	- Objeto de asignacion de propiedades para todo el programa
	- No recomendable usar en proyectos reales

## 1.3. Event Loop

Node usa un modelo no bloqueante, enfocado a aplicaciones en tiempo real.

- Timers
- Pending callbacks
- Idle & Prepare
- Poll
- Check
- Close callbacks

## 1.5. Uso de npm

- Npm
	- Node package Manager
	- Gestor de dependencias de node
- Npx
	- Ejecuta paquetes sin necesidad de instalarlos

```js
npm init (-y)
npm install express
	// (npm i -> abreviacion "npm install")
npm i -g express
npm update
npm uninstall lodash
```

## 1.7. Uso de Yarn

Yarn, alternativa segura y rápida de npm

```js
npm install -g yarn

// Comandos esenciales
yarn init (-y)
yarn install
yarn add express
yarn remove lodash
yarn upgrade
```

## 1.9. Módulos Core de Node js

Node incluye módulos nativos como:

- fs
- path
- os
- http

## 1.10. fs (FileSystem)

Modulo que permite interactuar con archivos y directorios

Métodos recurrentes de ficheros:
- readFileSync/ readFile
- writeFileSync/ writeFile
- unlinkSync/ unlink
- existsSync/ exists
- stat
- copyFile
- rename
- watch
- readdir
- chmod

Métodos recurrentes de directorios:
- mkdirSync/ mkdir
- rmdirSync/ rmdir
### 1.10.1 Streams y Buffers

- Streams
	- Forma de manejar datos de manera eficiente
	- Evitamos cargarlos en memoria
	- Usado para procesar volumenes de informacion en fragmentos(chunks)
	- Ejemplo: Lectura de ficheros grandes, proceso de ficheros
	- Metodos
		- createReadStream
		- createWriteStream
- Buffers
	- Estructura de node que permite almacenar datos binarios en memoria
	- No es necesario convertirlos a String
	- Ejemplo: procesamiento de imagenes, datos grandes

```js
let mBfrText = Buffer.from("Hola Mundo")
mBfrText.toString()
```

## 1.11. Uso de Path, Os, Util

Path
- Metodos recurrentes
	- join
	- extname
	- basename
	- dirname
- Propiedades
	- __dirname

Os
- Metodos recurrentes
	- platform
	- arch
	- cpus
	- homedir
	- freemem

Util
- Metodos recurrentes
	- promisify (deprecated)
		- Convertir callbacks a Promises
## 1.12. Manejo de procesos (child_process)

El modulo child_process permite ejecutar comandos de sistema o lanzar otros procesos dentro de Node js

Metodos recurrentes
- exec
- spawn


## 1.13. Process

Flujos de entrada con process
- stdin
	- Entrada por consola
- stdout
	- Salida por consola
- stderr
	- Salida de errores
- argv
	- Argumentos de la linea de comandos
- env
	- Variables de entorno

Eventos de Process
- on
- exit
- SIGINT
- uncaughtException
- beforeExit
## 1.14.
## 1.15.
## 1.16.

## Modulos de Utilidad de Npm

- Commander
- Kleur
- Inquirer