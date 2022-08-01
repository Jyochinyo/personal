const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    // 引入全局css样式 可以把全局样式放在这里
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "src/common/style/index.less")
      ]
    }
  }
})
