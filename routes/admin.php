<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
Route::get('/', function () {
    return view('admin.login');
});
/*Route::get('/check', function () {
    return view('admin.login');
})->name('check.login');*/

Route::get('/dashboard', function () {
    return view('admin.dashboard');
})->name('admin.dashboard');

Route::group(['middleware' => ['web']], function () {
    //Route::get('web-login', 'Auth\AuthController@webLogin');
   // Route::post('web-login', ['as'=>'web-login','uses'=>'Auth\AuthController@webLoginPost']);
    Route::get('login', 'Admin\AuthController@adminLogin');
    Route::post('login', ['as'=>'check.login','uses'=>'Admin\AdminAuthController@adminLoginPost']);
});
