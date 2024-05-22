import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/

const config = defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('swiper-')
                }
            }
        }),
        vueJsx(),
        VueDevTools()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "./src/assets/styles/scss/_mixins.scss" as mix;
                    @use "./src/assets/styles/scss/_functions.scss" as func;
                `,
                loadPaths: ['/node_modules', './src/assets/styles/scss']
            }
        }
    }
});

export default config
