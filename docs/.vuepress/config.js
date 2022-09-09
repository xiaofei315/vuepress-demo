module.exports = {
    base: '/',
    title: 'Claus-UI',
    // description: 'claus-ui',
    themeConfig: {
        // nav: [
        //     { text: '首页', link: '/' },
        //     { text: '指南', link: '/guide/guide' },
        //     // { text: '组件', link: '/components/colorCard' },
        //     { text: '查看源码', link: 'https://gitee.com/clausliang/claus-ui-vue2' },
        // ],
        sidebar: {
            '/guide/':[
                {title: '指南', path:'guide'}
            ],
            // '/components/': [
            //     {title: 'colorCard',path: 'colorCard'},
            // ]
        }
    },
    // chainWebpack: config => {
    // 	config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    // }
}