//添加一个配置文件,这个文件名不能随便改
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('@/components'))
        // .set('layout',resolve('src/layout'))
        // .set('base',resolve('src/base'))
        .set('static', resolve('src/static'))
  },
}