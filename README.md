# Ochuunn
<p>
  <img src="https://img.shields.io/badge/Ochuumm-1.1.0-red.svg?cacheSeconds=2592000" />
</p>

## 版本改动

### 1.1.0

感谢 [zhufengning](https://github.com/zhufengning) 的 [pr #37](https://github.com/ochukai/hexo-theme-ochuunn/pull/37/commits/a62ab67c0fcc81f1957d00457ebf901dcdf4d489), 添加了一个 tags 云~ 好看~ (原谅我稍微改了一下 😅)

### 1.0.4

* 支持 MathJax
* 页头加入 mathjax: true 便可以使用 MathJax 公式了~~~
* 哦哦哦，还需要在 *_config.yml* 中，把 mathjax 设置为 true

### 1.0.3

* 滚动条颜色变浅
* 代码高亮颜色变深
* body 颜色深
* 这个版本的文章更适合阅读~

### 1.0.2

* 评论时不会触发页面滚动了
* valine fork from [https://deserts.io/diy-a-comment-system/](https://deserts.io/diy-a-comment-system/), 文档看他的，但是他不支持头像随机，我改了，repo 在这里 [ochukai/valine](https://github.com/ochukai/Valine)

## 特点
* 文章界面很清晰，很适合阅读~
* Google Search Console
* Google Analytics
* [LiveRe](https://livere.com/) (我去掉了disqus, 国内不翻墙压根连不上)
* [Valine](https://valine.js.org/) (速度无敌，需要自己开一个 leancloud app，很简单，看文档吧，感谢 @[rubychat](https://github.com/rubychat))
* 打赏
* 🎈 页面滚动快捷键 (j, k, t, b, n, m 具体功能自己尝试, console 有提示~)

## Demo
[I am Oliver](https://ochukai.github.io/)
ochukai.me 最近解析到 git-pages 总是有问题~ 先不用了~

# ⚠ 这里很重要 💢💥💖

```sh
npm install hexo-renderer-pug --save
```

# ⚠ 关于tags（标签）页面

需要手动在hexo的根目录下创建`tags`页：
```sh
hexo new page "tags"
```
然后在`index.md`中加上`type: "tags"`

## Install

1. In the `root` directory:

```git
$ git clone https://github.com/ochukai/hexo-theme-ochuunn.git themes/ochuunn
```

2. Change file `_config.default.yml` to `_config.yml`;

3. Change the `theme` property in the `config.yml` file.

```yml
# theme: landscape
theme: ochuunn
```

## 不足

* 不支持 link 类型的文章
* 不支持 category，只有 tag

(在目录的最下面， 是 hexo 的测试文章，按 b 键直达~)

