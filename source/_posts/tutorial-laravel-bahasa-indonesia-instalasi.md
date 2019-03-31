---
title: TUTORIAL LARAVEL BAHASA INDONESIA - INSTALASI
date: 2019-03-30 11:22:52
tags: Dokumentasi
description: Belajar instalasi laravel bahasa indonesia
keywords: laravel-dasar, tutorial-laravel-bahasa-indonesia, laravel-aceh
image: http://laravel-aceh.github.io/images/logo@2x.png
---

Bismillahirrahmanirrahim

Assalamu'alaikum warahmatullahi wabarakatuh

# Instalasi Laravel

## Persyaratan Server

Framework Laravel memiliki beberapa persyaratan sistem. Semua persyaratan ini dipenuhi oleh mesin virtual yang disebut Laravel Homestead, jadi sangat disarankan agar anda menggunakan Homestead sebagai lingkungan pengembangan Laravel lokal anda.

Namun, jika anda tidak menggunakan Homestead, anda harus memastikan server anda memenuhi persyaratan berikut:

* PHP >= 7.1.3
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Ctype PHP Extension
* JSON PHP Extension
* BCMath PHP Extension

## Menginstal Laravel

Laravel menggunakan [Composer](https://getcomposer.org/) untuk mengelola dependensinya. Jadi, sebelum menggunakan Laravel, pastikan Anda memiliki [Composer](https://getcomposer.org/) yang terinstal di komputer anda.

### Menggunakan Laravel Installer

Pertama, unduh penginstal Laravel menggunakan Composer:

``` bash
composer global require laravel/installer
```

Pastikan untuk menempatkan direktori vendor $PATH biner seluruh sistem Composer anda sehingga anda dapat dieksekusi laravel oleh sistem anda. Direktori ini ada di berbagai lokasi berdasarkan sistem operasi anda; namun, beberapa lokasi umum meliputi:

* macOS: $HOME/.composer/vendor/bin
* GNU / Distribusi Linux: $HOME/.config/composer/vendor/bin
* Windows: %USERPROFILE%\AppData\Roaming\Composer\vendor\bin

Setelah diinstal, perintah laravel new  akan membuat instalasi di direktori yang anda tentukan. Misalnya anda akan membuat sebuah Laravel baru dengan nama blog maka cukup ketikkan perintah laravel new blog, maka laravel akan menyiapkan data yang di perlukan.

``` bash
laravel new blog
```

### Menggunakan Composer Create-Project

Atau, anda juga dapat menginstal Laravel dengan menggunakan perintah composer create-project di terminal Anda:

``` bash
composer create-project --prefer-dist laravel/laravel blog
```

### Menjalankan Server

Jika anda menginstal PHP secara lokal dan anda ingin menggunakan server pengembangan bawaan PHP untuk melayani aplikasi anda, Maka anda dapat menggunakan perintah artisan serve. Perintah ini akan memulai server pengembangan di : http://localhost:8000

``` bash
php artisan serve
```

Sampai saat ini seharusnya tidak ada masalah yang serius, Jika anda mengalami kendala pada saat penginstalan maka anda bisa merujuk ke halaman dokumentasi Laravel secara langsung
https://laravel.com/docs

