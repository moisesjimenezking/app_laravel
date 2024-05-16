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