import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '兰州大学飞升指南',
  description: '由兰大学生共同维护的升学申请与就业经验手册',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#5b21b6' }],
    ['meta', { name: 'author', content: 'LZU Guide contributors' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '兰州大学飞升指南',
    outline: { level: [2, 3], label: '本页目录' },
    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索站内内容' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '最近更新', link: '/updates' },
      {
        text: '申请指南',
        items: [
          { text: '保研与考研', link: '/future/postgraduate' },
          { text: '留学申请', link: '/future/overseas' },
          { text: '就业求职', link: '/future/careers' }
        ]
      },
      { text: '分享经验', link: '/contribute/' }
    ],
    sidebar: [
      {
        text: '开始阅读',
        items: [
          { text: '关于这本指南', link: '/about' },
          { text: '最近更新', link: '/updates' }
        ]
      },
      {
        text: '升学与就业',
        collapsed: false,
        items: [
          { text: '路径总览', link: '/future/' },
          { text: '保研与考研', link: '/future/postgraduate' },
          { text: '留学申请', link: '/future/overseas' },
          { text: '就业求职', link: '/future/careers' }
        ]
      },
      {
        text: '个人经验',
        collapsed: false,
        items: [
          { text: '文章索引', link: '/experience/' },
          { text: '材料与能源学院', link: '/experience/colleges/materials-energy' },
          { text: '草地农业科技学院', link: '/experience/colleges/grassland-agriculture' },
          { text: '大气科学学院', link: '/experience/colleges/atmospheric-sciences' },
          { text: '地质科学与矿产资源学院', link: '/experience/colleges/geology-minerals' },
          { text: '第一临床医学院', link: '/experience/colleges/first-clinical' },
          { text: '第二临床医学院', link: '/experience/colleges/second-clinical' },
          { text: '动物医学与生物安全学院', link: '/experience/colleges/veterinary-biosafety' },
          { text: '法学院', link: '/experience/colleges/law' },
          { text: '高等教育研究院', link: '/experience/colleges/higher-education' },
          { text: '公共卫生学院', link: '/experience/colleges/public-health' },
          { text: '管理学院', link: '/experience/colleges/management' },
          { text: '核科学与技术学院', link: '/experience/colleges/nuclear' },
          { text: '护理学院', link: '/experience/colleges/nursing' },
          { text: '化学化工学院', link: '/experience/colleges/chemistry' },
          { text: '基础医学院', link: '/experience/colleges/basic-medical' },
          { text: '经济学院', link: '/experience/colleges/economics' },
          { text: '口腔医学院', link: '/experience/colleges/stomatology' },
          { text: '历史文化学院', link: '/experience/colleges/history-culture' },
          { text: '马克思主义学院', link: '/experience/colleges/marxism' },
          { text: '生命科学学院', link: '/experience/colleges/life-sciences' },
          { text: '数学与统计学院', link: '/experience/colleges/math-statistics' },
          { text: '生态学院', link: '/experience/colleges/ecology' },
          { text: '土木工程与力学学院', link: '/experience/colleges/civil-mechanics' },
          { text: '外国语学院', link: '/experience/colleges/foreign-languages' },
          { text: '文学院', link: '/experience/colleges/literature' },
          { text: '物理科学与技术学院', link: '/experience/colleges/physics' },
          { text: '新闻与传播学院', link: '/experience/colleges/journalism' },
          { text: '信息科学与工程学院', link: '/experience/colleges/information' },
          { text: '药学院', link: '/experience/colleges/pharmacy' },
          { text: '艺术学院', link: '/experience/colleges/arts' },
          { text: '哲学社会学院', link: '/experience/colleges/philosophy-sociology' },
          { text: '政治与国际关系学院', link: '/experience/colleges/politics-international' },
          { text: '资源环境学院', link: '/experience/colleges/resources-environment' },
          { text: '萃英学院', link: '/experience/colleges/cuiying' },
          { text: '国际文化交流学院', link: '/experience/colleges/international-cultural-exchange' },
          { text: '威尔士学院', link: '/experience/colleges/wales' }
        ]
      },
      {
        text: '专项经验',
        collapsed: true,
        items: [
          { text: '科研经历与申请', link: '/research/' }
        ]
      },
      {
        text: '共建指南',
        items: [
          { text: '如何投稿', link: '/contribute/' },
          { text: '写作模板', link: '/experience/template' }
        ]
      }
    ],
    footer: {
      message: '经验有时效，重要事项请以兰州大学官方通知为准。',
      copyright: '© 2026 LZU Guide contributors · MIT Licensed'
    }
  }
})
