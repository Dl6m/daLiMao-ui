import { defineConfig } from 'dumi';
const repo = 'dalimao-ui';
export default defineConfig({
  title: 'dalimao-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  //   base:'/dalimao-ui/',
  //   publicPath:'/dalimao-ui/',
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
