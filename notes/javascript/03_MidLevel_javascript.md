---
title: 03. JavaScript Mid Level
layout: base.njk
---

# Asincronia y Event Loop

## Promises
Forma de manejar operaciones asincronicas, valor que puede estar disponible ahora, a futuro o nunca.

### Creacion de una Promise

```js
const mPromise = new Promise((resolve, reject) => {
    if (false) {
        resolve("Success!")
    } else {
        reject("Error!")
    }
});
```

### Consumo de una Promise

```js
mPromise
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
```

### Promise All

Iteracion Promises (conjunto)

```js
let prom1 = Promise.reject("Testing")
let prom2 = "Hola";
let prom3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Una Promesa");
})

Promise.all([prom1, prom2, prom3])
    .then(responses => {
        console.log(responses);
    })
    .catch(error => {
        console.log(error);
    })
```

### Promise Race

Iteracion Promises (conjunto) -> devuelve la primera que arroje resultado

```js
let prom4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Response tardia")
})
let prom5 = Promise.resolve("Inmediate response");

Promise.race([prom4, prom5])
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
```

### Formas de Aplicar

- Llamadas a APIS
- Operacion de Lectura y Escritura sobre archivos
- Operacion de BBDD
- Animaciones web
- Timers

### Puntos Objetivos

- Cada then devuelve una Promise

### Working with APIS

- XMLHttpRequest() - OBSOLETO

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://bobsburgers-api.herokuapp.com/characters/?limit=3", true);
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
}
xhr.send()
```

- fetch()

```js
fetch('https://bobsburgers-api.herokuapp.com/characters/?limit=3')
.then(response => {
    return response.json()
})
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
})
```

## Async - Await

- async: Palabra para declarar funcion asincronica, toda funcion devuelve una Promise.
- await: Palabra clave que se usa para esperar retorno de una Promise. Pausa la ejecucion hasta que se resuelva o rechace la peticion.

```js
// FETCH NORMAL
fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=3")
.then(response => response.json())
.then(response => {
    console.log(response)
})
.catch(err => console.log(err));


// Async y await
async function getData(pStrUrl){
    try {
        let response = await fetch(pStrUrl);

        if (!response.ok) {
            throw new Error("Invalid connection");
        }

        let data = await response.json();
        return data;
    } catch(err) {
        throw new Error(err);
    }
}

let response = await getData("https://bobsburgers-api.herokuapp.com/characters/?limit=3");
console.log(response);
```

## Object Manipulation

- Methods Object

```js
let mObjPerson = {
    name: "Carlos",
    age: 22,
    single: true
}

console.log(Object.keys(mObjPerson))//arreglo de llaves
console.log(Object.values(mObjPerson))//arreglo de valores
console.log(Object.entries(mObjPerson))//arreglo de arreglos de llave y valor

console.log(mObjPerson.hasOwnProperty('age'))// tiene dicha propiedad - boolean response
```

- defineProperty
```js
// definicion de propiedad y propiedades de configuracion - De uno a uno
Object.defineProperty(mObjPerson, 'profession', {
    value: 'Programmer',
    writable: false,
    enumerable: true,
    configurable: false
});


// definicion de propiedad y propiedades de configuracion - De uno a muchos
Object.defineProperties(mObjPerson, {
    experience: {
        value: 3,
        writable: false,
        enumerable: true,
        configurable: true
    },
    habilities: {
        value: ['js', 'java', 'c#'],
        writable: false,
        enumerable: true,
        configurable: true
    }
})
```






