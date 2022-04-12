const defaultTheme = require('tailwindcss/defaultTheme');

const spacing = {};

for (let f = 0; f < 100; f += 0.1) {
    let sortNum = 0;
    const decimal = Math.floor((f * 10) % 10);
    if (decimal !== 0) {
        sortNum = parseFloat(f.toFixed(1));
    } else {
        sortNum = Math.floor(f);
    }
    const vw = sortNum + 'vw';
    const vh = sortNum + 'vh';
    spacing[vw] = vw;
    spacing[vh] = vh;
}

for (let i = 0; i < 2000; i++) {
    const px = i + 'px';
    spacing[px] = px;
}

module.exports = {
    darkMode: 'class', // or 'media' or 'class'
    content: [
        // Example content paths...
        './index.html',
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        maxHeight: {
            ...defaultTheme.maxHeight,
            ...spacing,
        },
        minHeight: {
            ...defaultTheme.minHeight,
            ...spacing,
        },
        minWidth: {
            ...defaultTheme.minWidth,
            ...spacing,
        },
        maxWidth: {
            ...defaultTheme.maxWidth,
            ...spacing,
        },
        spacing: {
            ...defaultTheme.spacing,
            ...spacing,
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            ...spacing,
        },
        extend: {},
        screens: {
            'pc-big': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }
            pc: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }
            'pc-mini': { max: '1023px' },
            // => @media (max-width: 1023px) { ... }
            pad: { max: '767px' },
            // => @media (max-width: 767px) { ... }
            'pad-mini': { max: '639px' },
            // => @media (max-width: 639px) { ... }
            phone: { max: '380px' },
        },
    },
    plugins: [],
};
