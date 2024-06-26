<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

            {{--  Google FOnt --}}
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap" rel="stylesheet">

                    {{--  font Icon --}}
        <link rel="stylesheet" href="{{ asset('fontawesome/css/all.css') }}">
        <link rel="stylesheet" href="{{ asset('fontawesome/css/sharp-regular.css') }}">
        <link rel="stylesheet" href="{{ asset('fontawesome/css/sharp-solid.css') }}">
        <link rel="stylesheet" href="{{ asset('fontawesome/css/sharp-light.css') }}">



        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased ">
        @inertia

        <script src="//code.jivosite.com/widget/yCZ1AXwlgM" async></script>

    </body>
</html>
