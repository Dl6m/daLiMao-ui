import { defineConfig } from 'dumi';
const repo = 'da-li-mao-ui';
export default defineConfig({
  title: 'da-li-mao-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  //   base:'/da-li-mao-ui/',
  //   publicPath:'/da-li-mao-ui/',
  //   exportStatic:{},

  devServer: {
    port: 2023,
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  themeConfig: {
    nav: [{ title: '标题', link: '链接' }],
  },

  // more config: https://d.umijs.org/config
});
