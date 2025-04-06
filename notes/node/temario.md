---
title: Temario de Node
layout: base.njk
---

# **📌 Temario Completo de Node.js - Backend**

## **1️⃣ Fundamentos de Node.js**

- ¿Qué es Node.js y cómo funciona?
- Ventajas y desventajas de usar Node.js en el backend.
- Instalación de Node.js y configuración del entorno de desarrollo.
- Uso de la CLI de Node.js.
- Primer script con Node.js (`console.log()`, `process`, `global`).
- Ciclo de vida de una aplicación Node.js.
- Event Loop y arquitectura basada en eventos.
- Módulos nativos y `require()` / `import` en ESModules.

---

## **2️⃣ Módulos y Gestión de Dependencias**

- Sistema de módulos en Node.js (CommonJS vs ESModules).
- Creación de módulos personalizados.
- Uso de `npm` y `npx` (instalación, actualización y eliminación de paquetes).
- Gestión de paquetes en `package.json` y `package-lock.json`.
- Uso de `yarn` como alternativa a `npm`.
- Scripts personalizados en `package.json`.
- Introducción a los `core modules` de Node.js.

---

## **3️⃣ File System (fs) y Procesos en Node.js**

- Lectura y escritura de archivos con `fs`.
- Manejo de archivos de forma síncrona y asíncrona.
- Streams y buffers.
- Creación y eliminación de directorios.
- Uso de `path`, `os` y `util` para manipulación de rutas y procesos.
- Manejo de procesos con `child_process`.

---

## **4️⃣ HTTP y Servidores en Node.js (sin frameworks)**

- Creación de un servidor HTTP con `http`.
- Métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- Manejo de rutas y respuestas en servidores básicos.
- Middleware en Node.js sin frameworks.
- Manejo de Query Params y Body en peticiones.
- Introducción a `https` y certificados SSL.

---

### **✅ PRODUCTOS PARA DESARROLLAR HASTA ESTE PUNTO**

1. CLI para manipulación de archivos (copiar, mover, renombrar).
2. Generador de archivos JSON desde inputs de consola.
3. Servidor HTTP básico que devuelva mensajes según la ruta.
4. API REST sin frameworks que maneje usuarios en memoria.

---

## **5️⃣ Express.js: Framework Esencial para Backend con Node.js**

- Instalación y estructura de un proyecto con Express.
- Definición de rutas y controladores.
- Middleware en Express (propios y de terceros).
- Manejo de Query Params, Body y Headers.
- Uso de `express.Router` para modularizar rutas.

---

## **6️⃣ Bases de Datos con Node.js (MongoDB y PostgreSQL)**

- Introducción a bases de datos en el backend.
- Uso de **MongoDB** con Node.js (`mongoose`).
- Uso de **PostgreSQL** con Node.js (`pg`).
- Modelado de datos y estructuras en ambas bases de datos.
- CRUD con MongoDB y PostgreSQL en Node.js.
- Introducción a ORM y ODM en Node.js.

---

## **7️⃣ Autenticación y Seguridad**

- Principios de seguridad en backend.
- Hashing y encriptación con `bcrypt`.
- Manejo de sesiones y autenticación con `JWT`.
- Middleware de autenticación y autorización.
- Protección contra ataques XSS y CSRF en Node.js.
- Validación de datos con `Joi` y `express-validator`.

---

## **8️⃣ WebSockets y Tiempo Real**

- Introducción a WebSockets y `socket.io`.
- Implementación de chat en tiempo real.
- Comunicación en tiempo real con eventos personalizados.
- Broadcasting y rooms en WebSockets.
- Integración de WebSockets con bases de datos.

---

### **✅ PRODUCTOS PARA DESARROLLAR HASTA ESTE PUNTO**

1. API REST completa con Express y MongoDB/PostgreSQL.
2. Sistema de autenticación con JWT y roles de usuario.
3. Chat en tiempo real con `socket.io`.
4. Dashboard en tiempo real con WebSockets.

---

## **9️⃣ Microservicios y Arquitectura Escalable**

- ¿Qué es un microservicio y cuándo usarlo?
- Creación de microservicios con Node.js.
- Comunicación entre microservicios con `gRPC`.
- Uso de **RabbitMQ y Kafka** para mensajería.
- Implementación de **Docker** para microservicios en Node.js.

---

## **🔟 Cacheo y Optimización en Backend**

- Introducción a la optimización en Node.js.
- Uso de `Redis` como sistema de cacheo.
- Técnicas de optimización en APIs.
- Manejo de sesiones con Redis.
- Caching de peticiones para mejorar rendimiento.

---

## **1️⃣1️⃣ Testing en Node.js**

- Pruebas unitarias con `Jest` y `Mocha`.
- Mocking de datos para testing.
- Pruebas de integración con `Supertest`.
- Cobertura de código en Node.js.
- Estrategias para testear APIs REST.

---

## **1️⃣2️⃣ DevOps y Despliegue**

- Despliegue de aplicaciones Node.js en servidores.
- Uso de `PM2` para manejo de procesos en producción.
- Configuración y uso de **NGINX** como proxy reverso.
- Introducción a **CI/CD con GitHub Actions**.
- Despliegue en plataformas como **Vercel, Railway, AWS, y Digital Ocean**.

---

### **✅ PRODUCTOS PARA DESARROLLAR HASTA ESTE PUNTO**

1. Sistema de microservicios con `gRPC`.
2. API optimizada con Redis y caching de datos.
3. Suite de pruebas automatizadas para una API.
4. Aplicación escalable desplegada en producción.

---

## **🔹 Librerías y Herramientas Claves en Node.js**

📌 **Core Modules**:

- `fs` (File System)
- `http/https`
- `path`
- `os`
- `util`
- `events`
- `child_process`

📌 **Frameworks y Librerías Esenciales**:

- `express` (Framework para backend).
- `koa` (Alternativa ligera a Express).
- `fastify` (Framework optimizado para velocidad).

📌 **Bases de Datos**:

- `mongoose` (ODM para MongoDB).
- `pg` (Cliente de PostgreSQL).
- `sequelize` (ORM para SQL).
- `redis` (Cacheo y almacenamiento en memoria).

📌 **Autenticación y Seguridad**:

- `bcrypt` (Hashing de contraseñas).
- `jsonwebtoken` (JWT para autenticación).
- `helmet` (Protección de cabeceras HTTP).
- `cors` (Manejo de CORS en APIs).

📌 **Tiempo Real y Microservicios**:

- `socket.io` (WebSockets).
- `grpc` (Comunicación entre microservicios).
- `amqplib` (RabbitMQ para colas de mensajes).
- `kafka-node` (Mensajería con Apache Kafka).

📌 **Optimización y Despliegue**:

- `pm2` (Manejo de procesos en producción).
- `nginx` (Proxy reverso y balanceo de carga).
- `dotenv` (Manejo de variables de entorno).
- `nodemon` (Recarga automática en desarrollo).