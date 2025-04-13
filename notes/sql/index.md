---
title: SQL Roadmap
layout: base.njk
---

# SQL Roadmap

Esta es una guia tomando como base el siguiente recurso: Roadmap SQL

## INTRODUCTION
Structured Query Language(Lenguaje de consultas estructurado), lenguaje de programacion enfocado de a la gestion de informacion (extraccion, insercion, manipulacion). Creado para la manipulacion de Datos estructurados(como el Modelo relacional).

## LEARN THE BASICS

### What are Relational Databases

Son un tipo de sistema de gestion de informacion que consta en relacionar datos de diferentes grupos mediante tablas, las tablas estan conformadas por filas(registros) y columnas(atributos de la tabla).

### Database

Conjunto de Datos distribuido en grupos.

### Modelo relacional

Recopilacion de Datos relacionados entre si mediante puntos predefinidos (claves externas).
Cada tabla contiene filas que son los registros y columnas que son atributos que identifican a la tabla. Mediante esta podemos relacionar tablas con datos en comun.

### Benefits and Limitations

#### Benefits

- Data estructurada (mediante el modelo relacional)
- ACID Propiedades (Atomicidad, Consistencia, Aislamiento, Durabilidad)
- Atomicidad (Es todo o nada, si algo falla, se restaura como estaba)
- Consistencia (La informacion debe de ser correcta en todo momento)
- Aislamiento (La manipulacion de informacion en conjunto actua de manera singular)
- Durabilidad (Transaccion terminada y falla el sistema, la transaccion se mantiene intacta)
- Normalizacion (Organizacion de informacion evitando redundancias)
- Escalabilidad
- Integracion de Datos
- Seguridad

#### Limits

- Complexity(Mas grande la aplicacion, mas informacion y dificultad de gestion)
- Cost
- Fixed Schema
- Handling of Structured Data
- Horizontal Scalability

### SQL vs NoSQL

La diferencia radica en que SQL esta enfocado a modelos relacionales, aquellas que funcionan mediante tablas con puntos de relacion predefinidos. Mientras que noSQL(not Only SQL) esta enfocado a trabajar con documentos JSON, que refiere informacion en texto plano.

## BASIC SQL SINTAX

- SQL Keywords [Link de referencia de Cheatsheet](Holis)

### Data Types

- NUMBERS (BIT, INT, TINYINT, BIGINT, FLOAT, REAL, DECIMAL)
- DATE && TIME (DATE, TIME, DATETIME)
- TEXTS (CHAR (NCHAR), VARCHAR (NVARCHAR), TEXT (NTEXT))
- FILES (BINARY, VARBINARY, CLOB, BLOB, XML, CURSOR, TABLE)

### Operators

- Aritmeticos
  - (SUMA) +
  - (RESTA) -
  - (MULTIPLICACION) *
  - (DIVISION) /
  - (MODULO) %
- Relacionales
  - (Mayor que, Mayor igual que) >, >=
  - (Menor que, Menor igual que) <, <=
  - (No igual que) <>
  - (Diferente de) !=
  - (Igual que) =
- Asignacion
  - += (Sumas e igualas)
  - -= (Restas e igualas)
  - *= (Multiplicas e igualas)
  - /= (Divides e igualas)
- Logicos
  - AND (Y)
  - OR (O)
  - IN (En)
  - NOT (No)
  - BETWEEN (ENTRE)
  - EXISTS (EXISTE)
  - LIKE (COMO)
  - MATCHES (COMO)
  - SOME
  - ALL
  - ANY

### DCL (DATA CREATE LANGUAGE)

#### DROP
```sql
DROP TABLE tabla_demo;
DROP TABLE IF NOT EXISTS tabla_demo;
```

#### CREATE
```sql
CREATE TABLE tabla_demo(
  code_id SERIAL,
  name_user VARCHAR(50),
  is_married BIT,
  PRIMARY KEY(code_id),
  FOREIGN KEY(id) REFERENCES table2(id2)
);

CREATE TABLE IF NOT EXISTS tabla_name(
  code_id SERIAL;
  name_user VARCHAR(60)
);

CREATE TABLE tabla_name AS (
  SELECT * FROM TABLE
);
```

#### ALTER
```sql
ALTER TABLE tabla_name
  ADD FOREIGN KEY (column1) REFERENCES table2(column2);

ALTER TABLE tabla_name
  ADD column TYPE;

ALTER TABLE tabla_name
  ADD (
    column1 Types,
    column2 Types
  );

ALTER TABLE tabla_name
  MODIFY/ ALTER column column TYPE
  -- (si quieres muchas sentencias separadas con coma)

ALTER TABLE tabla_name
  DROP column;

ALTER TABLE tabla_name
  RENAME/ CHANGE COLUN old TO new;

ALTER TABLE tabla_name
  RENAME TO newnametable;
```

#### TRUNCATE (borra la data más no el esquema)
```sql
TRUNCATE TABLE tablename;
```

#### OTROS

DESC tabla_demo
 - Describe el formato de la tabla

## DML(DATA MANIPULATION LANGUAGE)
### INSERT
```sql
-- Refieres todas las columnas de la tabla
INSERT INTO tabla_name
VALUES (val1, val2, val3, …);
 -- Refieres las requeridas o de las que quieres insertar Data.

INSERT INTO tabla_name (column1, column4, column7)
VALUES
  (val1, val2, val3),
  (val1, val2, val3),
  (val1, val2, val3);
```

### UPDATE
```sql
UPDATE TABLE tabla_name
  SET
    column1 = val1,
    column2 = val2
WHERE condition;
```

### DELETE
```sql
DELETE FROM tabla_name WHERE condition;
```

## DQL(DATA QUERY LANGUAGE)

Sentencias obligatorias de una consulta:

- SELECT
- FROM

Sentencias Adicionales:
- JOINS
- WHERE
- GROUP BY
- HAVING
- ORDER BY
- SUBQUERIES

```sql
-- Seleccionas todos los registros de tabla
SELECT * FROM tabla_name;

/*
Al ser un modelo relacional puedes unir tablas
con otras, para ello sirve el JOIN
va acompañado de un ON que refiere la columna
en comun.
*/
SELECT
  tabla_name1.*
FROM tabla_name1
JOIN tabla_name2
  ON tabla_name1.column3 = tabla_name2.column3

/*
Filtras registros con el WHERE
Ademas estableces solo las columnas que
quieres visualizar
*/
SELECT
  column1,
  column2,
  column3,
  column4
FROM tabla_name
WHERE
      column1 = 12
  AND column2 IN ('bebidas', 'higiene');

/*
Agrupas columnas, en este caso se da porque
las columnas 3 y 4 realizan operaciones
que alteran el resultado.
Ante ello es necesario agrupar para ver que
registros se relacionan con esos resultados
Y mediante ORDER establecemos la columna de
ordenamiento
*/
SELECT
  column1,
  column2,
  SUM(column3),
  COUNT(column4)
FROM tabla_name
GROUP BY column1, column2
ORDER BY 3

/*
Realizamos una agrupacion de columnas
ya que haremos una suma.
Ademas de ello queremos conocer solo aquellos
que sean mayores a 43.
Es necesario el uso de Having pues en un
WHERE no permite operaciones como SUM, o el
alias con el que puedas instanciarlo.
Al usar HAVING es necesario usar el GROUP BY
*/
SELECT
  column1,
  column2,
  SUM(column3)
FROM tabla_name
GROUP BY column1, column2
HAVING SUM(column3) > 43

/*
Hacemos la consulta a una subconsulta
que da la consulta a otra tabla.
Mediante esta subconsulta filtramos aquellos
registros que son unicos
*/
SELECT UNIQUE
  column1,
  column3
FROM (
  SELECT *
  FROM tabla_name
  WHERE
    column1 > 164
);
```

## AGGREGATE QUERIES

Son las siguientes:
- SUM (SUMA)
- COUNT (COUNTER)
- AVG (PROMEDIO)
- MIN (MINIMO)
- MAX (MAXIMO)
- GROUP BY (AGRUPALOS POR)
- HAVING (Condicion de Sentencias de Agrupado, es necesario una agrupacion)

## DATA CONSTRAINTS

CONSTRAINTS de alter table y que tambien pueden ser instanciados en la creacion de la tabla:
- PRIMARY KEY
- FOREIGN KEY
- CHECK
- UNIQUE

CONSTRAINT que puede interferir en filtros SQL, y que puede ser intanciada en la creacion de la tabla:
- NOT NULL

```sql
-- Añadimos CONSTRAINTS sin nombre
ALTER TABLE tabla_name
  ADD PRIMARY KEY (id);

ALTER TABLE tabla_name
  ADD FOREIGN KEY(column) REFERENCES table2(column2);

-- Añadimos CONSTRAINTS con nombre
ALTER TABLE tabla_name
  ADD CONSTRAINT PK_ID_FACTURA PRIMARY KEY(id);

ALTER TABLE tabla_name
  ADD CONSTRAINT FK_ID_DETALLE
  FOREIGN KEY(ref_id) references tabla2(id);

/*
Sgtes CONSTRAINTS
UNIQUE -> Puedes establecer mas de una columna
*/
ALTER TABLE tabla_name
  ADD CONSTRAINT UC_DNI UNIQUE (column1, column2);

ALTER TABLE tabla_name
  ADD CONSTRAINT CK_BIGGER CHECK (age >=18);

-- PROCESO DE ELIMINACION
ALTER TABLE tabla_name DROP PRIMARY KEY;
ALTER TABLE tabla_name DROP CONSTRAINT FK_ID_DETALLE
ALTER TABLE tabla_name DROP INDEX UC_DNI;
ALTER TABLE tabla_name DROP CONSTRAINT CK_BIGGER;
```

## JOIN QUERIES

Se denomina la union de 2 tablas con llaves relacionadas o valores en comun. Existen diferentes tipos:

- INNER
  - Interseccion de ambas tablas
  - Refiere a que devuelve los registros que tienen similitud de datos a nivel de relacion
  - Es el tipo de JOIN por defecto si no se establece un tipo DEFAULT
- FULL OUTER/ FULL
  - Refiere todos los registros haya o no haya similitudes en la columna de relacion
- LEFT
  - Refiere los registros de la primera tabla y la interseccion de registros en comun
- RIGHT
  - Refiere los registros de la tabla de Union y la interseccion de registros en comun
- SELF JOIN
  - Se refiere a la Union contra la misma tabla, enfocado a tablas que pueden contener tipos de datos referentes a la tabla actual.
- CROSS JOIN
  - Refiere la union de Datos de manera corregular, eso quiere decir que no es de necesidad una columna para unirlas, simplemente cada registro es combinada con cada registro de la tabla de union.
  - La sintaxis solo refiere un CROSS JOIN.

## SUBQUERIES

- Refiere una consulta dentro de otra consulta
- Esta puede estar definida como una columna, como condicional, como tabla de consulta
- Se le conoce como consulta anidada o consulta interna
- Una subconsulta puede estar presente en operaciones de INSERT/ UPDATE/ DELETE

### Reglas

- Una subsconsulta debe de estar entre parentesis
- Debe de tener las consultas DQL obligatorias (SELECT/ FROM)

### Clasificacion de Subconsultas:

- NESTED SUBQUERIES
    - Subconsultas anidadas refiere a una consulta que esta dentro de una subconsulta
    - Su resultado solo afecta a la subconsulta y no se ve reflejada en la consulta principal.
- CORRELATED SUBQUERIES
    - Refiere a subconsultas que dependen de la informacion de la consulta principal, simula una self join en una subconsulta restringiendo asi registros y filtrando la informacion.

### Tipos de Subconsultas:

- Scalar: Devuelve un unico valor
- Column: Forma parte de la consulta, mediante fitros devuelve una columna
- Row: Refiere un o una serie de registros que puede devolver la subconsulta y puede servir como filtro.
- Table: Refiere cuando la subconsulta se usa como tabla de consulta.

## ADVANCED FUNCTIONS

### STRING

- CONCAT: Une valores
- LENGTH: Da tamaño de cadena
- SUBSTRING: Extrae texto
- REPLACE: Reemplaza texto con otro
- UPPER: Texto en mayusculas
- LOWER: Texto en minusculas

### NUMBER

- FLOOR: Devuelve el valor entero menor al decimal dado
- ABS: Devuelve el valor absoluto de un nro
- MOD: Modulo, devuelve el residuo de una division
- ROUND: Redondea el valor, o establece el nro de decimales
- CEILING: Devuelve el valor entero mayor al decimal dado.

```sql
SELECT
  CONCAT('Hola', ' ', 'Mundo'),
  LENGTH('Hola Mundo'),
  SUBSTRING('Hola Mundo', 1, 4),
  REPLACE('Hola Mundo', 'Mundo', 'SQL'),
  UPPER('Hola Mundo'),
  LOWER('Hola Mundo'),
  FLOOR(12.7),
  ABS(-25),
  MOD(10, 3),
  ROUND(12.567, 2),
  CEILING(12.3)
FROM tabla_name
```

### CONDITIONAL

- CASE: Evalua diferentes condicionales a nivel de columna y devuelve un valor
- NULLIF: Devuelve null si los valores son iguales, caso contrario devuelve el primer valor
- NVL: Evalua un valor, si es nulo usa el sgte valor como resultado
- COALESCE: Retorna el primer valor no NULL de un grupo de valores, si todos fuesen null devuelve NULL

```sql
SELECT
  CASE WHEN TRUE THEN 1
       ELSE 2
  END result1,
  CASE WHEN column1 > 12 THEN 25
       WHEN column1 < 5 THEN 7
       ELSE 100
  END result2,
  NULLIF(column3, column5),
  NVL(column3, 25),
  COALESCE(column3, column5, column6)
FROM tabla_name
```
### DATE & TIME

- DATE
- YEAR
- MONTH
- DAY
- DATE
- CURRENT_DATE
- TIME
- HOUR
- MINUTE
- SECONDS
- CURRENT_TIME
- TIMESTAMP: Refiere a combinacion de fecha y hora en formato completo
- CURRENT_TIMESTAMP
- DATEPART: Permite extraer parte de una fecha
- DATEPART(YEAR, DATE)
- DATEADD: Permite operar con una fecha requiriendo 3 parametros
- DATEADD(INTERVAL, NUMBER, DATE)
- DATEADD(DAY, 5, DATE);

## VIEWS

Refiere al resultado de una consulta SQL que puede ser utilizada como una tabla virtual ya que estas son guardadas. Estas tienen un nombre como una tabla cualquiera que puede estar compuesta por una querie simple o compleja.

```sql
-- CREATE
CREATE VIEW vt_tabla_facturas_month AS
SELECT * FROM tabla_facturas WHERE MONTH(DATE) > 6;

-- MODIFY
ALTER VIEW vt_tabla_facturas_month AS
SELECT * FROM tabla_facturas WHERE MONTH(DATE) > 10;

-- DROP
DROP VIEW vt_tabla_facturas_month;
```

## INDEXES

Los indices son objetos de las bases de datos que mejoran la rapidez de extraccion de datos. Su comportamiento se basa en crear estructuras de datos que permiten al motor de base de datos localizar informacion sin necesidad de escanear toda la tabla.

Estructura dentro del SQL que nos permite localizar rapidamente filas dentro de una tabla.

Un indice, puede estar compuesto de mas de una columna, se le denomina indice compuesto

```sql
-- CREACION
CREATE UNIQUE INDEX IDX_DNI
ON tabla_personas(dni_user);

CREATE INDEX IDX_SALARY
ON tabla_personas(salario, last_name);

-- ELIMINACION
DROP INDEX IDX_DNI;
DROP INDEX IDX_SALARY;
```
## TRANSACTIONS

Grupo de Operaciones de Lectura y Escritura de Bases de Datos que se han completado con exito.

Refiere la propagacion de uno o mas cambios a nivel de BBDD.

Estas operaciones deben de contar con las propiedades ACID:
- Atomicidad: todas las operaciones se completan dentro de la unidad de trabajo
- Consistencia: garantiza que la BBDD cambie de estado luego de alguna transaccion
- Aislamiento: permite que cada transaccion opere con singularidad
- Durabilidad: garantiza que la transaccion persista en caso de error por parte del sistema

### Comandos a nivel Transaccional

- BEGIN/ END
  - Sentencias que inician y terminan una serie/bloque de instrucciones SQL
- COMMIT
  - Confirmas cambios de transacciones despues de una serie de operaciones
- ROLLBACK
  - Utilizado para deshacer operaciones, solo puede deshacer desde el ultimo COMMIT o ROLLBACK
- SAVEPOINT
  - Punto de Acceso de Guardado, punto que puede ser referido a nivel de Rollback
- RELEASE
  - Libera el punto de guardado, no podra volver a ser utilizado para operaciones.
- SET TRANSACTION
  - Estableces el tipo de Transacciones que tienes pensado hacer, lectura y escritura o solo Lectura

```sql
BEGIN
  SAVEPOINT save_name;

  DELETE tbl_cliente where 1 = 1;
  COMMIT;

  DELETE tbl_cliente where 1 = 1;
  ROLLBACK;

  SELECT * FROM tbl_cliente;
  ROLLBACK TO save_name;
  RELEASE SAVEPOINT save_name;
END;
SET TRANSACTION [READ WRITE || READ ONLY]
```

### Niveles de Aislamiento

Forma en la que las BBDD resuelven probleas de lectura de Datos en transacciones concurrentes, eso refiere cuando tenemos procesos parejos o masivos, la BBDD debe de ser capaz de informar los cambios sobre los registros.

Existen 4 niveles de aislamiento, ANSI SQL:
- READ UNCOMMITED: El mas debil, bloqueo de nivel 0. Enfocado a datos que no deberian de modificarse.
- READ COMMITED:
- REPEATABLE READ:
- SERIALIZABLE:

## DATA INTEGRITY & SECURITY
### Data Integrity Constraints
### GRANT and Revoke
### DB Security Best Practices

## STORED PROCEDURES & FUNCTIONS

Objetos de la Base de Datos precompilados que encapsulan una serie de sentencias SQL. Los procedimientos estan enfocados a realizar operaciones complejas (utilizadas para manipulacion de datos), mientras que las funciones estan diseñadas para calcular y devolver valores.

Principales Diferencias
- STORED PROCEDURES
    - Pueden operar con parametros de entrada y salida
    - Solo puede ser invocado por Triggers
    - A nivel de errores, manejan el try - catch
- FUNCTIONS
    - Recibe parametros de entrada
    - Pueden ser llamados desde Stored Procedures, Triggers, Queries
    - Su objetivo principal es devolver un valor

```sql
/**
* PROCEDURES
*/

-- MYSQL
CREATE PROCEDURE proc_sayHi(IN nombre VARCHAR(50))
BEGIN
    SELECT CONCAT('Hola, ', nombre, '!') AS Saludo;
END;

-- SQL SERVER
CREATE PROCEDURE proc_sayHi
  @nombre VARCHAR(25)
AS
BEGIN
  PRINT 'Hola '+ @nombre;
END;

-- POSTGREE SQL
CREATE PROCEDURE proc_sayHi(nombre VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE NOTICE 'Hola, %!', nombre;
END;
$$;

/**
* FUNCTIONS
*/

-- MYSQL
CREATE FUNCTION ObtenerSaludo(nombre VARCHAR(50))
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN
    RETURN CONCAT('Hola, ', nombre, '!');
END;

-- SQL SERVER
CREATE FUNCTION fn_sayHi(@nombre NVARCHAR(50))
RETURNS NVARCHAR(100)
AS
BEGIN
    RETURN CONCAT('Hola, ', @nombre, '!');
END;

-- POSTGREE SQL
CREATE FUNCTION ObtenerSaludo(nombre VARCHAR)
RETURNS VARCHAR
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN 'Hola, ' || nombre || '!';
END;
$$;
```

## PERFORMANCE OPTIMIZATION

Conjunto de Practicas destinadas a mejorar la eficiencia y velocidad de consultas. 

### QUERY OPTIMIZATION

- Solo mostrar columnas de necesidad
- Reducir el uso de comodines como LIKE o MATCHES
- Uso de Indices
- Utilizar limitacion de registros
- Utilizar EXIST en lugar de COUNT
- Evitar las subconsultas en Exceso

### QUERY ANALYSIS TECHNIQUES

### QUERY OPTIMIZATION TECHNIQUES
- Using Indexes
  - Objetos de Bases de datos que mejoran operaciones de recuperacion de datos en las tablas. Haz el uso moderado pues en operaciones (INSERT, UPDATE, DELETE) suele ralentizar operaciones
- Optimizing Joins
  - Establece el tipo de Join correspondiente, evitando asi busqueda de relaciones inexistentes.
- Reducing Subqueries
  - Toda subconsulta consume tiempo, por ello aquellas que referencies deben de ser objetivas. En muchos casos tratar de reemplazar con funciones SQL que permitan hacer lo mismo
- Selective Projection
  - Elegir solo columnas que requieras y que no afecten tu resultado inicial.

## ADVANCED SQL

### WINDOW FUNCTIONS

Aquellas funciones que permiten realizar calculos en un conjunto de filas relacionadas a la fila actual

- Window Functions Basics:
  - AVG
  - MAX
  - MIN
  - COUNT
  - SUM
- Window Functions Advance
  - ROW_NUMBER
    - Muestra el nro de una fila determinada comenzando con uno (simula un serial).
  - LAG
    - Nos permite comparar el registro actual con el anterior, se debe de especificar columna y el nro de registros para atras.
  - LEAD
    - Nos permite comparar el registro actual con el sgte registro, se debe de especificar columna y el nro de registros para adelante.
  - NTILE
    - Creacion de Grupos genericos en secuencia por agrupaciones de fila.
  - RANK
    - Similar a ROW_NUMBER, con la diferencia de numerado a nivel de agrupacion mas no por fila ignorando asi las agrupaciones no llevando secuencia, se basa en datos
  - DENSE_RANK
    - Lo mismo que RANK, con la diferencia de que esta si lleva secuencia asi agrupe registros
- Clausulas de apoyo
  - OVER()
    - Constructor de windows functions(indicas su uso), que permite calcular valores basados en filas relacionadas sin reducir el nro de lineas como resultado.
  - OVER(PARTITION BY column)
    - Nos permite agrupar el resultado de la funcion en linea, evitando el uso de GROUP BY.
  - OVER(ORDER BY column)
    - Nos permite ordenar las columnas antes de aplicar la window function

EXTRA: Tambien puedes combinar ambos como una sentencia SQL OVER(PARTITION BY column ORDER BY column)

### RECURSIVE QUERIES

Tipo especial de Consulta Comun (CTE), aquellas consultas que se utilizan para realizar calculos iterativos, procesar estructuras de datos relacionadas, entre otros.

La consulta consta de 2 partes:
Consulta base: punto de inicio de la recursion
Consulta recursiva: Se refiere a si misma(consulta) y repite hasta que cumple la condicion de fin.

```sql
WITH RECURSIVE employee_hierarchy AS (
    -- Consulta base: Seleccionar al jefe
    SELECT
        emp_id,
        emp_name,
        manager_id,
        1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL
    SELECT

    -- Consulta recursiva:
    -- Encontrar empleados que reportan a los empleados ya encontrados
        e.emp_id,
        e.emp_name,
        e.manager_id,
        eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh
    ON e.manager_id = eh.emp_id
)
SELECT *
FROM employee_hierarchy;
```

### PIVOT/ UNPIVOT OPERATIONS

Utiles para transformar/ reorganizar datos en una tabla. 
- PIVOT: Convierte las filas en columnas, util cuando tienes informacion categorizadas por columnas.
- UNPIVOT: Hace lo opuesto al Pivot, convierte columnas en filas.

```sql
-- PIVOT
SELECT *
FROM (
    SELECT Product, Month, Sales
    FROM SalesTable
) AS SourceTable
PIVOT (
    SUM(Sales)
    FOR Month IN ([Jan], [Feb], [Mar])
) AS PivotTable;

-- UNPIVOT
SELECT Product, Month, Sales
FROM PivotedTable
UNPIVOT (
    Sales FOR Month IN ([Jan], [Feb], [Mar])
) AS UnpivotTable;
COMMON TABLES EXPRESSIONS
Caracteristica SQL que permite definir una tabla temporal o un conjunto de resultado que puedes referenciarlo en la misma consulta.
-- CTE sencillo
WITH product_sales AS (
    SELECT
        product,
        SUM(amount) AS total_sales
    FROM sales
    GROUP BY product
)
SELECT *
FROM product_sales;

-- CTE compuesto
WITH
    sales_by_product AS (
        SELECT
            product,
            SUM(amount) AS total_sales
        FROM sales
        GROUP BY product
    ),
    filtered_sales AS (
        SELECT *
        FROM sales_by_product
        WHERE total_sales > 300
    )

SELECT *
FROM filtered_sales;
```

### CTE vs Subconsultas

Las CTE son legibles y reutilizables, las subconsultas solo sirven dentro de la consulta principal. Ademas que conlleva lectura de manera regular lo que afecta al rendimiento.

### DYNAMIC SQL

Caracteristica SQL que nos permite ejecutar sentencias SQL cambiantes en funcion de condiciones y tablas dinamicas, consultas complejas.

```sql
DECLARE @department NVARCHAR(50) = 'HR';
DECLARE @sql NVARCHAR(MAX);

-- Construir la consulta dinámica
SET @sql = 'SELECT emp_id, emp_name, salary FROM employees WHERE department = @dept';

-- Ejecutar la consulta con parámetros
EXEC sp_executesql @sql, N'@dept NVARCHAR(50)', @dept = @department;
```

## TEMAS FALTANTES
- INTERVAL
- SERIAL VS IDENTITY
- Llaves Primarias Compuestas
- UUIDS
- Secuencias
- Vistas materializadas
- CTE
- CTE Multiples
- CTE Recursivo
- Encriptar Datos
- Procedimiento almacenado de Usuarios
- Diagramas de BBDD: Diagramas