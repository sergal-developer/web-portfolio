import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    outDir: './docs',
    // root: './src',
    // Resolves to the "./foo/public" directory in your current working directory
    publicDir: '/web-portafolio/',
});
