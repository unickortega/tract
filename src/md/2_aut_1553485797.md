# Laravel-Vue SPA 

<a href="https://travis-ci.org/cretueusebiu/laravel-vue-spa"><img src="https://travis-ci.org/cretueusebiu/laravel-vue-spa.svg?branch=master" alt="Build Status"></a>
<a href="https://packagist.org/packages/cretueusebiu/laravel-vue-spa"><img src="https://poser.pugx.org/cretueusebiu/laravel-vue-spa/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/cretueusebiu/laravel-vue-spa"><img src="https://poser.pugx.org/cretueusebiu/laravel-vue-spa/v/stable.svg" alt="Latest Stable Version"></a>

> A Laravel-Vue SPA starter project template.

<p align="center">
<img src="https://i.imgur.com/NHFTsGt.png">
</p>

## Features

- Laravel 5.7 
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register and password reset
- Authentication with JWT
- Socialite integration
- Bootstrap 4 + Font Awesome 5

## Installation

- Get LMS project from this repository on GitHub
  ```
  git clone https://github.com/NexSeed/LMS.git
  ```
- Run install command for Laravel
  ```
  cd LMS
  composer install
  ```

- Use git submodule
  ```
  git submodule init
  git submodule update
  ```
- Prepare Dotenv file for laradock
  ```
  cp .laradock.env.example laradock/.env
  ```
- Prepare Dotenv file for Laravel
  ```
  cp .env .env.example
  ```
- Create Table on DB
  ```
  cp createdb.sql.example laradock/mysql/docker-entrypoint-initdb.d/createdb.sql
  ```
- Build Docker container
  ```
  cd laradock
  docker-compose up -d nginx mysql phpmyadmin redis workspace
  ```
- Enter MySQL container
  ```
  docker exec -it laradock_workspace_1 /bin/bash
  ```
- Run migration
  ```
  php artisan migrate
  ```
- Bye container
  ```
  exit
  ```
- Generate key
  ```
  php artisan key:generate
  ```
  ```
  php artisan jwt:secret
  ```
- Run npm install
  ```
  npm install
  ```

## Usage

### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

### Production

```bash
npm run production
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.
