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


## Install
1. In the `root` directory:

```git
$ git clone https://github.com/ochukai/hexo-theme-ochuunn.git themes/ochuunn
```

```sh
# fix issue #1
npm install hexo-renderer-jade --save
```

2. Change the `theme` property in the `config.yml` file.

```yml
# theme: landscape
theme: ochuunn
```

3. Run: `hexo generate` and `hexo server`


## Tips
Add these code to your package.json

```js

"scripts": {
  "deploy": "hexo clean && hexo generate && hexo deploy",
  "start": "hexo clean && hexo s --debug"
},

```

After you do this, just run `npm start` to debug your site and run `npm run deploy` to deploy your site.

## 使用者列表
(使用本主题之后，可以直接修改 README.md 文件，系统会自动提 pr 给我的，我来负责合并)

-
-
