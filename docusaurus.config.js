// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CSC",
  tagline: "A CSS framework",
  url: "https://classstyle.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  //favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "KagariSoft", // Usually your GitHub org/user name.
  projectName: "csc doc", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [require.resolve("docusaurus-lunr-search")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          versions: {
            current: {
              label: "Current",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "KagariSoft",
      // logo: {
      //   alt: "KagariSoft",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          activeBaseRegex:
            "docs/(Getting started|Components|Content|next|v1|v2|v3|v4)",
          to: "docs/Getting started/intro",
          position: "left",
          label: "Get Started",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          
          lastVersion: "current",
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/KagariSoft/csc",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          label: "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright ?? ${new Date().getFullYear()} KagariSoft. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
