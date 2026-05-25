# Encordados 🎾

> Plataforma de gestión integral para talleres de encordado de raquetas — pedidos, materiales, torneos y encordadores, todo en un solo lugar.

<div align="center">

[![CI](https://img.shields.io/badge/CI-Dev_Build_&_Test-blue?logo=githubactions)](https://github.com/Aragorn7372/docker-enviroment/actions/workflows/CI-dev.yml)
[![.NET 10](https://img.shields.io/badge/.NET-10-512BD4?logo=dotnet)](https://dotnet.microsoft.com/)
[![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular)](https://angular.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql)](https://www.postgresql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D?logo=redis)](https://redis.io/)
[![SignalR](https://img.shields.io/badge/SignalR-✓-512BD4?logo=dotnet)](https://dotnet.microsoft.com/apps/aspnet/signalr)
[![Docker](https://img.shields.io/badge/Docker-✓-2496ED?logo=docker)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-✓-009639?logo=nginx)](https://nginx.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT_Bearer-000000?logo=jsonwebtokens)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

</div>

---

## Índice

- [¿Qué es esto?](#qué-es-esto)
- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Servicios Docker](#servicios-docker)
- [Inicio rápido](#inicio-rápido)
- [CI / CD](#ci--cd)
- [Estructura de roles](#estructura-de-roles)
- [Funcionalidades principales](#funcionalidades-principales)
- [Variables de entorno](#variables-de-entorno)
- [Solución de problemas](#solución-de-problemas)
- [Contribución](#contribución)
- [Desarrolladores](#desarrolladores)
- [Licencia](#licencia)

---

## ¿Qué es esto?

**Encordados** es un sistema full-stack pensado para gestionar talleres de encordado en torneos ATP y similares. Permite a jugadores crear pedidos de encordado, a encordadores gestionarlos en tiempo real, y a administradores controlar materiales, cuerdas, usuarios y exportaciones de datos.

El proyecto está estructurado como un **monorepo con submódulos Git**:

| Submódulo | Repositorio | Rol principal |
|-----------|-------------|---------------|
| `back-encordados` | [Aragorn7372/back-encordados](https://github.com/Aragorn7372/back-encordados) | API REST + SignalR (.NET 10) |
| `front-encordados` | [JorgeMrj/front-encordados](https://github.com/JorgeMrj/front-encordados) | SPA Angular 21 (PWA) |

Cada submódulo tiene su propio pipeline CI que notifica al repositorio padre mediante `repository_dispatch`.

---

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| **Backend** | .NET 10, ASP.NET Core, Entity Framework Core 10 |
| **Frontend** | Angular 21, TypeScript 5, RxJS, Tailwind CSS 3, DaisyUI 4 |
| **Bases de datos** | PostgreSQL 16 (usuarios, materiales) · MongoDB 7 (pedidos, torneos) |
| **Caché** | Redis 7 + MemoryCache (HybridCache) |
| **API** | REST + SignalR (tiempo real vía WebSocket) |
| **Auth** | JWT Bearer + BCrypt |
| **Imágenes** | Cloudinary |
| **Notificaciones** | MailKit (email) + WhatsApp Business API |
| **Exportación** | ClosedXML (Excel) · QuestPDF (PDF) · SharpCompress (ZIP) |
| **Logs** | Serilog |
| **Testing** | xUnit, Vitest, Testcontainers, Coverlet, ReportGenerator |
| **Infraestructura** | Docker, Docker Compose, Nginx, GitHub Actions |
| **IDs** | ULID (ordenables por tiempo) |

---

## Arquitectura

```
docker-enviroment/
├── back-encordados/        # API REST + SignalR (.NET 10)
├── front-encordados/       # SPA Angular 21 (PWA)
├── nginx/                  # Reverse proxy (HTTPS, HTTP→HTTPS redirect)
│   ├── nginx.conf          # Enruta /api/* → backend, /* → frontend
│   └── certs/              # Certificados SSL (auto-firmados para desarrollo)
├── mongo/                  # Script de inicialización de Replica Set MongoDB
├── .github/workflows/      # CI: build + test + cobertura automática
└── docker-compose.yml      # Orquestación completa del entorno
```

### Distribución de bases de datos

El sistema utiliza **4 bases de datos independientes** para separar dominios y optimizar el rendimiento:

| Base de datos | Motor | Almacena |
|---------------|-------|----------|
| `postgres_users` | PostgreSQL 16 | Usuarios, autenticación, roles |
| `postgres_materials` | PostgreSQL 16 | Materiales y cuerdas (relacional, transaccional) |
| `mongo_pedidos` | MongoDB 7 | Pedidos y líneas de pedido (documentos anidados) |
| `mongo_talleres` | MongoDB 7 | Torneos, asignaciones de máquinas, supervisores |

MongoDB requiere **Replica Set** (se configura automáticamente en el entrypoint `mongo-entrypoint.sh`) para soportar transacciones.

### Flujo de red

```
Cliente → Nginx (443/HTTPS)
              ├── /api/*      → Backend (.NET 10, puerto 80)
              ├── /hub/*      → SignalR (WebSocket, persistente)
              ├── /coverage/* → Reporte de cobertura HTML
              └── /*          → Frontend (Angular, puerto 80)
```

---

## Servicios Docker

El entorno completo se levanta con Docker Compose y consta de **9 servicios**:

| Servicio | Tecnología | Propósito |
|----------|------------|-----------|
| `postgres_users` | PostgreSQL 16 | Base de datos de usuarios y autenticación |
| `postgres_materials` | PostgreSQL 16 | Base de datos de materiales y cuerdas |
| `mongo_pedidos` | MongoDB 7 + Replica Set | Base de datos de pedidos |
| `mongo_talleres` | MongoDB 7 + Replica Set | Base de datos de torneos |
| `redis` | Redis 7 | Caché distribuida |
| `backend` | .NET 10 | API REST + SignalR |
| `frontend` | Angular 21 + Nginx | SPA con PWA |
| `nginx` | Nginx Alpine | Reverse proxy con SSL |
| `backend_coverage` | .NET 10 + ReportGenerator | Reporte HTML de cobertura (opcional) |

Todos los servicios están conectados mediante la red `encordados_network` (bridge).

---

## Inicio rápido

### Prerrequisitos

- Docker y Docker Compose instalados
- Git con soporte de submódulos
- OpenSSL (para regenerar certificados SSL si es necesario)

### Clonar con submódulos

```bash
git clone --recurse-submodules https://github.com/Aragorn7372/docker-enviroment.git
cd docker-enviroment
```

Si ya clonaste sin `--recurse-submodules`:

```bash
git submodule update --init --recursive
```

### Variables de entorno

Copia el archivo de ejemplo y edítalo con tus credenciales:

```bash
cp .env.example .env
# Edita .env con tus credenciales reales
```

### Levantar el entorno

```bash
docker compose up -d
```

La aplicación estará disponible en `https://localhost`.

Para ejecutar también los tests y generar el informe de cobertura:

```bash
docker compose up -d --build --build-arg RUN_TESTS=true
```

El informe de cobertura se publica en `https://localhost/coverage/`.

---

## CI / CD

El pipeline de GitHub Actions (`CI-dev.yml`) se activa automáticamente cuando cualquiera de los dos submódulos hace push a `dev` (vía `repository_dispatch`). Ejecuta en paralelo:

1. **build-front** — `npm ci` + `ng build --configuration production`
2. **build-back** — `dotnet restore` + `dotnet build -c Release`
3. **test-back** — tests unitarios con Coverlet + ReportGenerator → HTML + badges

El informe de cobertura se despliega a la rama `dev-test` y queda accesible como GitHub Pages.

> **Nota**: El CI valida que el `client_payload.branch` sea `dev` antes de ejecutar (job `check-branch`).

---

## Estructura de roles

| Rol | Capacidades |
|-----|-------------|
| `Jugador` | Crear y consultar sus propios pedidos |
| `Encordador` | Gestionar pedidos asignados, actualizar estados |
| `Supervisor` | Supervisar torneos y encordadores |
| `Admin / Owner` | Gestión completa: usuarios, materiales, cuerdas, torneos, exportaciones |

---

## Funcionalidades principales

- **Pedidos en tiempo real** — actualizaciones vía SignalR sin necesidad de recargar
- **Gestión de materiales y cuerdas** — catálogo con filtros, paginación y control de stock
- **Torneos** — creación, asignación de encordadores por máquina, supervisión
- **Exportación / importación** — backup completo de la base de datos en ZIP, informes en Excel
- **PWA** — el frontend funciona offline gracias a Angular Service Worker + Dexie (IndexedDB)
- **Escáner QR** — lectura de códigos en pedidos desde dispositivos móviles
- **Notificaciones** — emails transaccionales (MailKit) + WhatsApp Business API
- **Imágenes** — subida y transformación con Cloudinary
- **Caché híbrida** — Redis + MemoryCache con degradación graceful

---

## Variables de entorno

El archivo `.env.example` contiene todas las variables necesarias. Las más importantes:

| Variable | Obligatoria | Descripción | Valor por defecto |
|----------|-------------|-------------|-------------------|
| `JWT_KEY` | ✅ | Clave secreta para JWT (mínimo 32 caracteres) | — |
| `DATABASE_URL_USER` | ✅ | Connection string PostgreSQL usuarios | — |
| `DATABASE_URL_MATERIALS` | ✅ | Connection string PostgreSQL materiales | — |
| `MONGODB_URI_PEDIDOS` | ✅ | URI de MongoDB para pedidos | — |
| `MONGODB_URI_TALLERES` | ✅ | URI de MongoDB para torneos | — |
| `REDIS_CACHE_URL` | ❌ | URL de Redis para caché | `redis://:redis_password123@redis:6379/0` |
| `SMTP_HOST` | ✅ | Servidor SMTP para email | — |
| `SMTP_PORT` | ❌ | Puerto SMTP | `587` |
| `Cloudinary_CloudName` | ✅ | Cloud name de Cloudinary | — |
| `Cloudinary_ApiKey` | ✅ | API Key de Cloudinary | — |
| `Cloudinary_ApiSecret` | ✅ | API Secret de Cloudinary | — |
| `WhatsAppEnabled` | ❌ | Habilitar WhatsApp | `false` |
| `WhatsAppPhoneNumberId` | ❌ | ID de número de WhatsApp Business | — |
| `API_URL` | ✅ | URL base de la API para el frontend | — |
| `PRODUCTION` | ❌ | Modo producción del frontend | `true` |

---

## Solución de problemas

| Problema | Causa posible | Solución |
|----------|---------------|----------|
| `https://localhost` no carga | Certificados SSL no generados | Regenera con `openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx/certs/llave.key -out nginx/certs/cert.crt` |
| MongoDB no arranca | Replica Set no inicializado | Revisa los logs de `mongo_pedidos` / `mongo_talleres`; el entrypoint lo configura automáticamente |
| Backend no conecta a BD | Variables de entorno incorrectas | Verifica que las URLs en `.env` coincidan con los nombres de servicio en `docker-compose.yml` |
| Tests fallan con `DbUpdateConcurrencyException` | Datos residuales en SQLite InMemory | Limpia `TestResults/` y reintenta |
| Frontend no se ve | Puerto 443 ocupado | Cambia el mapeo de puertos en `docker-compose.yml` o detén otros servicios HTTPS |

---

## Contribución

1. Haz fork del repositorio
2. Crea una rama desde `dev`: `git checkout -b feature/mi-feature`
3. Realiza tus cambios en los submódulos correspondientes
4. Asegúrate de que los tests pasen:
   ```bash
   # Backend
   dotnet test back-encordados/TestEncordados/TestEncordados.csproj -c Release
   # Frontend
   npm --prefix front-encordados run test
   ```
5. Abre un Pull Request contra `dev`

**Nota**: Las contribuciones directas a `back-encordados` y `front-encordados` deben hacerse en sus repositorios individuales.

---

## Desarrolladores

<div align="center">
  <table>
    <tr>
      <td align="center" width="50%">
        <img src="https://github.com/Aragorn7372.png" width="120" height="120" style="border-radius:50%" alt="Aragorn7372"/><br />
        <br />
        <b>Aragorn7372</b><br />
        🖥️ <strong>Backend Developer</strong> · 🧪 <strong>Frontend QA</strong><br />
        <br />
        <sub>Arquitectura de la API, DbContexts, SignalR,<br />
        pipeline CI/CD, estrategia de caché y BBDD.<br />
        Validación de componentes Angular y flujos frontend.</sub>
        <br />
        <br />
        <a href="https://github.com/Aragorn7372">@Aragorn7372</a>
        <br />
        <sub><a href="https://github.com/Aragorn7372/back-encordados">back-encordados</a></sub>
      </td>
      <td align="center" width="50%">
        <img src="https://github.com/JorgeMrj.png" width="120" height="120" style="border-radius:50%" alt="JorgeMrj"/><br />
        <br />
        <b>JorgeMrj</b><br />
        🖥️ <strong>Frontend Developer</strong> · 🧪 <strong>Backend QA</strong><br />
        <br />
        <sub>Arquitectura Angular, componentes standalone,<br />
        SignalR cliente, estrategia offline/PWA.<br />
        Tests y validación de reglas de negocio backend.</sub>
        <br />
        <br />
        <a href="https://github.com/JorgeMrj">@JorgeMrj</a>
        <br />
        <sub><a href="https://github.com/JorgeMrj/front-encordados">front-encordados</a></sub>
      </td>
    </tr>
  </table>
</div>

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el fichero [LICENSE](./LICENSE) para más detalles.
