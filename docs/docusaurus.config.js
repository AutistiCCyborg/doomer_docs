const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/**
 * @type {import('@docusaurus/types').DocusaurusConfig}
 */
const config = {
  title: 'Doomer.AI',
  tagline: 'Unleashing the Power of AI',

  url: 'https://x.doomer.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Doomer', // Usually your GitHub org/user name.
  projectName: 'Doomer', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Doomer.AI',
      logo: {
        alt: 'Doomer.AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Start',
        },
        {to: '/docs/ecosystem/system', label: 'Eco System', position: 'left'},
        {to: '/docs/technical/overview', label: 'Technical Docs', position: 'left'},
        {to: '/docs/blockchain/overview', label: 'Blockchain', position: 'left'},
        {to: '/docs/story/begin', label: 'The Story', position: 'left'},
        {to: '/blog', label: 'Update & News feed', position: 'right'}, // Updated the 'to' attribute for the News link

        {
          href: 'https://github.com/doomerai',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/doomerai/docs/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/doomerai/docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
};

module.exports = config;
