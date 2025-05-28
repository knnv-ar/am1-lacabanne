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
				baseUrl: 'https://github.com/knnv-ar/am1-lacabanne/edit/main/',
			},
			social: {
				github: 'https://github.com/knnv-ar/am1-lacabanne',
			},
			sidebar: [
				{
					label: 'Organización',
					collapsed: true,
					autogenerate: { directory: 'organizacion' },
				},
				{
					label: 'Taller p5.js',
					items: [
						{
							label: 'Clase 1',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-1' },
						},
						{
							label: 'Clase 2',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-2' },
							/*badge: 'Nuevo',*/
							
						},
						{
							label: 'Clase 3',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-3' },	
						},
						{
							label: 'Clase 4',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-4' },
						},
						{
							label: 'Clase 5',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-5' },
						},
						{
							label: 'Clase 6',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-6' },
						},
						{
							label: 'Misc.',
							collapsed: false,
							autogenerate: { directory: 'clases/misc' },
							badge: { text: 'nuevo', variant: 'default' },
						},
					],
				},
				{
					label: 'Acciones de Consolidación de Saberes (ACSs)',
					collapsed: true,
					autogenerate: { directory: 'acs' },
				},
				{
					label: 'Trabajos Prácticos (TPs)',
					collapsed: true,
					autogenerate: { directory: 'tps' },
				},
				{
					label: 'Bibliografía',
					collapsed: true,
					autogenerate: { directory: 'bibliografia' },
				},
			],
		}),
	],
});
