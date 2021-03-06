module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/tract/'
      : '/',
    css: {
      loaderOptions: {
        // pass options to sass-loader
        sass: {
          // @/ is an alias to src/
          // so this assumes you have a file named `src/variables.scss`
          data: `@import "~@/assets/css/app.scss";`
        },
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      },
      module: {
        rules: [
          // ...
          {
            test: /\.md$/,
            loaders: [
              'vue-loader',
              {
                loader: 'vue-md-loader',
                options: {
                  // your preferred options
                }
              }
            ]
          }
        ]
      }
    },
    pages: {
      index: {
        entry: './src/main.js',
        template: 'public/index.html',
        title: 'Uelmar Ortega',
        chunk: ['chunk-vendors']
      },
      404: {
        entry: './src/main.js',
        template: 'public/index.html',
        title: 'Uelmar Ortega',
        chunk: ['chunk-vendors']
      }
    }
}