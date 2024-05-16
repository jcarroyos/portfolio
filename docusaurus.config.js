// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "jcarroyos",
  tagline: "Portfolio",
  url: "https://jcarroyos.art",
  baseUrl: "/portfolio/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jcarroyos", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "jcarroyos",
        logo: {
          alt: "A a sketched circle",
          src: "img/home.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Portfolio",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/gallery", label: "Gallery", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More about me",
            items: [
              {
                label: "LinkedIn",
                to: "https://linkedin.com/in/juancarlosarroyo",
              },
              {
                label: "Mastodon.art",
                to: "https://mastodon.art/@jcarroyos",
              },
              {
                label: "FreeCodeCamp",
                to: "https://www.freecodecamp.org/jcarroyos",
              },
              {
                label: "GitHub",
                to: "https://github.com/jcarroyos",
              },
            ],
          },
          {
            title: "I participate in",
            items: [
              {
                label: "ACdM",
                to: "https://alianzacolombianademuseos.co/",
              },
              {
                label: "DVS",
                to: "https://www.datavisualizationsociety.org/mentorship",
              },
            ],
          },
          {
            title: "I teach",
            items: [
              {
                label: "Infographics",
                to: "/blog/tags/infographics",
              },
              {
                label: "Virtual environments for museums",
                to: "/blog/tags/museology",
              },
              {
                label: "Hypermedia design",
                to: "/blog/tags/hypermedia",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
