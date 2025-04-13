---
title: SQL Lite Roadmap
layout: base.njk
---

# SQL Lite

| Command | Definition |
|----------|----------|
|.databases | Show list of databases |
|.excel| Show the next command in format xlsx |
|.schema| Show the Schema created of a table|
|.read| Read file and execute all in this|
|||
|||
|||
|.quit| Exit of the command Line |

## Actions

- Create a database (in path of you can save the database). Type this.

```bash
sqlite3 name_database.db
```

- Habilitar impresion en caso de Errores

```bash
.echo on
```

- Activar formato tabular

```bash
.mode column
```

- Activar encabezado de columna

```bash
.headers on
```