module.exports = {
    title: '博客',
    base: '/',
    description: '一个前端工程师的自我修养',
	    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: `/imgs/logo.png` }],
        ['link', { rel: 'manifest', href: `/manifest.json` }],
    ],
    themeConfig: {
        nav: [
            { text: '笔记', link: '/Note/' },
            { text: '工具', link: '/Tool/' },
            { text: 'CSDN', link: 'https://blog.csdn.net/WEIGUO19951107' },
        ],
      sidebar: {
      }
    }
}
