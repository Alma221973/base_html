
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Mi primer Hola mundo en Laravel</title>
    <style>
        body {
            margin: 0;
            padding: 24px;
            background: #eef3f8;
            font-family: Arial, sans-serif;
            color: #172033;
        }

        main {
            max-width: 760px;
            margin: 40px auto;
            padding: 28px;
            background: white;
            border-radius: 12px;
        }

        h1 { color: #12325f; }
    </style>
</head>
<body>
    <main>
        <h1>{{ $mensaje }}</h1>
        <p>Hola, {{ $nombre }}.</p>
        <p>Asignatura: {{ $asignatura }}</p>
        <p>Carrera: {{ $carrera }}</p>
        <p>Esta página fue generada en el servidor con Blade.</p>
    </main>
</body>
</html>
