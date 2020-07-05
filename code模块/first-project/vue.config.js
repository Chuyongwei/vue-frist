module.exports = {
    // publicPath:"/film-project/",
    // 根据开发环境切换项目目录
    // publicPath:process.env.NODE_ENV==="development"?"/":"/film-project/",
    // publicPath:process.env.NODE_ENV==="development"?"/":"./",
    publicPath:"./",
    // 不影响开发环境下的 调试功能，只会在程序打包时不去打包msp文件，让打包的JS文件无法调试
    productionSourceMap:false,
    // 开启开发环境下css的调试功能，不影响程序打包操作
    css:{
        sourceMap:true
    },
    // 配置开发服务器功能
    devServer:{
        port:"8080",
        // 代理服务器配置项 - 就是完成HTTP-PROXY模块的功能配置
        // 代理的所有配置仅限于 开发服务器启动时执行
        proxy:{
            // key : 定义项目中需要被代理服务拦截的请求前缀名称
            // value : 描述定义的请求前缀的请求，被拦截后的处理方式
            "/api":{
                /*
                    请求地址 /api/filmApi/loadTyps.php 通过代理转发
                    会在请求地址前补充 target 值
                    => http://localhost:80/api/filmApi/loadTyps.php
                */
                target:"http://localhost:80", //描述被拦截的请求需要转发到那个服务器上
                // 重写请求地址 - 重写的是请求的拦截前缀
                pathRewrite:{
                    // key 以正则表达时方式描述的需要被重写的 地址
                    /*
                        重写规则 在地址发送之前执行
                        请求地址 /api/filmApi/loadTyps.php 通过代理转发
                        * 地址重写 = /filmApi/loadTyps.php
                        会在请求地址前补充 target 值
                        => http://localhost:80/filmApi/loadTyps.php
                    */
                    "^/api":""
                },
                // 在服务器启动控制台，记录下程序运行过程中的所有拦截请求的处理方式
                logLevel:"debug"

            },
            // "/test":{
            //
            // }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: ["./src/less/var.less"]
        }
    }
}
