const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Plugin development for Obsidian",
    tagline: "Plugin development for Obsidian",
    url: "https://marcusolsson.github.io",
    baseUrl: "/obsidian-plugin-docs/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    organizationName: "marcusolsson", // Usually your GitHub org/user name.
    projectName: "obsidian-plugin-docs", // Usually your repo name.
    trailingSlash: false,
    plugins: [
      [
        "@docusaurus/plugin-client-redirects",
        {
          redirects: [
            {
              to: "/api/classes/Plugin_2",
              from: ["/api/classes/Plugin"],
            },
          ],
        },
      ],
    ],
    presets: [
      [
        "@docusaurus/preset-classic",
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl:
              "https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/",
            routeBasePath: "/",
            remarkPlugins: [require("mdx-mermaid")],
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],

    themeConfig: {
      defaultMode: "dark",
      navbar: {
        title: "Plugin development for Obsidian",
        items: [
          {
            href: "https://buymeacoffee.com/marcusolsson",
            label: "Buy me a coffee",
            position: "right",
          },
          {
            href: "https://obsidian.md/community",
            label: "Community",
            position: "right",
          },
          {
            href: "https://github.com/marcusolsson/obsidian-plugin-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Create your first plugin",
                to: "/getting-started/create-your-first-plugin",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Community",
                href: "https://obsidian.md/community",
              },
              {
                label: "Create Your Own Obsidian Plugin",
                href: "https://www.youtube.com/watch?v=9lA-jaMNS0k",
              },
              {
                label: "Obsidian API",
                href: "https://github.com/obsidianmd/obsidian-api",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/marcusolsson/obsidian-plugin-docs",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
  }
);
