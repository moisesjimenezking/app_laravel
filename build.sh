#!/bin/bash
chmod -R 777 .
cp .env.example .env
sudo docker-compose up -d --b