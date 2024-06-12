import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Maven Pro', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                primary:"#FE4E6E",
                primary2:"#FFE700",
                secondary:'#613864',
                secondary2:'#3AB4F2',
                tertiary:'#F4F4F4'
            }
        },
    },

    plugins: [forms,
        require('tailwindcss-animated')
    ],
    
};
