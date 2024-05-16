#!/bin/bash
set -e

# Esperar a que MySQL esté listo
while ! mysqladmin ping -h"db" --silent; do
    sleep 1
done

# Ejecutar migraciones
php artisan migrate --force

# Iniciar Apache en modo foreground
exec apache2-foreground
