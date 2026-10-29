@extends('layouts.app')
@section('contenido')
<h1>Iniciar sesión</h1>
<form method="POST" action="{{ route('login.store') }}">
    @csrf
    <label for="email">Correo electrónico</label>
    <input id="email" name="email" type="email"
        value="{{ old('email') }}" required>
    <label for="password">Contraseña</label>
    <input id="password" name="password" type="password" required>
    <button type="submit">Ingresar</button>
</form>
@endsection