<?php

namespace App\Http\Controllers;

class SaludoController extends Controller
{
    public function index()
    {
        $mensaje = 'Bienvenidos a mi primera aplicación Laravel';
        $nombre = 'Alma';
        $asignatura = 'ISC-305 Programación Web';
        $carrera = 'Ingeniería en Sistemas';

        return view('hola', [
            'mensaje' => $mensaje,
            'nombre' => $nombre,
            'asignatura' => $asignatura,
            'carrera' => $carrera
        ]);
    }
}
