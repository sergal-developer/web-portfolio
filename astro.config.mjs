import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    outDir: './docs',
    site: 'https://sergal.site/',
    output: 'hybrid'
});
