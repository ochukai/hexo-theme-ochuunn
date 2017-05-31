# Ochuunn

## 特点
文章界面很清晰，很适合阅读~

## Demo
[I am Oliver](http://ochukai.me)

## Features

* Google Search Console
* Google Analytics
* Disqus
* Live2d WebGL (比较大，可能会导致页面加载变慢~)
* Hotjar
* Reward
* 页面滚动快捷键(j,k,t,b,n,m 具体功能自己尝试)

# ⚠ 这里很重要 💢💥💖

```sh
npm install hexo-renderer-pug --save


## 如果要用到 live2d, 安装这个, 不用就算了~
npm install -save hexo-helper-live2d
```

## Install
1. In the `root` directory:

```git
$ git clone https://github.com/ochukai/hexo-theme-ochuunn.git themes/ochuunn
```

2. Change the `theme` property in the `config.yml` file.

```yml
# theme: landscape
theme: ochuunn
```

3. Run: `npm start`

Add these code to your package.json

```js
"scripts": {
  "deploy": "hexo clean && hexo generate && hexo deploy",
  "start": "hexo clean && hexo s --debug"
},
```

After you do this, just run `npm start` to debug your site and run `npm run deploy` to deploy your site.

## 不足

* 不支持 link 类型的文章
* 不支持 category，只有 tag

(在目录的最下面， 是 hexo 的测试文章，按 b 键直达~)

## 使用者列表
(使用本主题之后，可以直接修改 README.md 文件，系统会自动提 pr 给我的，我来负责合并)

* [I am Oliver](http://ochukai.me)
* [Zacco's Blog](https://blog.zacco.site)
* （待补充）


## 如果要使用 live2d , 可以在 hexo 的配置文件 _config.xml 里面加入这样的参数来选择 model:

```yml
live2d:
  model: nipsilon
  bottom: -60
```

链接: [github/hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)
