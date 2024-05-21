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
					label: 'Clases',
					items: [
						{
							label: 'Clase 1',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-1' },
						},
						{
							label: 'Clase 2',
							collapsed: false,
							autogenerate: { directory: 'clases/clase-2' },
							/*badge: 'Nuevo',*/
							
						},
						{
							label: 'Clase 6',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-6' },
							badge: { text: 'nuevo', variant: 'default' },
						},
						{
							label: 'Clase 17',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-17' },
						},
						{
							label: 'Clase 20',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-20' },
						},
						{
							label: 'Clase 24',
							collapsed: true,
							autogenerate: { directory: 'clases/clase-24' },
						},
						{
							label: 'Avanzadas',
							collapsed: false,
							autogenerate: { directory: 'clases/avanzadas' },
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
			],
		}),
	],
});
