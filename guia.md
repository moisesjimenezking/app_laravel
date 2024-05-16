# Manual de Instalación de la Aplicación Laravel

## Requisitos del Sistema
- PHP >= 7.3
- Composer
- MySQL
- Git


## Clonar el Repositorio
1. Abre la terminal.
2. Ejecuta el siguiente comando para clonar el repositorio: git clone https://github.com/moisesjimenezking/app_laravel.git


## Configuración del Entorno
1. Crea un archivo `.env` en la raíz del proyecto.
Nota: en el repositorio esta un archivo .env.example que puede servir de ejemplo del contenido del archivo .env
    Solo debe modificar los siguientes parametors:
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1 -> Se usa el localHost
        DB_PORT=3306 -> Puerto por defecto de MySQL
        DB_DATABASE=Nombre de la base de datos
        DB_USERNAME=Usuario de la base de datos
        DB_PASSWORD=Contraseña de la base de datos

2. Configura las variables de entorno, incluyendo la conexión a la base de datos.
3. Genera una nueva clave de aplicación con el comando: php artisan key:generate


## Instalación de Dependencias
1. Ejecuta el siguiente comando para instalar las dependencias del proyecto: composer install


## Migraciones de la Base de Datos
1. Ejecuta las migraciones de la base de datos para crear las tablas: php artisan migrate

## Iniciar el Servidor
1. Inicia el servidor de desarrollo con el comando: php artisan serve


## Pruebas
1. Abre un navegador web y accede a `http://localhost:8000` para verificar que la aplicación funciona correctamente.

El puerto es relativo ya que si esta ocupado el montara en un puerto superior que este disponible.

## Rutas

>>> GET /users
>>> GET /users?limit=1

Response 
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "firstName": "Moises",
            "otherName": "jesus",
            "surname": "jimenez",
            "secondSurname": "sanchez",
            "email": null,
            "identificationType": "cedula",
            "identificationNumber": "v100000",
            "country": "COLOMBIA",
            "area": "tecnologia",
            "state": "AVAILABLE",
            "admissionDate": "2024-01-01",
            "created_at": "2024-05-15T23:02:26.000000Z",
            "updated_at": "2024-05-15T23:02:26.000000Z"
        },
    ],
    "first_page_url": "http://127.0.0.1:8001/users?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8001/users?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "http://127.0.0.1:8001/users?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8001/users",
    "per_page": 10,
    "prev_page_url": null,
    "to": 8,
    "total": 8
}

status_http: 200

>>> DELETE /users

Requiere id

Response:
{
    "error": {
        "internalError": "Usuario no encontrado.",
        "message": "Usuario no encontrado."
    },
    "message": "Usuario no encontrado."
}
status_http: 404
O

{
    "message": "Usuario eliminado correctamente"
}
status_http: 201

>>> POST /register

Requiere:
- firstName
- surname
- secondSurname
- country
- identificationType
- identificationNumber
- area
- admissionDate

Opcional:
- otherName

Response
{
    "message": "Usuario creado exitosamente",
    "user": {
        "id": 12,
        "firstName": "jesus",
        "otherName": null,
        "surname": "sanchez",
        "secondSurname": "jimenez",
        "email": "jesus.sanchezjimenez.12@global.com.us",
        "identificationType": "cedula",
        "identificationNumber": "v26602061",
        "country": "Estados Unidoss",
        "area": "recursos humanos",
        "state": "AVAILABLE",
        "admissionDate": "2024-02-01",
        "created_at": "2024-05-16T19:21:37.000000Z",
        "updated_at": "2024-05-16T19:21:37.000000Z"
    }
}
status_http: 201

o 

{
    "error": {
        "internalError": "error firstName: The first name field is required.",
        "message": "Error de validación"
    },
    "message": "Error de validación"
}
status_http: 404

>>> PUT /users

Requiere:
- id

Opcional:
- otherName
- firstName
- surname
- secondSurname
- country
- identificationType
- identificationNumber
- area
- admissionDate

Response:
{
    "message": "Usuario actualizado exitosamente",
    "user": {
        "id": 12,
        "firstName": "juan",
        "otherName": null,
        "surname": "sanchez",
        "secondSurname": "jimenez",
        "email": "jesus.sanchezjimenez.12@global.com.us",
        "identificationType": "cedula",
        "identificationNumber": "v26602061",
        "country": "Estados Unidoss",
        "area": "recursos humanos",
        "state": "UNAVAILABLE",
        "admissionDate": "2024-02-01",
        "created_at": "2024-05-16T19:21:37.000000Z",
        "updated_at": "2024-05-16T19:54:07.000000Z"
    }
}
status_http: 201

O

{
    "error": {
        "internalError": "Error sin datos para modificar.",
        "message": "Error al actualizar el usuario"
    },
    "message": "Error al actualizar el usuario"
}
status_http: 404