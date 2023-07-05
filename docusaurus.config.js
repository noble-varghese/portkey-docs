/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Portkey Docs',
    tagline: 'Ship Ambitious Generative AI Apps',
    url: 'https://portkey.ai/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/portkey_logo.png',
    organizationName: 'Portkey',
    projectName: 'portkey-docs',
    plugins: ['@ionic-internal/docusaurus-plugin-tag-manager'],
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart', 'php', 'kotlin', 'groovy', 'hcl'],
        },
        tagManager: {
            trackingID: 'GTM-5ZV5K5G',
        },
        navbar: {
            title: 'Portkey',
            logo: {
                alt: 'Portkey Logo',
                src: 'img/portkey_logo.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://portkey.ai/',
                    label: 'Portkey.ai',
                    position: 'left',
                },
                {
                    href: 'https://github.com/Portkey-AI',
                    label: 'GitHub',
                    position: 'left',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Portkey',
                    items: [
                        {
                            label: 'Portkey.ai',
                            to: 'https://portkey.ai/',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/PortkeyAI',
                        },
                    ],
                },
                {
                    title: 'Open Source',
                    items: [
                        {
                            label: 'Github',
                            href: 'https://github.com/Portkey-AI',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'https://portkey.ai/blog',
                        }
                    ],
                },
            ],
            copyright: `Built with Docusaurus.`,
        },
        announcementBar: {
            id: 'support_us',
            content: `If you like Portkey, give us a star 🌟 on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Portkey-AI">GitHub</a> and follow us ❤️ on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/PortkeyAI">Twitter</a>`,
            backgroundColor: '#5d60cc',
            textColor: '#ffffff',
            isCloseable: true,
        },
        stylesheets: [
            '/css/custom-dark-theme.css',
        ],
        layoutComponent: require.resolve('./src/layouts/CustomLayout.js'),
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
    },
    presets: [
        [
            'docusaurus-preset-openapi',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Portkey-AI/tree/main/docs/',
                    lastVersion: 'current'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                api: {
                    path: 'api_spec',
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
            },
        },
    },
};
