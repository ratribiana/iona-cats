const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}

module.exports = {
    chainWebpack: config => {
      config.plugins.delete('named-chunks'),
      config.resolve.set('symlinks', process.env.NODE_ENV !== 'development'),
      config.module.rule('images').use('url-loader').loader('url-loader').tap(options => Object.assign(options, { limit: 10240 }))
    },
    publicPath: process.env.NODE_ENV == 'production' ? '/' :  '/',
    transpileDependencies: [
      /\bresize-detector\b/,
    ],
    css: {
      sourceMap: process.env.NODE_ENV !== 'production'
    },
    indexPath: 'index.html',
    assetsDir: "static",
    lintOnSave: true,
    configureWebpack: {
        resolve: {
          alias: {
               '@': resolveSrc('src/'),
                api: resolveSrc('src/api/'),
                assets: resolveSrc('src/assets/'),
                components: resolveSrc('src/components/'),
                container: resolveSrc('src/container/'),
                utils: resolveSrc('src/utils/'),
                views: resolveSrc('src/views/'),
                'vue$': 'vue/dist/vue.esm.js',
            },
          extensions: ['*', '.js', '.vue', '.json']
        },
        plugins: []
    }
}
