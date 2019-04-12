# Ochuunn 1.0.2

## 版本改动

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
[I am Oliver](http://ochukai.me)

# ⚠ 这里很重要 💢💥💖

```sh
npm install hexo-renderer-pug --save
```

## Install

1. In the `root` directory:

```git
$ git clone https://github.com/ochukai/hexo-theme-ochuunn.git themes/ochuunn
```

Change file `_config.default.yml` to `_config.yml`;

2. Change the `theme` property in the `config.yml` file.

```yml
# theme: landscape
theme: ochuunn
```

## 不足

* 不支持 link 类型的文章
* 不支持 category，只有 tag

(在目录的最下面， 是 hexo 的测试文章，按 b 键直达~)

