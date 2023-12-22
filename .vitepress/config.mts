import {defineConfigWithTheme} from 'vitepress'

// https://github.com/Jazee6/vitepress-theme-blur

export default defineConfigWithTheme<ThemeConfig>({
    title: "Hi! Jazee",
    description: "A Blog Powered by VitePress Theme Blur",
    lang: "zh-CN",
    cleanUrls: true,
    themeConfig: {
        siteTitle: "Hi! Jazee",
        avatar: {
            src: "/avatar.png",
            shadow: false,
        },
        line1: "👋 Hi! Jazee",
        line2: "Powered by VitePress Theme Blur",
        nav: [
            {text: "Home", link: "/"},
            {text: "Links", link: "/pages/links"},
            {text: "About", link: "/pages/about"},
            {text: "AI", link: "https://ai.jaze.top/"},
        ],
        socialLinks: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>'
                },
                link: "https://github.com/Jazee6/vitepress-theme-blur",
                ariaLabel: "Github"
            },
            // {
            //     // Twitter
            //     icon: {
            //         svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" fill="currentColor"></path></svg>'
            //     },
            //     link: "https://twitter.com/",
            //     ariaLabel: "Twitter"
            // }

            // If you want to add more social links, you can add them here. Set viewBox="0 0 512 512"
            // Recommended svg site: https://xicons.org/
            // 在这里添加更多的社交链接。设置 viewBox="0 0 512 512"
            // 推荐的svg网站：https://xicons.org/
        ],
        footer: {
            copyright: "© 2023 Jazee",
            message: "Built with ❤️ by Jazee",
            // For China Mainland ICP License only (https://beian.miit.gov.cn/)
            // @ts-ignore
            beiAn: "湘ICP备2023026554号-1",
        },
    },
    sitemap: {
        hostname: "https://jaze.top",
    },
    head: [
        ["link", {rel: "icon", type: "image/x-icon", href: "/favicon.png"}],
        ["meta", {name: "author", content: "Jazee"}],
        ["meta", {name: "keywords", content: "Jazee, Blog, VitePress, VitePress Theme Blur"}],
        ["meta", {name: "description", content: "A Blog Powered by VitePress Theme Blur"}],
        ["meta", {name: "og:title", content: "Hi! Jazee"}],
        ["meta", {name: "og:description", content: "A Blog Powered by VitePress Theme Blur"}],
        ["meta", {name: "og:type", content: "website"}],
        ["meta", {name: "og:url", content: "https://jaze.top/"}],
        ["meta", {name: "og:image", content: "https://jaze.top/preview.webp"}],
        ["meta", {name: "twitter:image", content: "https://jaze.top/preview.webp"}],
        ["meta", {name: "twitter:card", content: "summary"}],
        ["meta", {name: "twitter:title", content: "Hi! Jazee"}],
        ["meta", {name: "twitter:description", content: "A Blog Powered by VitePress Theme Blur"}],
        ["meta", {name: "twitter:url", content: "https://jaze.top/"}],
        ["meta", {name: "baidu-site-verification", content: "codeva-lDGAXYOQrd"}],
    ],
    markdown: {
        theme: "github-light",
        math: false,
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        },
        config: (md) => {
            const originalImageRender = md.renderer.rules.image!;

            md.renderer.rules.image = (tokens, index, options, env, self): string => {
                tokens[index].attrSet("loading", "lazy");

                return originalImageRender(tokens, index, options, env, self);
            };
        }
    }
})

interface ThemeConfig {
    siteTitle: string
    avatar: {
        src: string
        shadow: boolean
    }
    line1: string
    line2: string
    nav: {
        text: string
        link: string
    }[]
    socialLinks: {
        icon: {
            svg: string
        }
        link: string
        ariaLabel?: string
    }[]
    footer: {
        copyright: string
        message: string
        beiAn: string
    }
}