// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SeguroWeb Insights',
  tagline: 'Tu Guía Completa para una Experiencia Empresarial Exitosa.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'devops',
          path: 'devops',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'frontend',
        path: 'frontend',
        routeBasePath: 'frontend',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Backend',
        path: 'backend',
        routeBasePath: 'Backend',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        title: 'SeguroWeb',
        logo: {
          alt: '',
          src: 'img/favicon.ico',
        },
        items: [
       
          {
            to: '/frontend/intro',    // ./docs-api/Intro.md
            label: 'Front End',
            position: 'left',
            activeBaseRegex: `/frontend/`,
          },
          {
            to: '/Backend/intro',  // ./docs-system/Intro.md
            label: 'Backend',
            position: 'left',
            activeBaseRegex: `/Backend/`,
          },
          {
            to: '/devops/intro',    // ./docs/Intro.md
            label: 'Dev Ops',
            position: 'left',
            activeBaseRegex: `/devops/`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/frontend/intro',
              },
            ],
          },
          {
            title: 'Redes',
            items: [
              {
                label: 'Página Web',
                href: 'https://www.seguroweb.com.ar/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/seguroweb/',
              },
              {
                label: 'Github',
                href: 'https://github.com/seguroweb',
              },
            ],
          },
          {
            title: 'CRMS',
            items: [
              {
                label: 'CRM interno',
                href: 'https://crm.gyssrl.ar/',
              },
              {
                label: 'Novedades',
                href: 'https://gyssrl.com.ar/novedades/',
              },
              {
                label: 'Estadisticas',
                href: 'https://gyssrl.com.ar/estadisticas/',
              },
              {
                label: 'Bicicleterias',
                href: 'https://bicicleterias.segurobici.com.ar/',
              },
            ],
          },
        ],
        copyright: `Seguroweb © ${new Date().getFullYear()}. Hecho con mucho amor por el equipo de sistemas ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
