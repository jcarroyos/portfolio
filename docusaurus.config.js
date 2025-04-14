// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "while art: code() ",
  tagline: "Digital Work that feels sublime",
  url: "https://jcarroyos.art",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jcarroyos", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Client modules for custom functionality
  clientModules: [require.resolve('./src/clientModules.js')],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
          { to: "/gallery", label: "WorkInProgress", position: "left" },
          { to: "/gallery-flickr", label: "Artifacts", position: "left" }
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
            title: "Core Interests",
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: 'description', content: 'Hardcoded Creativity: Brutalist Digital Craft & Interactive Innovation by jcarroyos' },
      ],
    }),
};

module.exports = config;
