---
title: 02. Data Structures JavaScript
layout: base.njk
---

# Data Structures

## Basic Data Structures

**Definicion:** Formatos especiales para organizar, construir, configurar y almacenar data.

Clasificacion:

- Array
- Linked Lists
- Stacks
- Queues
- Hash Tables

## Array

- Estructura que almacena una coleccion de elementos. Para ser eficientes, es mejor del mismo tipo pero JavaScript permite variedad de datos.
- El acceso a sus elementos es mediante indices, los indices inician desde el 0 hasta dar con el ultimo valor.

### Properties

- **Reflect.ownKeys(mArrData):** Obtener las propiedades y valores del Arreglo
- **length:** tamaño del array

### Methods Base

```js
mArrData.push("Holis")
mArrData.concat("Holis")
mArrData.unshift("Test")
mArrData.shift()
mArrData.pop()
```

- **push :** Agrega valor al arreglo
- **concat :** Agrega valor al arreglo
- **unshift :** Agrega valor, como primer elemento
- **shift :** Elimina el primer valor del arreglo
- **pop :** Elimina el ultimo valor del arreglo


### Methods Index and Order
```js
mArrData.indexOf("Klover")
mArrData.lastIndexOf("Klover")
mArrData.findIndex(row => row.startsWith("Dan"))
mArrData.sort()
mArrData.reverse()
mArrData.toSorted()
mArrData.toReversed()
```

- **indexOf:** Indice de tal elemento (busqueda de 1er a ultimo elemento)
- **lastIndexOf:** Indice de tal elemento(busqueda del ultimo al 1er elemento)
- **findIndex:** Retorna indice del primer valor que cumpla con la condicion
- **sort:** Ordenamiento de menor a mayor
- **reverse:** Revierte el orden del arreglo reverso
- **toSorted:** Ordena el arreglo sin mutar
- **toReversed:** Revierte el arreglo sin mutar

### Methods Iterate and return

```js
mArrData.map(row => row.length > 5)
mArrData.filter(row => row.length > 5)
mArrData.forEach(row => {console.log(row)});
```

- **map:** Itera y retorna nuevo arreglo condicionando y/o modificando valores
- **filter:** Filtra y retorna arreglo de aquellos valores que cumplan la condicion.
- **forEach:** Itera el arreglo, puede tener una logica dentro para cada elemento

### Methods by Index or return value

```js
mArrData.find(row => row.length > 5)
mArrData.at(-1)
mArrData.join(', ')
mArrData.reduce((acum, val) => acum + val, "")
```

- **find:** Retorna el valor del elemento que cumple la condicion
- **at:** Busca el valor por indice, acepta negativos
- **join:** Retorna los elementos de arreglo concatenados con el valor especificado
- **reduce:** Enfocado a reducir el arreglo a un valor acumulado

### Methods copy, create and more

```js
"Carlos, Danna, Sofia".split(', ')
Array.from(mArrData)
Array.of(mArrData)
mArrData.slice(1, 4)
mArrData.splice(1, 4, "Carla")
mArrData.toSpliced(1, 1, 'Carla')
mArrData.fill("Carmen", 1, 2)
[1, 2, [5, 6, 14], 26].flat()
mArrData.copyWithin(0, 1, 2)
mArrData.with(0, "Ariana")
```

- **split:** Enfocado a String, mediante el caracter especificado divide la cadena y crea un arreglo
- **Array.from:** Retorna copia de un Arreglo
- **Array.of:** Retorna copia de un Arreglo
- **slice:** Extraccion de cierto nro de items partiendo de un indice
- **splice:** Navaja Suiza, indice de inicio, (indice final, indice hasta eliminar), ...n nro. de Items por reemplazar los elementos eliminados
- **toSpliced:** Lo mismo que splice solo que no mutable
- **fill:** Rellenar un grupo de indices con un valor en especifico
- **flat:** Enfocado a arreglos de arreglos, se encarga de extraer todos y convertir en un arreglo plano
- **copyWithin:** Creas una copia de cierto nro de indices anteponiendo al indice especificado
- **with:** Modificas el valor de uno de los indices

### Methods truty boolean

```js
Array.isArray(mArrData)
mArrData.includes("Susan")
mArrData.every(row => row.length > 6)
mArrData.some(row => row.length > 6)
```

- **Array.isArray:** Verifica si un valor es un arreglo
- **includes:** Verifica si el arreglo incluye el valor especificado
- **every:** Verifica si todos sus elementos cumplen con una condicion
- **some:** Verifica si al menos uno de los elementos cumple con la condicion
