---
title: KONFIGURASI WEB SERVER
date: 2019-03-31 11:45:34
tags: Dokumentasi
description: Konfigurasi web server untuk keperluan Development Laravel
keywords: konfigurasi-web-server-laravel, tutorial-konfigurasi-web-server-laravel-bahasa-indonesia, laravel-aceh
image: http://laravel-aceh.github.io/images/logo@2x.png
---

### Apache Web Server

Laravel sudah menyertakan file **.htaccess** didalam direktori **public/** yang digunakan untuk keperluan **RewriteEngine** serta untuk membuat **URL CANTIK**.

Sebelum laravel di jalankan pastikan module Rewrite di server apache sudah di aktifkan, agar file .htaccess dapat bekerja dengan sempurna.

``` bash
Options +FollowSymLinks -Indexes
RewriteEngine On

RewriteCond %{HTTP:Authorization} .
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

### Nginx Server

Jika anda menggunakan Nginx, arahkan semua permintaan ke index.php
``` bash
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

Jika anda menggunakan [Homestead](https://laravel.com/docs/5.8/homestead) atau [Valet](https://laravel.com/docs/5.8/valet), URL cantik akan otomatis terkonfigurasi.
