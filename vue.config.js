// vue.config.js
module.exports = {
  lintOnSave: false, // 关闭eslint的检查
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
