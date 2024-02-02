# CRUD Laravel

## Descripción:

Este proyecto es un ejemplo simple de CRUD (Crear, Leer, Actualizar, Eliminar) con Laravel. El proyecto permite realizar las operaciones básicas CRUD sobre una tabla de "productos".

### Tecnologías:

<img src="https://img.shields.io/badge/Laravel-FF2D20?&logo=laravel&logoColor=white
  "></img>
<img src="https://img.shields.io/badge/PHP-777BB4?&logo=php&logoColor=white
  "></img>
<img src="https://img.shields.io/badge/React-20232A?&logo=react&logoColor=61DAFB"></img>
<img src="https://img.shields.io/badge/MySQL-005C84?&logo=mysql&logoColor=white
  "></img>

### Requisitos:

<img src="https://img.shields.io/badge/Composer-885630?&logo=Composer&logoColor=white"></img>
<img src="https://img.shields.io/badge/Node%20js-339933?&logo=nodedotjs&logoColor=white
  "></img>

- Composer
- node_modules

## Instalación:

Clonar el proyecto:
```
git clone https://github.com/WizardRRR/crud-products
```

Instalar las dependencias:

```
composer install
npm install
```

Crear el archivo .env y configurar la conexión a la base de datos en el mismo.

```
cp .env.example .env
```

Ejecutar las migraciones:

```
php artisan migrate
```

Iniciar el servidor de laravel y el de desarrollo:

```
php artisan serve
npm run dev
```

## Ejemplo de archivo .env a configurar:

```
APP_NAME='Crud Products'

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=laravel_crud
DB_USERNAME=root
DB_PASSWORD=
```
