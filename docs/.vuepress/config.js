module.exports = {
    title: '博客',
    base: '/blog/',
    description: '一个前端工程师的自我修养',
	    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: `/imgs/logo.png` }],
        ['link', { rel: 'manifest', href: `/manifest.json` }],
    ],
    themeConfig: {
        lastUpdated: '更新日期',
        nav: [
            { text: '笔记', link: '/Note/' },
            { text: '工具', link: '/Tool/' },
            { text: '掘金', link: 'https://juejin.im/user/5bbae0f4e51d450e905a1991/posts' },
        ],
        sidebar: {
            '/Note/':[
                ''
            ],
            '/Tool/':[
                ''
            ]
        }
    }
}
