module.exports = {
    title: 'forguo',
    port: 9090,
    base: '/',
    description: '一个前端工程师的自我修养',
	    markdown: {
        lineNumbers: true
    },
    head: [
        ['meta', { name: 'keywords', content: `web前端个人简历,forguo,wforguo,web前端,个人简历,前端工程师,F2E,前端开发,魏国,一个前端工程师的自我修养` }],
        ['meta', { name: 'description', content: `前端个人简历|F2E|web前端个人简历|一个前端工程师的自我修养|魏国|forguo|wforguo` }],
        ['meta', { name: 'author', content: `魏国,forguo,wforguo,卫国没有周` }],
        ['meta', { name: 'baidu-site-verification', content: `code-bakUos2v8l` }],
        ['meta', { name: 'google-site-verification', content: `9aVJNYlDCl0rCI1akpdSqg9Xwr47KJrVWSXktSsfwKE` }],
        ['link', { rel: 'icon', href: `/imgs/logo.png` }],
        ['link', { rel: 'manifest', href: `/manifest.json` }],
        ['script', {}, `
             var _mtac = {"performanceMonitor":1,"senseQuery":1};
              (function() {
                  var mta = document.createElement("script");
                  mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
                  mta.setAttribute("name", "MTAH5");
                  mta.setAttribute("sid", "500488468");
                  mta.setAttribute("cid", "500671027");
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
            { text: '简历', link: '/Resume/' },
            {
                text: 'Blog',
                ariaLabel: 'Blog Menu',
                items: [
                    { text: '掘金', link: 'https://juejin.im/user/5bbae0f4e51d450e905a1991/posts' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/WEIGUO19951107' },
                    { text: '主页', link: 'https://www.forguo.cn' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/wforguo' },
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
};
