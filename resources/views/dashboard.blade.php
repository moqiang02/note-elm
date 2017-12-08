<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }} Dashboard</title>

    <!-- Icon -->
    <link rel="shortcut icon" href="{{ config('blog.default_icon') }}">

    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">


    <script>
        window.Laravel = {
            csrfToken: "{{ csrf_token() }}"
        }

    </script>
</head>
<body>
    <div id="app"></div>

    <script src="{{ elixir('js/app.js') }}"></script>

</body>
</html>
