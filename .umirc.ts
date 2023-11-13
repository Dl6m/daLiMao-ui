import { defineConfig } from 'dumi';
const repo = 'dalimao-ui';
export default defineConfig({
  title: 'dalimao-ui',
  favicon:'https://img.zcool.cn/community/01001d5d2d95e4a801214837994d6f.jpg@2o.jpg',
  logo:  'https://img.zcool.cn/community/01001d5d2d95e4a801214837994d6f.jpg@2o.jpg',
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
  // 单语言配置方式如下
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/Dl6m/dalimao-ui',
    },
    {
        
      title: 'npm',
      path: 'https://www.npmjs.com/package/dalimao-ui',
    //   children: [
    //     {
    //         title: 'GitHub',
    //         path: 'https://github.com/Dl6m/dalimao-ui',
    //       },
    //       {
    //         title: 'GitHub',
    //         path: 'https://github.com/Dl6m/dalimao-ui',
    //       },
    //   ]
    }
  ],


  // more config: https://d.umijs.org/config
});
