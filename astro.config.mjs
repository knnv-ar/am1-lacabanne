import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://am1-lacabanne.netlify.app/',
	integrations: [
		starlight({
			title: 'AM1 Lacabanne',
			logo: {
				light: './src/assets/una-m-light.svg',
				dark: './src/assets/una-m-dark.svg',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/knnv-ar/am1-lacabanne/edit/main/docs/',
			},
			social: {
				github: 'https://github.com/knnv-ar/am1-lacabanne',
			},
			sidebar: [
				{
					label: 'Taller de p5.js',
					items: [
						{
							label: 'Clase 1',
							autogenerate: { directory: 'taller-p5js/clase-1' },
						},
					],
				},
				{
					label: 'Clases',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Clases avanzadas', link: '/guides/clases-avanzadas/' },
					],
				},
				{
					label: 'Acciones de Consolidación de Saberes (ACSs)',
					autogenerate: { directory: 'acs' },
				},
				{
					label: 'Trabajos Prácticos (TPs)',
					autogenerate: { directory: 'tps' },
				},
			],
		}),
	],
});
