const path=require('path')
const pages = require('./config/pages.js')
const devEnv = require('./config/dev.env.js')
const prodEnv = require('./config/prod.env.js')
const isDev = process.env.NODE_ENV === 'development' 
module.exports = {
    pages,
    publicPath:'./',
    outputDir:'dist',
    productionSourceMap: false,
    devServer:{
        disableHostCheck: true,
        port:8080,
        open:true,
        proxy:{
            '^/api':{
                target:'http://118.190.247.18:9006',
                changeOrigin:true,
                secure:false,
                pathRewrite:{
                    '^/api':'',
                },
            },
        },
    },
    css: {
        sourceMap: isDev,
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: config => {
        config.entry('index').add('babel-polyfill')
        config.entry('stu').add('babel-polyfill')
        config.plugin('define').tap(args => { 
            args[0]['process.env'] = isDev ? devEnv : prodEnv
            return args
        })
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor:'less',
            patterns: [
                path.resolve(__dirname,'src/assets/less/variable.less'),
                path.resolve(__dirname,'src/assets/less/mixins.less'),
            ]
        }
    }
}
