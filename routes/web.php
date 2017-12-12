<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix' => 'dashboard','namespace' => 'Admin'], function () {
    Route::get('{path?}', 'DashboardController@dashboard')->where('path', '[\/\w\.-]*');
});

/*
Route::group(['prefix' => 'admin','namespace' => 'Admin'],function ($router)
{
    Route::get('login', 'LoginController@showLoginForm')->name('admin.login');
    Route::post('login', 'LoginController@login');
    Route::get('logout', 'LoginController@logout');
    Route::get('dash', 'DashboardController@index');
});*/


