import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "Johnny's WebSite",
    description: "Records.",
    base: "/homesite/",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon.ico',
        socialLinks: [{icon: "github", link: "https://github.com/chaxus/homesite"}],
        nav: [
            {text: 'Home', link: '/'},
            {text: 'docs', link: '/markdown-docs'}
        ],

        sidebar: [
            {
                text: 'Title',
                items: [
                    {text: 'Start', link: '/markdown-docs'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        search: {
            provider: 'local'
        },

        footer: {
            copyright: 'Copyright © 2023 Canvas of inspiration, copyright protection'
        }
    },

    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
})
