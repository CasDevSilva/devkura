---
title: 01. Node package manager
layout: base.njk
---

# Npm (Node package manager)

Administrador de paquetes para Node js. Gestiona toda accion sobre dependencias de tu proyecto.

Las dependencias son fragmentos predefinidos como bibliotecas, librerias, paquetes que tu aplicacion necesita para funcionar de la mejor manera.

`Nota: `Es regla que cuando un proyecto Node se ponga en marcha antes de hacer los cambios, el desarrollador corra el sgte comando:

```bash
npm install
```

Con esto nos aseguramos de instalar toda dependencia que el proyecto disponga para su funcionamiento.

## Instalacion de un paquete

Para instalar un paquete, basta con ejecutar el sgte comando

```bash
npm install <package/>
```

Es de mas decir que el package debe de existir y esta instalacion es individual.

Ademas que se pueden añadir indicadores como:

- `--save` -> (-S)
    - Añade la dependencia del package al package.json.
    - Antes era necesario especificarlo, ahora es un indicador por defecto.
- `--no-save`
    - Instala pero no agrega la dependencia al package.json.
- `--save-dev` -> (-D)
    - Instala y la agrega como dependencia de Desarrollo (devDependencies).
- `--save-optional` -> (-O)
    - Instala y agrega optionDependencies
- `--no-optional`
    - Evitara que se instalen dependencias opcionales

### Instalacion Global

La instalacion se realiza en todo el computador siendo posible su uso en cualquier proyecto Node js sin necesidad de reinstalarlo.

```bash
npm install -g <package/>
```

### Instalacion Local

La instalacion local de un package solo lo incluira como dependencia en tu package.json, de tal manera que en su proximo llamado sera de necesidad su instalacion.

```bash
npm install <package/>
```

### Actualizar Paquetes

Verificar si las dependencias de tu proyecto estan desactualizadas
```bash
npm outdated
```

Actualizar paquetes referentes al proyecto
```bash
npm update
```

Actualizar paquetes globales
```bash
npm update -g
npm update -g <package/>
```

## Diferencias entre DevDependencies y Dependencies

Las diferencia radica en que devDependencies contiene herramientas de desarrollo como una biblioteca de pruebas, mientras que las dependencias se asume que es una aplicacion en produccion y solo radican las necesarias.

## Running Scripts

## npm workspaces
## Creating packages