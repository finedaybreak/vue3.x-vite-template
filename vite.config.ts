import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        Unocss({}),
        vue(),
        Components({
            resolvers: [AntDesignVueResolver(), ElementPlusResolver()],
        }),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({
                    overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'not ie <= 11', 'ff >= 30', '> 1%', 'last 2 versions'],
                    grid: true,
                }),
            ],
        },
    },
});
