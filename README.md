# Auto Service Manager

API para la gestion de usuarios, vehiculos y servicios de mantenimiento de un auto.
El proyecto esta construido con NestJS y actualmente se encuentra en desarrollo.

## Tecnologias implementadas

- **NestJS 11** como framework principal para la API REST.
- **TypeScript 5.7** para el desarrollo tipado.
- **Express** como adaptador HTTP de NestJS.
- **PostgreSQL** como base de datos relacional.
- **TypeORM** para entidades, repositorios y acceso a datos.
- **@nestjs/config** para cargar la configuracion de la base de datos desde variables de entorno.
- **Passport y JWT** para autenticacion mediante tokens Bearer.
- **class-validator y class-transformer** para validar y transformar DTOs.
- **Jest, ts-jest y Supertest** para pruebas unitarias y end-to-end.
- **ESLint y Prettier** para linting y formato de codigo.

## Arquitectura actual

La aplicacion sigue una arquitectura modular por dominio. Cada modulo agrupa sus
controladores, servicios, DTOs y entidades cuando aplica.

```text
src/
├── main.ts                 # Punto de entrada y configuracion global
├── app.module.ts           # Modulo raiz y composicion de la aplicacion
├── config/
│   └── database.config.ts  # Configuracion de PostgreSQL
├── auth/                   # Registro, login, JWT y usuario autenticado
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt-auth.guard.ts
│   ├── jwt.strategy.ts
│   └── dto/
├── users/                  # Operaciones CRUD de usuarios
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── entities/
│   └── dto/
├── vehicles/               # Operaciones CRUD de vehiculos
│   ├── vehicles.controller.ts
│   ├── vehicles.service.ts
│   ├── entities/
│   └── dto/
├── maintenance/            # Base inicial para mantenimientos
│   ├── maintenance.controller.ts
│   ├── maintenance.service.ts
│   ├── entities/
│   └── dto/
└── expenses/               # Base inicial para gastos
	 ├── expenses.controller.ts
	 └── expenses.service.ts
```

### Flujo de la aplicacion

1. `main.ts` crea la aplicacion NestJS, habilita CORS, agrega el prefijo global
	`/api` y configura `ValidationPipe`.
2. `AppModule` carga la configuracion y establece la conexion con PostgreSQL
	mediante `TypeOrmModule`.
3. Los controladores reciben las solicitudes HTTP y delegan la logica a los
	servicios de cada dominio.
4. Los servicios utilizan repositorios de TypeORM para consultar o modificar
	las entidades de la base de datos.
5. Las rutas protegidas utilizan `JwtAuthGuard`, que valida el token mediante
	`JwtStrategy`.

## Modulos y endpoints actuales

Todas las rutas usan el prefijo `/api`.

### Auth

- `POST /api/auth/register` - Registrar un usuario.
- `POST /api/auth/login` - Iniciar sesion y obtener un token JWT.
- `GET /api/auth/me` - Obtener el usuario autenticado. Requiere
  `Authorization: Bearer <token>`.

### Users

- `GET /api/users` - Listar usuarios.
- `GET /api/users/:id` - Obtener un usuario.
- `POST /api/users` - Crear un usuario.
- `PUT /api/users/:id` - Actualizar un usuario.
- `DELETE /api/users/:id` - Eliminar un usuario.

### Vehicles

- `GET /api/vehicles` - Listar vehiculos.
- `GET /api/vehicles/:id` - Obtener un vehiculo.
- `POST /api/vehicles` - Crear un vehiculo.
- `PUT /api/vehicles/:id` - Actualizar un vehiculo.
- `DELETE /api/vehicles/:id` - Eliminar un vehiculo.

### Maintenance y Expenses

Estos modulos tienen una estructura inicial. `Maintenance` cuenta con el
endpoint `GET /api/maintenance` en su controlador, mientras que `Expenses`
aun no tiene endpoints implementados. Actualmente ambos modulos no estan
importados en `AppModule`, por lo que deben registrarse alli antes de usarse
desde la aplicacion.

## Configuracion

Crear un archivo `.env` con las variables usadas por la conexion a PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=tu_password
DB_NAME=auto_service_manager
PORT=3000
```

## Instalacion y ejecucion

```bash
npm install

# desarrollo
npm run start:dev

# compilacion
npm run build

# produccion
npm run start:prod
```

## Pruebas

```bash
# pruebas unitarias
npm run test

# modo interactivo
npm run test:watch

# pruebas end-to-end
npm run test:e2e

# cobertura
npm run test:cov
```

## Consideraciones actuales

- El secreto JWT esta definido directamente en el codigo y debe migrarse a
  una variable de entorno antes de desplegar en produccion.
- El flujo de autenticacion compara contrasenas en texto plano; debe utilizarse
  un algoritmo de hash como bcrypt antes de manejar datos reales.
- `synchronize` de TypeORM esta deshabilitado, por lo que las migraciones de
  base de datos deben gestionarse de forma explicita.
