module.exports = {
    title: '博客',
    port: 8080,
    base: '/blog/',
    description: '一个前端工程师的自我修养',
	    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: `/imgs/logo.png` }],
        ['link', { rel: 'manifest', href: `/manifest.json` }],
        ['script', {}, `
              var _mtac = {};
              (function() {
                var mta = document.createElement("script");
                mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
                mta.setAttribute("name", "MTAH5");
                mta.setAttribute("sid", "500723022");
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(mta, s);
              })();
        `]
    ],
    themeConfig: {
        lastUpdated: '更新日期',
        nav: [
            { text: '笔记', link: '/Note/' },
            { text: '工具', link: '/Tool/' },
            { text: 'Resume', link: '/Resume/' },
            {
                text: 'Blog',
                ariaLabel: 'Blog Menu',
                items: [
                    { text: '掘金', link: 'https://juejin.im/user/5bbae0f4e51d450e905a1991/posts' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/WEIGUO19951107' },
                    { text: '主页', link: 'https://forguo.com' }
                ]
            }
        ],
        sidebar: {
            '/Note/':[
                'Js/',
                'Css3/',
                'jQuery/',
                'Vue/',
                'React/',
                'WxApp/',
                'Git/',
                'Project/',
                'Performance/',
                'Serve/',
                'Bugs/',
                'Safe/',
                'Codes/',
            ],
            '/Tool/':[
                ''
            ],
            '/Resume/':[
                ''
            ]
        }
    },
    plugins: ['@vuepress/back-to-top'],
}
