### example
#### 使用方法
```
# 开启本地服务 & 打开浏览器 3000 端口
npm run dev

```

#### 作用
测试组件在 react工程的使用情况

#### 搭建过程
```
# 初始化 package

npm init -y

# 初始化 react项目依赖

npm install -S react react-dom

# babel 配置 (注意版本，各个依赖版本不匹配，无法正常运行)
npm install -D @babel/core @babel/plugin-transform-runtime @babel/preset-env babel-loader @babel/preset-react

# 配置 .babelrc.json
    {
        "presets": [
            "@babel/preset-env",
            "@babel/react"
        ],
        "plugins": [
            "@babel/plugin-transform-runtime"
        ]
    }

# 配置本地开发服务
npm install -D webpack-dev-server

# 配置 react工程的 html模块
npm install -D html-webpack-plugin

# 支持 css\less
npm i -D css-loader style-loader less-loader less


```