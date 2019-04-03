---
title: ROUTING DASAR DI LARAVEL
date: 2019-04-03 10:52:38
tags: Dokumentasi
description: Routing Dasar yang di perlukan di laravel
keywords: routing-laravel-dasar, tutorial-routing-laravel-bahasa-indonesia, laravel-aceh
image: http://laravel-aceh.github.io/images/logo@2x.png
---

Pada dasar nya laravel bisa menerima **URI** dengan sebuah **Closure** hanya dengan memanfaatkan sebuah method seperti berikut :

``` bash
Route::get('foo', function () {
    return 'Hello World';
});
```

### File Routing Default

Semua rute yang dihasilkan oleh laravel secara bawaan berada di dalam direktori / folder **Routes** yang secara bawaan sudah memiliki middleware dari masing - masing fungsi file route tersebut

``` bash
Routes/web.php menggunakan middleware web
Routes/api.php menggunakan middleware api
```

### Menggunakan Controller

Pada sebagian besar aplikasi anda bisa menentukan rute di file anda dengan menggunakan controller. Route yang anda tentukan akan dapat di akses dengan memasukkan URL langsung di browser.

``` bash
Route::get('users', 'UserController@index');
```

### Routing Tersedia

Laravel sudah menyediakan beberapa routing dengan response HTTP diantara nya :

``` bash
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

Jika seandainya anda perlu mendaftarkan rute yang merespons beberapa metode HTTP. Anda dapat melakukannya dengan menggunakan metode **match**. Atau, anda dapat mendaftarkan rute yang merespons semua metode HTTP menggunakan metode **any**:

``` bash
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('foo', function () {
    //
});
```

### Perlindungan CSRF

Bentuk form HTML apa pun yang mengarah ke **POST**, **PUT**, atau **DELETE** route yang didefinisikan dalam file **Routes/web.php** harus menyertakan bidang token **CSRF**.

``` bash
<form method="POST" action="/profile">
    @csrf
    ...
</form>
```

### Routing Pengalihan

Jika anda menginginkan route yang mengarahkan ke URI lain, maka anda harus gunakan metode **Route::redirect**.

Metode ini cara paling mudah sehingga anda tidak perlu menentukan route atau controller untuk melakukan pengalihan sederhana:

``` bash
Route::redirect('/here', '/there');
```

Secara default, **Route::redirect** mengembalikan Kode status **302**. Anda dapat menyesuaikan Kode status menggunakan parameter ketiga dan ini bersifat opsional:

``` bash
Route::redirect('/here', '/there', 301);
```

atau anda juga dapat menggunakan metode **Route::permanentRedirect** untuk mengembailkan Kode status **301**

``` bash
Route::permanentRedirect('/here', '/there');
```

### Route Tampilan

Jika routing anda hanya akan melihat hasil dari tampilan, maka ini adalah cara yang sangat di rekomendasikan :

``` bash
Route::view('/welcome', 'welcome');

Route::view('/welcome', 'welcome', ['name' => 'Laravel Aceh']);
```