#!/bin/bash
sudo chmod -R 775 .
sudo cp .env.example .env
sudo docker-compose up -d --b