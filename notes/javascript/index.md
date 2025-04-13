---
title: JavaScript Roadmap
layout: base.njk
---

# JavaScript Roadmap

Esta es una guia tomando como base el siguiente recurso: Roadmap JavaScript
Programar es el acto de construir un programa. Básicamente es una serie de instrucciones que le dicen al computador que realizar.

## INTRODUCTION TO JAVASCRIPT

### How to Run JavaScript

Existen 2 maneras de correr Javascript, a nivel Frontend y Backend, especificare ambas.

#### Frontend

La parte frontend especifica hacer uso de un navegador. Para ello puedes hacerlo de 2 maneras:

##### Primera forma

- Ve a un navegador, escribe 'about:blank'
- Click derecho, selecciona Inspeccionar o presiona F12.
- Dirigete al Tab Console
- Aqui podemos escribir JavaScript.

##### Segunda forma

- Para esto necesitas tener instalado 2 cosas: Visual Studio Code y la extension Live Server.
- Teniendo ello, es solo cuestion de que crees un directorio con los archivos:
    - index.html
    - app.js

Teniendo ello abre el archivo index.html en Visual Studio Code y presionas Alt+L+Alt+O 

Esto simulara un servidor en tu computador permitiendo asi desplegar tu pagina web. Ahora para hacer una referencia a tu archivo javascript, tu archivo HTML debe de tener el siguiente codigo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

#### Backend

La parte backend especifica hacer uso de Node Js para correr el script por consola.

Para ello solo necesitas instalar Node.js desde su sitio web oficial Node Js.

Para verificar que tienes instalado Node y conocer su version, ejecuta estos 2 comandos en consola:
- node -v (Entorno Backend)
- npm -v (Gestor de Paquetes de Node)

Ahora para correr Javascript, existen 2 maneras:

##### Primera forma

- Dirigete a la consola de tu computador
- Escribe node
- Estaras dentro del sistema de Node js.

##### Segunda forma

- En un directorio crea un archivo llamado app.js
- Para correrlo ve a la consola de tu computador o consola de VS Code(Ctrl+J o Ctrl+Ñ)
- Dentro de la terminal escribe node path/app.js.

Sea cual sea el enfoque que desees utilizar te permitira correr JavaScript, pero debes tener en cuenta que el correrlo directamente sin un archivo no te permitira guardar lo que estes desarrollando y tendra ciertas limitaciones a la hora de extender tu codigo.

## ALL ABOUT VARIABLES

JavaScript necesita de variables para almacenar sus valores y poder trabajar con ellos, para ello necesitamos declarar una variable y existen 2 formas.

Variables, como se indica son valores que varian a lo largo de un programa(talvez no, depende), pero en un programa necesitamos de ellas.

A nivel tecnico se define como espacio en memoria que te permite almacenar un valor sea del tipo que desees. Se podria denominar como el contenedor de un valor.(lo mismo).

Cada variable tiene un nombre que identifica el valor que conforma.

### Variable Declarations

Para definir variables contamos con 2 notaciones en Javascript

- var

```js
// Declaracion de variable
var nombre;
var edad;

// Asignacion de valor
nombre = "Carlos";
edad = 22;

// Declaracion de variable y asignacion de valor
var nombre = "Carlos";
var edad = 22;
```

- let

```js
// Declaracion de variable
let nombre;
let edad;

// Asignacion de valor
nombre = "Carlos";
edad = 22;

// Declaracion de variable y asignacion de valor
let nombre = "Carlos";
let edad = 22;
```

Ambas definen una variable, pero tienen diferencias a nivel de funcionamiento(seran especificadas mas adelante).

**`NOTA: Ahora si no quisieramos cambiar de valor de una variable de manera obligatoria. Eso con notaciones var o let no podemos hacer. Para ello existe la notacion const`**

```js
const VALOR_PI = 3.1415;
const VALOR_IVA = 0.05;

VALOR_PI = 21; // Esta reasignacion de valor dara error.
```

Mediante esta notacion, cualquier modificacion a la constante resultara en error. Y en una regla como programador el definir una constante en mayusculas, lo que indica que es una constante.

### Variable Naming Rules

Existen restricciones para definir variables y/o constantes.

- Iniciar una variable con un numero
- Establecer espacios
- Hacer uso de caracteres extraños
- Usar palabras reservadas(palabras propias del lenguaje)
- Asignacion multiple de variables
- Asignar valor sin declarar (Si puedes hacerlo pero no es lo recomendable)

Cualquier linea de este bloque arrojara un error.

```js
let 12miValor = 12;
let mi Texto = "un Texto";
let @unValor = "un Valor";
let const = 3.1415;
let a = 12 b = 13;
texto = "Texto aleatorio";
```

Ahora tambien existen definiciones que si puedes hacer como:

- Definir un underscore al inicio
- Definir con '$'
- Declarar la variable sin asignar un valor.

```js
let _mivariable = 12;
let $unvalor = "Texto aleatorio";
let mitexto;
```

Tambien se cuenta con nomenclaturas de definicion. Son las siguientes:

- CamelCase
- lowerCase
- snake_case

```js
let miVariable = 12 // camelCase
let mivariable = "text" // lowercase
let mi_variable = true // snake_case
```

### Comentarios y el console.log

### Hoisting

Traducido a Elevamiento, es el proceso de anteponer la definicion de variables y/o funciones antes de su llamada.

Comencemos con el comportamiento de variables.

```js
console.log(nombre); // undefined
var nombre = "Erick";
console.log(nombre); // Erick
```

Viendo el codigo, nace la interrogante del por qué se supone que arroja undefined antes de definir la variable y setear un valor.

Pues esto es el hoisting, el elevamiento de definicion de una variable y/o funcion. A nivel de variables le da el valor undefined(indefinido) pues no tiene valor de asignacion, se puede decir que es el valor por defecto. Lo que hace por detras JavaScript es el siguiente bloque.

```js
var nombre;
console.log(nombre); // undefined
nombre = "Erick";
console.log(nombre); // Erick
```

Este comportamiento solo puede ser visto con las variables definidas con var, pues si defines una variable con let y la llamas antes de su definicion te arrojara un error que se denomina el TDZ(Temporal Dead Zone) y eso es porque las variables definidas con let son variables de bloque.

Enfocado a funciones es mas sencillo, simplemente eleva la funcion antes de su llamada.

```js
print_message("Hola amigo");

function print_message(pStrMessage){
  console.log(`El mensaje encubierto es: ${pStrMessage}`);
}
```

Lo que hace JavaScript por detras es esto:

```js
function print_message(pStrMessage){
  console.log(`El mensaje encubierto es: ${pStrMessage}`);
}

print_message("Hola amigo");
```

Recalcar que esto solo funciona con funciones nativas, pues si decides llamar un Arrow Function antes de su definicion, te dara un error pues si es definida con let cae en TDZ y si fuese con var su valor seria undefined.

### Variables Scopes

Denominado el alcance o ambito que puede alcanzar una variable a lo largo del programa.

En otras palabras es el contexto en el que las variables, funciones y objetos estan disponibles para ser accedidos y/o referenciados en el codigo, eso quiere decir que puede limitarse el uso de ellas en diferentes partes del codigo.

Existen 3 tipos de Scope:

#### Global

Contexto en el cual el acceso de la variable, funcion u objeto puede ser accedida desde cualquier parte del codigo.

```js
let mStrNombre = "Carlos Rimachi";

if(true){
  console.log(mStrNombre);
}

function sayHello(){
  console.log(`Hola ${mStrNombre}`);
}
```

#### Local

Contexto en el cual se definen variables, funciones u objetos dentro de una funcion o bloque(sentencia de control(if, switch, etc), bucles(for, while, etc))

```js
function calculateAge(pIntBornYear){
  let mIntYear = new Date().getFullYear();
  console.log(`Tu edad es de ${mIntYear - pIntBornYear}`);
}

calculateAge(2002);
console.log(mIntYear) // undefined, pues la variable no es global
```

#### Block

Refiere a variables que solo pueden ser accedidas dentro del bloque en el que fueron declaradas.

```js
function isAdult(pIntBornYear){
  let mIntYear = new Date().getFullYear();
  let mIntAge = mIntYear - pIntBornYear

  if(mIntAge > 18){
    let mStrMessage = `La edad es de ${mIntAge}`;
    console.log(mStrMessage);
  }
  console.log(mStrMessage); // undefined, pues la variable solo pertenece a ese bloque if.
}
```

## DATA TYPES

Refiere al tipo de datos que puede contener una variable

### Primitive Types

- String
    - Tipo de dato de texto, definido entre comillas dobles o simples
- Number
    - Tipo de dato numerico, tanto numeros enteros, decimales, hexadecimales, octales, binarios.
- Boolean
    - Tipo de dato de verdad, solo puede tener el valor True(verdad) o False(falso)
- Bigint
    - Tipo de dato numerico entero extremadamente grande
- null
    - Tipo de dato vacio, sin valor
- undefined
    - Tipo de dato indefinido, variable sin especificacion

```js
// String
let mStrVal1 = "texto base";
let mStrVal2 = "a";
let mStrVal3 = 'texto simple';

// Number
let mIntNumber1     = 12; // entero
let mIntNumber2     = 73.43; // decimal
let mIntNumber3     = -52;
let mIntHex         = 0xff; // hexadecimal notation
let mIntBinario     = 0b11111111; // binary notation
let mIntExponential = 0.255e3; // exponential notation

// Boolean
let mBool1 = true;
let mBool2 = false;

// Bigint
const bigIntLiteral = 1234567890123456789012345678901234567890n;

// null
let mNullVal = null;

// undefined
console.log(mNotInformed) //undefined
```

Estos tipos de datos son primitivos, eso quiere decir que su asignacion se da por valor.

Para dar contexto significa que cuando una variable copia el valor de otra, este valor no cambia cuando es modificado en su copia. Sino que se busca otro espacio en memoria donde se le asigna el nuevo valor.

### Object

Tipo de dato compuesto, este tipo de datos son entidades mutables que pueden almacenar colecciones de datos(propiedades) y funcionalidades(metodos). Algo caracteristico de este tipo es que cada propiedad o metodo puede ser llamada con el nombre de una llave.

Su uso es por referencia, por lo que al hacer una igualdad a otra variable, culaquier cambio en la primera o segunda hara un cambio en ambas.

En una igualdad ambos daran true si referencian al mismo Objeto, una caracteristica curiosa es que un objeto declarado como const, puede ser modificado.

```js
let mObjInfo1 = {
  nombre: "Carlos",
  edad: 22,
  sayHi: function(){
    console.log('Hola');
  }
}

mObjInfo2 = mObjInfo1;

/**
* este cambio afectara a ambos
* ya que la asignacion de arriba no es una copia
* a diferencia de los primitivos, esta es una referencia
*/

mObjInfo2.edad = 35

console.log(mObjInfo1 == mObjInfo2) // true
```

Para una explicacion mas a fondo, la refencia son aquellas flechas que apuntan al Object, cuando se iguala Object2 a Object1 por detras solo se le esta dando la llave de referencia a ese espacio en memoria por lo que cualquier cambio en uno u otro afecta en ambos pues ambos apuntan a la misma referencia(espacio en memoria).

![Object Reference](./src/object_reference.png)

### Built in Objects

Objetos integrados o globales, aquellos Objetos disponibles de forma predeterminadas por el mismo Lenguaje(JavaScript).

- Globales: (Object, Function, Error, Boolean, Symbol, JSON, Reflect, Proxy)
- Datos y Valores: (Number, BigInt, Math, String, Date)
- Estructurados: (Array, Map, Set, WeakMap, WeakSet)
- Programacion Funcional: (Promise, Generator, GeneratorFunction)
- Navegador web: (Windows, Document, Fetch, Event)
- Otros: (RegExp, Iterator, AsyncIterator, ArrayBuffer, DataView, TypedArray)

### Object Prototype

JavaScript es un lenguaje orientado a Objetos basado en Prototipos. Y este es un objeto asociado a cada funcion y objeto por defecto, de la cual podemos hacer uso para agregar metodos y propiedades a nivel global que seran compartidos en cada instancia de objeto.

```js
// Definición de una función constructora
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar un método al prototype de Persona
Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

// Crear una nueva instancia de Persona
const persona1 = new Persona('Carlos', 22);

// Llamar al método saludar, que está definido en el prototype
persona1.saludar(); // Hola, mi nombre es Carlos y tengo 22 años.
```

### Prototypal Inhetirance

Herencia prototipica, refiere a la capacidad de un objeto de heredar las propiedades y metodos de otro objeto.

En prueba, supon que tienes un objeto y llamas un metodo o propiedad que tu no defines, este hace la busqueda en su prototipo, al no encontrar busca en el prototipo global.

### typeof Operator

Operador JavaScript que nos permite conocer el tipo de dato de algun valor en un programa JavaScript

```js
// Operador typeof
console.log(typeof mBool1)// boolean
console.log(typeof mStrVal3)// string
```

## TYPE CASTING

Refiere la transformacion de un tipo de dato a otro.

### Implicit Type Casting

Conversion implicita conocida como Coercion, aquella conversion que se hace de manera automatica por el interprete de JavaScript segun sea necesario.

```js
/**
* Convierte el valor numerico(12) a string, lo que da como resultado
* la concatenacion de valores 1412
*/
let addNum1 = "14" + 12;
console.log(addNum1) // 1412

/**
* Convierte el texto(14) a valor tipo number, lo que permite operar
* aritmeticamente, dando como resultado 36
*/
let addNum2 = 12+ "14";
console.log(addNum2) // 36

/**
* Convierte el valor null a boolean, que es false
* Al ser false no imprime el mensaje por consola
*/
if(null){
  console.log("Hola");
}

/**
* Convierte el valor 12 a boolean, al ser un nro mayor a 0
* su valor es true, por lo que imprimira el mensaje por consola
*/
if(12){
  console.log("Hola de nuevo");
}
```

En cada uno de los casos se hicieron las conversiones correspondientes segun tipo de dato.

Este es el tipo de ocasiones en la que se da una conversion implicita y existen muchas otras.

### Explicit Type Casting

Conversion Explicita conocida como Type Conversion, aquella conversion en la que el programador interviene para hacer una conversion de manera intencional. 

```js
/**
* Conversion explicita del texto a number, en muchas ocasiones las haremos
* para evitar errores de conversion de forma implicita
*/
let mStrBornYear = "2002";
let mIntActualYear = 2024;

console.log(mIntActualYear - Number(mStrBornYear));

/**
* Conversion de String a Object
*/
let mStrInfo = '{"name":"Carlos", "edad": 22}';
let mObjInfo = JSON.parse(mStrInfo);

console.log(typeof mObjInfo);
```

### Type Conversion vs Coercion

Cada tipo tiene sus propias caracteristicas, la coercion es dinamica mientras que el type conversion es mas especifica. Mi recomendacion es usar el Type conversion pues asi evitas errores de conversiones y sabes con que tipos de datos trabajas.

## METODOS DE TIPOS PRIMITIVOS

## DATA STRUCTURES

### Indexed Collections

Colecciones de datos que tienen indices numericos  ordenados iniciando con 0, hasta el maximo.

Puedes almacenar datos de cualquier tipo e incluso mezclados.

- Arrays
    - Coleccion de datos de diferentes tipos.
- Typed Arrays
    - Conjunto de Objetos que permiten gestion con datos binarios. Solo enfocado a trabajar con datos numericos y binarios.

```js
// Arrays
let mArrCollect1 = [1, 2, 3];
let mArrCollect2 = ["Carlos", 22, true];

// Typed Arrays
/**
* Enteros sin signo: Uint8Array, Uint16Array, Uint32Array
* Enteros con signo: Int8Array, Int16Array, Int32Array
* Numeros de punto flotante: Float32Array, Float64Array
*/
const mTypedArr = new Uint8Array(12);
```

### Keyed Collections

Colecciones de datos ordenadas y accesadas por clave. Una coleccion ya vista seria un Objeto literal. Esta es otra lista de colecciones:

- Map
    - Collecion de pares clave-valor, esta permite usar cualquier tipo de dato como clave
- Set
    - Coleccion diseñado para almacenar valores unicos, puede almacenar cualquier tipo de dato.
- WeakMap
    - Similar a Map, pero con restricciones. Las claves deben de ser objetos, aquellas llaves referidas pueden ser eliminadas automaticamente.
- WeakSet
    - Similar a Set pero solo puede almacenar objetos como valores, tampoco es un iterable ni tiene metodos de inspeccion de contenido.

```js
// Map
const mMap = new Map();
mMap.set("name", "Carlos");
mMap.set(1234, "edad");
mMap.set({id: 1}, true);
mMap.set("valor", 1234);

mMap.get(1234) // "edad"
mMap.has("valor") // true
mMap.delete("valor");
console.log(mMap.size) // 4

// WeakMap
const mwMap = new WeakMap();

let mObj1 = {id: 1};
let mObj2 = {"name": "Luis"};

mwMap.set(mObj1, true);
mwMap.set(mObj2, "Valor generico");

mwMap.get(mObj2) // "Valor generico"
mwMap.has(mObj1) // true
mMap.delete(mObj1);

// Set
const mSet= new Set();

mSet.add(1234)
mSet.add("Hola amigo")
mSet.add({id: 12});

mSet.has(1234) // true
mSet.delete("Hola amigo");
console.log(mSet.size) // 3

// WeakSet
const mwSet = new WeakSet();

mwSet.add(mObj1);
mwSet.add(mObj2);

mwSet.has(mObj1) // true;
mwSet.delete(mObj2)
```

### Structured Data

Refiere estructuras de datos organizadas de forma jerarquica lo que facilita su gestion, el mas comun es el literal Object. Refiriendo el literal Object existe el JSON.

JSON (JavaScript Object Notation), formato de dato ligeto basado en texto para compartir informacion entre sistemas. Es una estructura independiente de texto plano que lo hace factible para aplicaciones web y APIS.

```json
{
  "name": "Azrael",
  "edad": 25,
  "profesion": "Abogado"
}
```

Si bien esto se ve como un objeto literal, cuando es recibido o creado en un fichero JavaScript funciona de la sgte manera:

```js
let mJSONData = '{"name":"Azrael","edad":25,"profesion":"Abogado"}'

// Metodos para convertir JSON a literal Object y viceversa
let mObjInfo = JSON.parse(mJSONData)

console.log(mObjInfo);
console.log(JSON.stirngify(mObjInfo)); // Convierte Objeto a JSON.
```

### PROPIEDADES Y METODOS DE DATA STRUCTURES

#### Arrays

##### Propiedades
- length

##### Metodos
- at
- pop
- push
- shift
- unshift
- for of
- splice(navaja suiza)
- slice
- concat
- split
- join
- foreach
- indexOf
- lastIndexOf
- includes
- find
- findIndex
- findLastIndex
- filter
- map
- sort

## EQUALITY COMPARISONS

Usados para determinar igualdad o diferencia entre variables y valores. Pueden ser utilizadas en sentencias de condicion.

### Value Comparison Operators

Operadores de igualdad de valores. Contamos con 3:

- == : Realiza la conversion de tipo antes de evaluar la igualdad.
- === : Realiza la comparacion del tipo de dato y valor.
- Object.is : Este metodo determina si 2 valores son el mismo valor, recalcar que no es equivalente a "==".

```js
console.log("1" == 1); // true
console.log("1" === 1); // false
console.log(Object.is("12", 12)); // false
console.log(Object.is(12, 12)); // true
```

### Equality Algorithms

Metodos utilizados para comparar valores y determinar si son equivalentes. Estan referidos en algunos de los metodos ya sea de Arrays, Set, Maps, entre otros.

- isLooselyEqual (==): Comparacion de valores despues de convertirlos al mismo tipo(coercion). Puede ser impredecible
- isStrictlyEqual (===): Igualdad estricta, compara valores y tipos sin conversion. Es seguro y predecible
- SameValueZero: Similar a === pero trata NaN como igual a si mismo, y no distingue entre +0 y -0
- SameValue: Igual a SameValueZero pero este si diferencia entre +0 y -0

## EXPRESSIONS AND OPERATORS

- Expresion
    - Fragmento de codigo que produce un valor.
- Operador
    - Simbolo que realiza una operacion sobre uno o mas valores.

### Arithmetic Operators

```js
console.log(12 + 3) // 15 -> Suma
console.log(12 - 3) // 9 -> Resta
console.log(12 * 3) // 36 -> Multiplicacion
console.log(12 / 3) // 4 -> Division
console.log(2 ** 3) // 8 -> Potencia
console.log(12 % 5) // 2 -> Modulo
```

### Logical Operators

```js
// && : Operador 'Y', solo devolvera true si ambos operandos son true
console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false

// || : Operador 'O', devuelve true si al menos un operando es true
console.log(true ||true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false

// ! : Operador negacion, da lo opuesto a lo brindado
console.log(!true) // false
console.log(!false) // true

// ?? : Operador nulling, si el primer valor es null, mostrara el 2do valor
console.log(null ?? 12) // 12
console.log("hola" ?? 43) // hola
```

### Unary Operators
```js
/**
Incremento y decremento posterior
Su valor sera incrementado cuando vuelva a ser invocado
*/
let a = 12;
a++
console.log(a) // 13
a--
console.log(a) // 12

/**
Incremento y decremento previo
Su valor sera incrementado de manera inmediata
*/
let b = 12
console.log(++b) // 13
console.log(--b) // 12

// Otros Operadores
console.log(!true) // false, negacion logica
console.log(typeof 15) // number, tipo de
Comparison Operators
console.log(12 > 3) // true, mayor que
console.log(12 >= 3) // true, mayor igual que
console.log(12 < 3) // false, menor que
console.log(12 <= 3) // false, menor igual que
console.log(12 == "12") // true, igual que
console.log(12 === "12") // false, igual estricto que
console.log(12 != "12") // false, diferente de
console.log(12 !== "12") // true, diferente estricto que
Conditional Operators
/**
Operador Ternario: Evalua una condicion y devuelve un valor en cualquier
  ambito, sea true o false

(condition) ? valTrue: valFalse
*/
let mVal = 12 > 3 ? "soy mayor": "soy menor";

console.log(mVal) // soy mayor
```

### Bitwise Operators

Operadores Bit, aquellos que tratan los argumentos como 32 bits, funcionan a nivel de su representacion binaria.

```js
// & : Operador Y binario, sigue la misma logica pero a nivel de bits
console.log(true & true); // 1
// | : Operador O binario, sigue la misma logica pero a nivel de bits
console.log(false | false); // 0
// ^ : Operador XOR, devuelve 1(true) si los dos operandos son diferentes
console.log(true ^ false); // 1
// ~ : Operador NOT, invierte los bits
console.log(~12); // -13
// << : Operador de desplazamiento a la izquierda
//      desplaza los bits a la izquierda
console.log(1 << 1); // 2
// >> : Operador de desplazamiento a la derecha
//      desplaza los bits a la derecha
console.log(1 >> 1); // 0
// >>> : Operador de desplazamiento a la derecha sin signo
//       desplaza los bits a la derecha
console.log(156 >>> 1); // 78
```

### Otros Operadores

- Comma Operators: Refiere al signo "," (coma), que interviene en diferentes estructuras, lo veras en bucles, en objetos.
- Assignment Operators: Operador de asignacion, refiere al signo "=", en el que se identifica a una variable, y se le asigna un valor
- String Operators: Existe un operador de concatenacion que se encarga de sumar cadenas(strings)
- BigInt Operators: Simula todos los operadores de number, pero no admite el operador ">>>" de desplazamiento a la derecha

```js
// Assignment Operators
let mValOne = 12;
// String Operators
let mStr = "hola"

mStr += " amigo";
console.log(mStr) // hola amigo
```

## CONTROL FLOW

Flujo de control, secuencia en el que el ordenador ejecuta el codigo de arriba hacia abajo pero existen instrucciones que pueden cambiar la secuencia de este.

- Secuencial (Modo predeterminado)
- Declaraciones condicionales
- Manejo de Excepciones
- Bucles e Iteraciones

### Conditional Statements

Sentencias que nos permiten evaluar expresiones y en base al resultado seguir un camino u otro

```js
/**
if - else: Condicional que nos permite evaluar casos y seguir un camino.
           Existen 3 ambitos que siguen:

if: condicional inicial (obligatorio)
else if: condicional secuencial (pueden haber n. existencias)
else: si ninguna condicional cumple
*/
let mIntEdad = 22;

if(mIntEdad> 28){console.log("soy un adulto")}
else if (mIntEdad>= 18){console.log("soy un joven")}
else {console.log("soy un menor de edad")}

/**
switch: Instruccion que recibe un valor y compara este con cada uno 
        de sus clausulas.

En el caso evalua la variable con el valor de cada case.
Cada case puede tener su propia logica, pero para diferenciarla de la
sgte debes de establecer un break.
Puedes establecer un valor "default" por si no coincide con ninguno
*/
let mStrMonth = "Marzo"

switch(mStrMonth){
    case "Enero":;
    case "Febrero":;
    case "Marzo": console.log("Otoño"); break;
    case "Abril":
    case "Mayo":
    case "Junio": console.log("Invierno"); break;
    case "Julio":
    case "Agosto":
    case "Septiembre": console.log("Primavera"); break;
    case "Octubre":
    case "Noviembre":
    case "Diciembre": console.log("Verano"); break;
    default: console.log("Not value");
}
```

### Exceptional Statements

Refiere a la gestion de Errores, como el generarlo, obtenerlo y controlarlo.

```js
/**
try - catch: Sentencia de control que evalua un bloque de codigo
             que podemos suponer que puede generar errores.

try: bloque normal de ejecucion
catch: bloque en el cual definimos acciones en caso de error
finally: bloque de ejecucion haya o no errores.

throw: Sentencia que nos permite provocar un error.

*/
try{
  throw new Error("Error de Test");
}catch(err){
  console.log(err.message);
}finally{
  console.log("Fin de secuencia")
}

/**
Error Objects: Asi como el Objeto "new Error", existen otros que informan
               el tipo de Error

- SyntaxError    -> Error de sintaxis
- ReferenceError -> Error de referencia
- TypeError      -> Error de Tipo de Dato
- RangeError     -> Error de Rango, enfocado a colecciones

Todos estos heredan de Error, y cuentan con propiedades como message y name
*/
```

### Loops and Iterations

Bucles e iteraciones, refiere a ejecutar una serie o bloque de instrucciones un cierto numero de veces.

```js
/**
WHILE
- Bucle que se ejecutara mientras la condicion sea verdadera
- El ejemplo de muestra es simple, se ejecutara hasta que mIntMax sea igual
a 2, en total se ejecutara 3 veces.

IMPORTANTE: Si la condicion del while es falsa no se ejecutara nada.

NOTA: Es crucial darle fin al bucle, caso contrario el programa no
      dejara de ejecutarse.
      Si no reduzco el valor de mIntMax, nunca terminara la ejecucion.
*/
let mIntMax = 5;

while(mIntMax > 2){
  console.log(mIntMax);
  mIntMax--;
}

/**
DO WHILE
- Similar al while, con la unica diferencia es que esta se ejecuta al menos
  una vez.
- Su caracteristica es ejecutar el codigo y luego evaluar la condicion
- El ejemplo 1 ejecutara el console.log y nada mas
- El ejemplo 2 ejecutara su bloque hasta que el arreglo este vacio.

NOTA: Sigue las mismas reglas, condicionarlo para darle fin al bucle y
      que continuara solo si su condicion es verdad.
*/

// =============================== EJEMPLO 1
do{
  console.log('Me ejecutare una vez');
}while(false)

// =============================== EJEMPLO 2
let mArrData = ["Carlos", "Jose", "Eduardo", "Vicente"];

do{
  mArrData.pop(); // metodo de los Array que elimina el ultimo elemento
  console.log(mArrData)
}while(mArrData.length)

/**
FOR
- Bucle basado en indices o nro de iteraciones
- A diferencia de los anteriores, este tiene que definir 3 declaraciones:
  - inicializador
  - condicional
  - incremento

- El ejemplo 1 es el mas basico, explicare el codigo:
  - let i = 0  (inicializador)
  - i < 10     (condicional)
  - i++        (incremento)

- Con ello claro, lo que imprimira es 0...9

IMPORTANTE: Si no quisieras establecer las 3 declaraciones, tendrias que
            hacerlo fuera pero establecer los ";" para diferenciar lo
            que ingresaras. El ejemplo 2 explica ello. Pero recalcar que si
            quisieras hacer ello, mejor usa otro bucle.

NOTA: Cuando refiero incremento, no necesariamente puede ser ello. Tambien
      puedes hacer uso de decremento sin problema.
*/

// =============================== EJEMPLO 1
for (let i=0; i<10; i++) {
  console.log(i);
}

// =============================== EJEMPLO 2
let mIntIdx = 12;

for(;mIntIdx > 7;){
  console.log(mIntIdx);
  mIntIdx--;
}

/**
```

### ESTRUCTURAS DE CONTROL DE FLUJO

Estas instrucciones nos permiten controlan la secuencia de un bucle a
nuestra manera dependiendo ya sea de alguna condicion, de algun valor o
de manera directa.

- break: Se encarga de romper el bucle y salir de este
- continue: Se encarga de continuar con el bucle omitiendo las instrucciones
  posteriores a su llamada.

**`NOTA: Si tienes conocimientos, se que existen metodos a nivel de Array para hacer las acciones que realizo con los bucles, pero esto va desde bases.`**

```js
/* =============================== EJEMPLO 1
La sentencia continue dentro del bucle nos obliga a pasar al sgte
elemento si este es menor que 30, solo agregando asi los valores
mayores. Logrando asi tener un arreglo filtrado.
*/

let mArrAges = [43, 24, 17, 32, 28, 22, 34, 43];
let mArrFilter = []

for(let i = 0; i < mArrAges.length; i++){
  if(mArrAges[i] < 30) {continue;}
  mArrFilter.push(mArrAges[i])
}

console.log(mArrFilter)

/* =============================== EJEMPLO 2
Aqui lo que queremos es saber si existe valores false en el arreglo. Por
ello cuando se encuentra uno decido hacer un break para salir del bucle
ya que no me interesa saber que otro valor existe.
*/
let mArrTest = [true, true, false, true, false];
let mBoolTest = true;

for(let i = 0; i < mArrTest.length; i++){
  if(!mArrTest[i]){
    mBoolTest = false;
    break;
  }
}

console.log(mBoolTest)
```

### MAS BUCLES

Son referencias de bucle for enfocados a tipos de Datos (Colecciones y
Objetos).

- FOR OF
    - Nos permite obtener y asignar el valor de una coleccion de manera directa
    - Solo funciona con colecciones (Arrays, Sets)

- FOR IN
    - Nos permite iterar sobre Objects.

```js
// =============================== EJEMPLO 1
let mArrInfo = ["Franco", "Luis", "Rodrigo", "Raul"];
for(let mStrVal of mArrInfo){
  console.log(mStrVal)
}

// =============================== EJEMPLO 2
let mObjPerson = {
  name: "Luis",
  age: 32,
  married: false
};

for(let mStrProp in mObjPerson){
  console.log(mStrProp, mObjPerson[mStrProp])
}
```

Como comentario adicional, los ejemplos de cada bucle son sencillos para que comprendas que realiza. De por si puedes establecer una logica mas avanzada dentro de cada uno y alli podras identificar cual de todos te sirve mas.

## FUNCTIONS

Bloque de código reutilizable que puede incluir sentencias, flujos y bucles, diseñado para cumplir una tarea específica.

```js
/**
 DEFINICION DE FUNCIONES
 =======================
 Cuando defines una funcion, esta debe de tener un nombre con el cual
 pueda ser llamada/invocado.

 Como objetivo, una funcion tiene que cumplir un objetivo y enfocado a
 ello debes de asignarle un nombre. Te recomiendo hacer uso de nombres con
 nomenclatura camelCase.

 Ahora bien, las funciones tambien pueden solicitar y devolver valores.
 Cuando la funcion solicita valores estos son conocidos como parametros y
 una funcion puede solicitar n. nro de parametros.
 Y como comente puede retornar valores, para retornarlos hacemos uso de la
 palabra reservada "return" acompañado del valor de retorno.

 Para invocar la funcion debes de llamar la funcion acompañado de "()".
 Esto es lo que hace una funcion a nivel basico.

 NOTA: Si la funcion que invocas requiere parametros debes de enviarle
       valores, caso contrario tomara los valores como "undefined" y en
       muchas ocasiones puede dar error.
*/

// ============== FUNCION SIMPLE
function sayHi(){
  console.log("Hi");
}

// ============== FUNCION CON PARAMETROS
function printMessage(pStrMessage){
  console.log(pStrMessage);
}

// ============== FUNCION CON VALOR DE RETORNO
function addNums(pIntVal1, pIntVal2){
  return pIntVal1 + pIntVal2;
}

// LLAMADA DE FUNCION
sayHi();
printMessage("Holis");

let mIntResponse = addNums(12.54, 43.2);
console.log(mIntResponse);
```

### Function Parameters
Como se comento, una funcion puede solicitar parametros. Pero no queda alli, existen funcionalidades para ellas.

```js
/**
DEFAULT PARAMETERS
==================
Refiere a valores por defecto que le podemos dar a nuestros parametros.
Previamente se dijo que si una funcion requiere de parametros y estos no
son informados, el valor que toman son undefined.

Esta caracteristica de valor por defecto evita esos errores.
Pero cabe recalcar que es no es recomendable hacer uso excesivo de ellos.

En el ejemplo, si no se especifica el valor por defecto de pIntAge
no imprimira nada por consola pues la resta no devolvera ningun valor
numerico.
*/
function passToShow(mStrName, pIntAge = 18){
  let mDate = new Date();
  let mIntYear = mDate.getFullYear() - pIntAge;

  if (mIntYear < 1945) {
    console.log(`${mStrName} perteneces a la Generacion silenciosa`);
  } else if (mIntYear < 1964) {
    console.log(`${mStrName} perteneces a la Generacion Baby Boomers`);
  } else if (mIntYear < 1980) {
    console.log(`${mStrName} perteneces a la Generacion X`);
  } else if (mIntYear < 1996) {
    console.log(`${mStrName} perteneces a la Generacion Y`);
  } else if (mIntYear < 2012) {
    console.log(`${mStrName} perteneces a la Generacion Z`);
  } else if (mIntYear < 2025) {
    console.log(`${mStrName} perteneces a la Generacion Alpha`);
  }
}

passToShow("Carlos", 22); // Generacion Z
passToShow("Lucas"); // Generacion Z

/**
REST PARAMETERS
===============
Refiere cuando una funcion no sabe cuantos parametros le enviaran, decide
hacer uso de parametros rest que es un arreglo que se encarga de tomar
todos los valores enviados en su llamada

IMPORTANTE: Es obligatorio que este parametro rest sea el ultimo, pues si
            decides anteponerlo a otro parametro, el siguiente no sera
            tomado en cuenta.

En el ejemplo haremos diferentes operaciones ya sea suma, resta o
multiplicacion. Hago uso de forEach para iterar los elementos del parametro
REST(es un arreglo).
Y en base a condicionales haremos una u otra accion.
*/
function operateNums(pStrOperation, ...pRestNums){
  let mNumResponse;

  pRestNums.forEach(mIntVal => {
    if (mNumResponse == null ||
        mNumResponse == undefined) {
      mNumResponse = mIntVal;
      return;
    }
    if(pStrOperation == "add") mNumResponse += mIntVal;
    if(pStrOperation == "sub") mNumResponse -= mIntVal;
    if(pStrOperation == "mul") mNumResponse *= mIntVal;
  })
  return mNumResponse;
}

console.log(operateNums("add", 43.32, 12, 54, 2, 6.6, 78.9, 33));
console.log(operateNums("sub", 3829, 1299, 223, 1324));
console.log(operateNums("mul", 2, 2, 2));
```

### arguments object

Es un objeto que almacena todos los valores (argumentos) enviados a una función parametrizados por numero de indice empezando con 0. Mientras que los parámetros son los nombres definidos en la declaración de la función, los argumentos son los valores que se pasan cuando se invoca la función.

```js
function printMessage(pStrMessage){
  console.log(arguments);
}

// RESULTADO: {"0": 'Hola', "1": 'me llamo Carlos', "2": true}
printMessage("Hola", "me llamo Carlos", true);
```

No es nada mas que un objeto que puedes utilizar cuando envian valores de mas y/o parametrizar con indices si no pidieses ningun parametro y te envian informacion.

### Arrow Functions

Funciones flecha, similar a una funcion solo que esta puede ser definida y ejecutada de manera directa dependiendo del ambito.

```js
// Arrow Function (definicion e invocacion)
let printMessage = (pStrMessage) => {
  console.log(pStrMessage)
}

printMessage();

// Arrow Function como callback
let mArrNames = ["carlos", "maycol", "erick"];
mArrNames.forEach(mStrValue => {
    console.log(mStrValue)
})

/**
IMPORTANTE: Cuando realices un callback el uso de parentesis para su
            definicion es subjetivo, puedes omitirlo si solo necesitas un
            parametro. Pero si no especificas ninguno es de uso obligatorio
            los parentesis antes de la flecha '=>'.

NOTA: Enfocado al arrow function como callback este refiere que sera
      definido e invocado de manera directa.
*/
```

A diferencia de la funcion normal, estas funciones no cuentan con el object arguments ni con su propio "this".

### IIFEs

Refiere a Funcion en Expresion invocada inmediatamente(Immediately Invoked Function Expression), el nombre es claro en su definicion.

```js
(function(){
  console.log("Holis");
})();

((pStrMessage)=> {
  console.log(`Message: ${pStrMessage}`);
})("Hola, que tal amigo?");
```

Puedes establecerlas en formato de funcion normal o funcion flecha. Pero es de suma importancia que si definiras mas de un IIFE al culminar su llamado lo cierres con un ";", caso contrario generara error.

### Built-in Functions

Refiere a funciones(metodos) de objetos integrados en JavaScript. Entre ellos existen:

```js
// Number
let mDecNro = 45.6789;

console.log(mDecNro.constructor()); // function Number() { [native code] }
console.log(mDecNro.toExponential()); // 4.56789e+1
console.log(mDecNro.toFixed(2)); // 45.68
console.log(mDecNro.toLocaleString()); // 45.679 (depending on locale)
console.log(mDecNro.toString()); // "45.6789"
console.log(mDecNro.toPrecision(2)); // "46"
console.log(mDecNro.valueOf()); // 45.6789

// Boolean
let mBoolVal = true;

console.log(mBoolVal.constructor()); // function Boolean() { [native code] }
console.log(mBoolVal.toString()); // "true"
console.log(mBoolVal.valueOf()); // true

// String
// String
let mStrVal = "Hello, World!";

console.log(mStrVal.constructor()); // function String() { [native code] }
console.log(mStrVal.charAt(0)); // "H"
console.log(mStrVal.charCodeAt(0)); // 72
console.log(mStrVal.codePointAt(0)); // 72
console.log(mStrVal.concat(" How are you?")); // "Hello, World! How are you?"
console.log(mStrVal.endsWith("!")); // true
console.log(mStrVal.includes("World")); // true
console.log(mStrVal.indexOf("o")); // 4
console.log(mStrVal.lastIndexOf("o")); // 8
console.log(mStrVal.localeCompare("hello, world!")); // -1
console.log(mStrVal.match(/World/)); // ["World"]
console.log(mStrVal.normalize()); // "Hello, World!"
console.log(mStrVal.padEnd(20, '*')); // "Hello, World!*******"
console.log(mStrVal.padStart(20, '*')); // "*******Hello, World!"
console.log(mStrVal.repeat(2)); // "Hello, World!Hello, World!"
console.log(mStrVal.replace("World", "JavaScript")); // "Hello, JavaScript!"
console.log(mStrVal.search("World")); // 7
console.log(mStrVal.slice(0, 5)); // "Hello"
console.log(mStrVal.split(", ")); // ["Hello", "World!"]
console.log(mStrVal.startsWith("Hello")); // true
console.log(mStrVal.substring(0, 5)); // "Hello"
console.log(mStrVal.toLocaleLowerCase()); // "hello, world!"
console.log(mStrVal.toLocaleUpperCase()); // "HELLO, WORLD!"
console.log(mStrVal.toLowerCase()); // "hello, world!"
console.log(mStrVal.toUpperCase()); // "HELLO, WORLD!"
console.log(mStrVal.trim()); // "Hello, World!"
console.log(mStrVal.trimEnd()); // "Hello, World!"
console.log(mStrVal.trimStart()); // "Hello, World!"
console.log(mStrVal.valueOf()); // "Hello, World!"

// Array
let mArrVal = [1, 2, 3, 4, 5];

console.log(mArrVal.constructor()); // function Array() { [native code] }
console.log(mArrVal.concat([6, 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log(mArrVal.copyWithin(0, 3)); // [4, 5, 3, 4, 5]
console.log(mArrVal.entries().next().value); // [0, 4]
console.log(mArrVal.every(num => num < 6)); // true
console.log(mArrVal.fill(0, 2, 4)); // [4, 5, 0, 0, 5]
console.log(mArrVal.filter(num => num > 2)); // [4, 5, 5]
console.log(mArrVal.find(num => num > 2)); // 4
console.log(mArrVal.findIndex(num => num > 2)); // 0
console.log(mArrVal.forEach(num => console.log(num))); // 4 5 0 0 5
console.log(mArrVal.includes(5)); // true
console.log(mArrVal.indexOf(5)); // 1
console.log(mArrVal.join('-')); // "4-5-0-0-5"
console.log(mArrVal.keys().next().value); // 0
console.log(mArrVal.lastIndexOf(5)); // 4
console.log(mArrVal.map(num => num * 2)); // [8, 10, 0, 0, 10]
console.log(mArrVal.pop()); // 5
console.log(mArrVal.push(6)); // 5
console.log(mArrVal.reduce((acc, num) => acc + num, 0)); // 14
console.log(mArrVal.reduceRight((acc, num) => acc + num, 0)); // 14
console.log(mArrVal.reverse()); // [6, 0, 0, 5, 4]
console.log(mArrVal.shift()); // 6
console.log(mArrVal.slice(1, 3)); // [0, 5]
console.log(mArrVal.some(num => num > 4)); // true
console.log(mArrVal.sort()); // [0, 0, 4, 5]
console.log(mArrVal.splice(2, 1, 7)); // [4]
console.log(mArrVal.toString()); // "0,0,7,5"
console.log(mArrVal.unshift(1)); // 5
console.log(mArrVal.values().next().value); // 1

// Date
let mDateVal = new Date();

console.log(mDateVal.constructor()); // function Date() { [native code] }
console.log(mDateVal.getDate()); // (current day of the month)
console.log(mDateVal.getDay()); // (current day of the week)
console.log(mDateVal.getFullYear()); // (current year)
console.log(mDateVal.getHours()); // (current hour)
console.log(mDateVal.getMilliseconds()); // (current milliseconds)
console.log(mDateVal.getMinutes()); // (current minutes)
console.log(mDateVal.getMonth()); // (current month)
console.log(mDateVal.getSeconds()); // (current seconds)
console.log(mDateVal.getTime()); // (milliseconds since January 1, 1970)
console.log(mDateVal.getTimezoneOffset()); // (difference in minutes between UTC and local time)
console.log(mDateVal.getUTCDate()); // (UTC day of the month)
console.log(mDateVal.getUTCDay()); // (UTC day of the week)
console.log(mDateVal.getUTCFullYear()); // (UTC year)
console.log(mDateVal.getUTCHours()); // (UTC hour)
console.log(mDateVal.getUTCMilliseconds()); // (UTC milliseconds)
console.log(mDateVal.getUTCMinutes()); // (UTC minutes)
console.log(mDateVal.getUTCMonth()); // (UTC month)
console.log(mDateVal.getUTCSeconds()); // (UTC seconds)
console.log(mDateVal.setDate(15)); // (sets the day of the month to 15)
console.log(mDateVal.setFullYear(2022)); // (sets the year to 2022)
console.log(mDateVal.setHours(10)); // (sets the hour to 10)
console.log(mDateVal.setMilliseconds(500)); // (sets the milliseconds to 500)
console.log(mDateVal.setMinutes(30)); // (sets the minutes to 30)
console.log(mDateVal.setMonth(5)); // (sets the month to June)
console.log(mDateVal.setSeconds(45)); // (sets the seconds to 45)
console.log(mDateVal.setTime(Date.now())); // (sets the time to the current time)
console.log(mDateVal.setUTCDate(20)); // (sets the UTC day of the month to 20)
console.log(mDateVal.setUTCFullYear(2023)); // (sets the UTC year to 2023)
console.log(mDateVal.setUTCHours(15)); // (sets the UTC hour to 15)
console.log(mDateVal.setUTCMilliseconds(250)); // (sets the UTC milliseconds to 250)
console.log(mDateVal.setUTCMinutes(45)); // (sets the UTC minutes to 45)
console.log(mDateVal.setUTCMonth(11)); // (sets the UTC month to December)
console.log(mDateVal.setUTCSeconds(30)); // (sets the UTC seconds to 30)
console.log(mDateVal.toDateString()); // (returns the date portion of the date as a string)
console.log(mDateVal.toISOString()); // (returns the date as a string in ISO format)
console.log(mDateVal.toJSON()); // (returns the date as a JSON string)
console.log(mDateVal.toLocaleDateString()); // (returns the date portion of the date as a string, using locale conventions)
console.log(mDateVal.toLocaleString()); // (returns the date and time as a string, using locale conventions)
console.log(mDateVal.toLocaleTimeString()); // (returns the time portion of the date as a string, using locale conventions)
console.log(mDateVal.toString()); // (returns the date and time as a string)
console.log(mDateVal.toTimeString()); // (returns the time portion of the date as a string)
console.log(mDateVal.toUTCString()); // (returns the date and time as a string, using UTC conventions)
console.log(mDateVal.valueOf()); // (returns the primitive value of the date)

// Math
console.log(Math.abs(-5)); // 5
console.log(Math.acos(1)); // 0
console.log(Math.acosh(1)); // 0
console.log(Math.asin(0)); // 0
console.log(Math.asinh(0)); // 0
console.log(Math.atan(0)); // 0
console.log(Math.atanh(0)); // 0
console.log(Math.atan2(0, 1)); // 0
console.log(Math.cbrt(27)); // 3
console.log(Math.ceil(4.2)); // 5
console.log(Math.clz32(1)); // 31
console.log(Math.cos(0)); // 1
console.log(Math.cosh(0)); // 1
console.log(Math.exp(1)); // 2.718281828459045
console.log(Math.expm1(1)); // 1.718281828459045
console.log(Math.floor(4.9)); // 4
console.log(Math.fround(1.337)); // 1.3370000123977661
console.log(Math.hypot(3, 4)); // 5
console.log(Math.imul(2, 4)); // 8
console.log(Math.log(1)); // 0
console.log(Math.log1p(0)); // 0
console.log(Math.log10(10)); // 1
console.log(Math.log2(8)); // 3
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // (random number between 0 and 1)
console.log(Math.round(4.5)); // 5
console.log(Math.sign(-5)); // -1
console.log(Math.sin(0)); // 0
console.log(Math.sinh(0)); // 0
console.log(Math.sqrt(16)); // 4
console.log(Math.tan(0)); // 0
console.log(Math.tanh(0)); // 0
console.log(Math.trunc(4.9)); // 4
```

### Scope & Function Stack

- Scope
    - Alcance, espacio en el que la funcion/ variable puede ser accesada.
    - La accesibilidad depende de su definicion.
    - Existen los sgtes ambitos:
        - global
        - module
        - function
        - block
- Function Stack
    - Estructura de Datos para gestionar ejecucion de funciones
    - Cada que se invoca una funcion, se añade un marco(frame) a la estructura.
    - Esta ejecuta la secuencia con el principio LIFO(Last in, First Out), ultimo en ingresar, primero en salir.

#### Recursion

El acto de que una funcion se llama a si mismo n. nro de veces hasta que una condicional culmina su llamado.

```js
function factorial(n) {
  // Condición base: si n es 0, el factorial de 0 es 1
  if (n === 0) {
    return 1;
  }
  // Llamada recursiva: n * factorial de (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

#### Lexical Scoping

Las funciones crean su propio ambito en el que cualquier variable, funcion etc definida dentro de esta solo sera accesible por esta, llamada fuera de ambito generara error.

#### Closures

Cierres en JavaScript, caracteristica que permite a una funcion acceder a variables fuera de ambito o alcance.

```js
function crearContador() {
    let contador = 0;

    return function() {
        contador++;
        console.log(contador);
    };
}

const contador1 = crearContador();
contador1(); // 1
contador1(); // 2

const contador2 = crearContador();
contador2(); // 1
contador2(); // 2
```

## STRICT MODE

Modo estricto de JavaScript, este modo restringe muchos comportamientos de JavaScript que pasan desapercibidos a menudo, basicamente simula operar con lenguajes de alto nivel. Solo consiste en añadir la sentencia "use strict" al inicio del archivo a trabajar.

```js
"use strict"

function example() {
    // Código en modo estricto
    x = 3.14; // Esto lanzará un error porque 'x' no está declarada
}

example();
```

Como ves, el comportamiento de asignacion normal asi como otros no son tolerados por el modo estricto

## USING THIS KEYWORD

Objeto del contexto de la funcion en la que esta siendo ejecutado.

Contexto es diferente de contexto de ejecucion, refiere a la pila de ejecucion en javascript.

Recalcar que debemos de hacer binding a nivel de Objetos para que agarre el contexto this que nosotros queremos.

Existen:

- Default Binding
- Implicit Binding
    - refiere cuando this es llamado en un metodo (**in a method**)
- Explicit Binding
    - ERROR, debes de saber que cada que se invoca this, este referira el ambito del que llama, por lo que si asumes valores de otro contexto este no podra obtenerlos.
    - Refiere especificar el contexto con el que queremos que this trabaje(**Explicit Binding**). Existen los sgtes. metodos:
        - Definen el contexto y se pasan como callback
            - bind: retorna una funcion con el contexto que nosotros definimos.
        - Invocan la funcion inmediatamente (**Function Borrowing**)
            - call: el primer parametro define el objeto el cual especificara su contexto this, continuando con sus parametros separados por coma.
            - apply: similar a cal solo que este debe de enviar los parametros en formato arreglo.
- New Binding
    - Refiere cuando hacemos la instancia de un clase o funcion a una variable que setea el contexto this.
- Lexical Binding (**in arrow functions**)
    - Enfocado a arrow functions, el contexto this de arrow no cambia, ya que las arrow no tienen contexto this.

Tips:

- No usar this en funciones globales

### in a function

Cuando el objeto this es invocado, este refiere al contexto global dependiendo el entorno que puede ser (global, window, etc).

## CLASSES

Modelo a seguir, se puede considerar como la plantilla de la que instanciaremos.

Las clases en JavaScript son una forma de crear objetos y manejar la herencia. Una clase es una plantilla para crear objetos con propiedades y métodos. Puedes definir una clase usando la palabra clave `class`.

### Ejemplo de Clase con Herencia

A continuación, se muestra un ejemplo de cómo crear una clase base y una clase derivada que hereda de la clase base.

```javascript
// Definición de la clase base
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Definición de la clase derivada que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la clase base
        this.raza = raza;
    }

    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }

    mostrarRaza() {
        console.log(`${this.nombre} es un ${this.raza}.`);
    }
}

// Crear una instancia de la clase Perro
const miPerro = new Perro('Firulais', 'Labrador');
miPerro.hacerSonido(); // Firulais ladra.
miPerro.mostrarRaza(); // Firulais es un Labrador.
```

En este ejemplo:
- `Animal` es la clase base con un constructor que inicializa el nombre del animal y un método `hacerSonido`.
- `Perro` es la clase derivada que hereda de `Animal`. Utiliza `super` para llamar al constructor de la clase base y añade una propiedad `raza` y un método `mostrarRaza`.
- Se crea una instancia de `Perro` y se llaman a sus métodos para demostrar la herencia y el polimorfismo.

## ASYNCHONOUS JAVASCRIPT

### setTimeOut

Funcion que permite la ejecucion de un bloque de codigo una sola vez despues de cierto tiempo, el tiempo se delimita en milisegundos.

```js
setTimeOut(()=>{
    console.log("Hola Mundo")
}, 2000)
```

Imprimira Hola Mundo despues de 2 segundos. Tambien existe una funcion que culmina o evita su ejecucion `clearTimeOut()`.

### setInterval

Funcion que permite la ejecucion repetidamente de un bloque de codigo cada cierto tiempo, el tiempo se delimita en milisegundos.

```js
setInterval(()=>{
    console.log("Intervalo");
},2000)
```

Imprimira Intervalo cada 2 segundos, recalcar que debes de para el intervalo en una condicional sino sera infinito. Para ello existe una funcion que culmina o evita su ejecucion `clearInterval()`.

### Event Loop

Bucle de Eventos, JavaScript es un lenguaje de un solo hilo que refiere que solo puede ejecutar una tarea a la vez. Sin embargo mediante el event loop podemos gestionar multiples operaciones asincronas sin bloquear la ejecucion de codigo.

Funcionamiento:

- Call Stack: Pila de llamadas donde se apilan cada una de las funciones.
- Web APIS: APIs proporcionadas por el entorno
- Task Queue: Cola donde se almacenan tareas asincronas listas de ejecucion.
- Event Loop: Bucle que verifica la pila de llamadas y cola de tareas, call stack vacia? toma la primera tarea de task queue y la mueve al call stack.

### Callbacks

Los callbacks en JavaScript son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que la función principal haya terminado su tarea. Los callbacks son una forma de asegurarse de que cierto código no se ejecute hasta que otro código haya terminado de ejecutarse.

Aquí tienes un ejemplo simple de cómo funcionan los callbacks en JavaScript:

```js
// Definimos una función que acepta un callback
function saludar(nombre, callback) {
    console.log('Hola, ' + nombre);
    callback();
}

// Definimos una función de callback
function despedirse() {
    console.log('Adiós!');
}

// Llamamos a la función 'saludar' y le pasamos 'despedirse' como callback
saludar('Juan', despedirse);
```

En este ejemplo, `saludar` es una función que toma dos argumentos: un nombre y una función de callback. Después de imprimir un saludo, llama a la función de callback `despedirse`, que imprime un mensaje de despedida.

### Callback Hell

El "Callback Hell" ocurre cuando tienes múltiples operaciones asincrónicas que dependen unas de otras, y terminas con múltiples niveles de callbacks anidados, lo que hace que el código sea difícil de leer y mantener. Aquí tienes un ejemplo de cómo se ve el "Callback Hell":

```javascript
// Ejemplo de Callback Hell
setTimeout(function() {
    console.log('Primero');
    setTimeout(function() {
        console.log('Segundo');
        setTimeout(function() {
            console.log('Tercero');
            setTimeout(function() {
                console.log('Cuarto');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
```

Para evitar el "Callback Hell", puedes usar Promesas o `async/await`, que hacen que el código asincrónico sea más fácil de leer y mantener.

### Promises

Las promesas en JavaScript son objetos que representan la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Una promesa puede estar en uno de estos estados:
- Pendiente (pending): Estado inicial, ni cumplida ni rechazada.
- Cumplida (fulfilled): La operación se completó con éxito.
- Rechazada (rejected): La operación falló.

#### Ejemplo de Promesa

```js

// Crear una nueva promesa
let promesa = new Promise((resolver, rechazar) => {
  let exito = true; // Cambia esto a false para probar el rechazo
  if (exito) {
    resolver("¡La operación fue exitosa!");
  } else {
    rechazar("Hubo un error en la operación.");
  }
});

// Manejar la promesa
promesa
  .then((mensaje) => {
    console.log(mensaje); // "¡La operación fue exitosa!"
  })
  .catch((error) => {
    console.error(error); // "Hubo un error en la operación."
  });
```

#### async - await

La sintaxis `async` y `await` proporciona una forma más cómoda de trabajar con promesas, permitiendo escribir código asíncrono que se lee de manera similar al código síncrono.

```javascript


async function ejemploAsyncAwait() {
  try {
    let mensaje = await promesa;
    console.log(mensaje); // "¡La operación fue exitosa!"
  } catch (error) {
    console.error(error); // "Hubo un error en la operación."
  }
}

ejemploAsyncAwait();
```

Este ejemplo muestra cómo crear y manejar una promesa en JavaScript, así como cómo utilizar `async` y `await` para trabajar con promesas de manera más sencilla.

## WORKING WITH APIS

Trabajar con APIs en JavaScript permite a los desarrolladores interactuar con servicios externos para enviar y recibir datos. Hay varias formas de hacerlo, pero dos de las más comunes son `XMLHttpRequest` y `Fetch`.

### XMLHttpRequest

`XMLHttpRequest` es una interfaz que permite a los navegadores web interactuar con servidores para intercambiar datos. Es una de las primeras formas de hacer solicitudes HTTP en JavaScript.

```javascript
// filepath: /path/to/file
// Crear una nueva instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open('GET', 'https://api.example.com/data', true);

// Definir una función de callback para manejar la respuesta
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Respuesta:', xhr.responseText);
  } else {
    console.error('Error:', xhr.statusText);
  }
};

// Enviar la solicitud
xhr.send();
```

### Fetch

`Fetch` es una API moderna que proporciona una forma más sencilla y flexible de hacer solicitudes HTTP. Es una promesa basada en la API que facilita el trabajo con solicitudes y respuestas.

```javascript
// filepath: /path/to/file
// Hacer una solicitud GET usando Fetch
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

Ambos métodos tienen sus ventajas y desventajas, pero `Fetch` es generalmente preferido por su simplicidad y soporte para promesas.

## MODULES IN JAVASCRIPT

Un módulo es un fragmento de código que se puede importar y exportar entre diferentes archivos. Los módulos permiten organizar el código en partes reutilizables y mantenibles.

### CommonJS

CommonJS es un sistema de módulos utilizado principalmente en Node.js. Utiliza `require` para importar módulos y `module.exports` para exportarlos.

```javascript
// Exportar un módulo
module.exports = {
  saludar: function() {
    console.log("Hola, mundo!");
  }
};

// Importar un módulo
const miModulo = require('./path/to/file');
miModulo.saludar(); // Salida: Hola, mundo!
```

### ESM (ECMAScript Modules)

ESM es el sistema de módulos nativo de JavaScript, soportado tanto en navegadores modernos como en Node.js. Utiliza `import` y `export` para manejar los módulos.

```javascript
// Exportar un módulo
export function saludar() {
  console.log("Hola, mundo!");
}

// filepath: /path/to/main.js
// Importar un módulo
import { saludar } from './path/to/module.js';
saludar(); // Salida: Hola, mundo!
```

Ambos sistemas de módulos permiten dividir el código en partes más pequeñas y manejables, pero ESM es el estándar moderno y recomendado para nuevos proyectos.

## DOM APIS

### Document
- `document.getElementById(id)`
- `document.getElementsByClassName(className)`
- `document.getElementsByTagName(tagName)`
- `document.querySelector(selector)`
- `document.querySelectorAll(selector)`
- `document.createElement(tagName)`
- `document.createTextNode(text)`

### Element
- `element.getAttribute(name)`
- `element.setAttribute(name, value)`
- `element.removeAttribute(name)`
- `element.classList.add(className)`
- `element.classList.remove(className)`
- `element.classList.toggle(className)`
- `element.appendChild(child)`
- `element.removeChild(child)`
- `element.replaceChild(newChild, oldChild)`
- `element.insertBefore(newChild, referenceChild)`

### Event
- `element.addEventListener(type, listener)`
- `element.removeEventListener(type, listener)`
- `event.preventDefault()`
- `event.stopPropagation()`

### Node
- `node.parentNode`
- `node.childNodes`
- `node.firstChild`
- `node.lastChild`
- `node.nextSibling`
- `node.previousSibling`
- `node.cloneNode(deep)`

### Window
- `window.alert(message)`
- `window.confirm(message)`
- `window.prompt(message, default)`
- `window.open(url, target)`
- `window.close()`
- `window.setTimeout(function, delay)`
- `window.setInterval(function, interval)`
- `window.clearTimeout(timeoutID)`
- `window.clearInterval(intervalID)`

### Console
- `console.log(message)`
- `console.error(message)`
- `console.warn(message)`
- `console.info(message)`
- `console.debug(message)`
- `console.clear()`

## ITERATORS AND GENERATORS

Un iterador es un objeto que permite recorrer una colección (como un array o un objeto) uno a uno. En JavaScript, un iterador debe implementar un método `next()` que devuelve un objeto con dos propiedades:
- `value`: el siguiente valor en la secuencia.
- `done`: un booleano que indica si la secuencia ha terminado (`true` si ha terminado, `false` en caso contrario).

Ejemplo de un iterador manual:

```javascript
function createIterator(array) {
    let index = 0;
    return {
        next: function() {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
}

const myIterator = createIterator([1, 2, 3]);
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: 3, done: false }
console.log(myIterator.next()); // { done: true }
```

### Generadores (Generators)

Un generador es una función especial que puede pausar su ejecución y luego reanudarla. Se define con la sintaxis `function*` y utiliza la palabra clave `yield` para devolver valores de manera pausable.

Ejemplo de un generador:

```javascript
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

Los generadores son útiles para crear iteradores de manera más sencilla y para manejar operaciones asincrónicas de manera más legible.

Espero que esto te haya aclarado los conceptos de iteradores y generadores en JavaScript.

## PENDIENTES
- Symbol: Tipo de dato primitivo que crea identificadores únicos e inmutables, comúnmente usado como claves de propiedades para evitar conflictos en objetos.
- template literals

## INTRODUCTION TO JAVASCRIPT
### What is JavaScript
### History of JavaScript
### JavaScript Versions

## USING BROWSER DEV TOOLS
### Debugging Issues
### Debugging Memory Leaks
### Debugging Performance

## MEMORY MANAGEMENT
### Memory LifeCycle
### Garbage Collection