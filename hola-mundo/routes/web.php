
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SaludoController;

Route::get('/', [SaludoController::class, 'index']);
Route::get('/hola', [SaludoController::class, 'index']);
Route::get('/bienvenida', [SaludoController::class, 'index']);
