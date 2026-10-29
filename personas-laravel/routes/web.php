<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

Route::get('/', function () {
    return redirect()->route('login');
});
Route::get('/login', [LoginController::class, 'create'])
    ->name('login');
Route::post('/login', [LoginController::class, 'store'])
    ->middleware('throttle:6,1')->name('login.store');
Route::middleware('auth')->group(function () {
    Route::view('/inicio', 'inicio')->name('inicio');
    Route::post('/logout', [LoginController::class, 'destroy'])
        ->name('logout');
});
