---
layout: post
title:  "移动Web开发指南"
date:   2015-07-24
categories: H5
---
## 概念
Mobile Web，现在流行叫H5，是将Web与各种移动设备结合。随着移动设备硬件性能的快速发展，近几年Web在移动端大展拳脚。
电商网站，资讯网站，产品介绍网站，社交应用等都有大量的Mobile Web案例。我给Mobile Web分三大类：HibridApp，WebApp，MobileWebSite

## 宿主
* 大类：phone/pad/tv/watch...
* 容器：webview/browser...
* 操作系统：ios/android/windows...

[codava](https://cordova.apache.org/) 用web技术**直接**创建hibrid app。一个native外壳，加一个全屏的webview。webview中有能力访问普通web无法访问的device api

## 设计
既然需要适应各种屏幕尺寸，设计时就需要考虑是否可以自适应？是否需要传统Native应用的那种交互效果？各个平台的交互是否需要一致，还是按照各平台自己的设计规范？

### 响应式设计框架
自适应，就需要一个响应式的设计，css3 media queries来实现响应式布局。代表性的响应式框架[Bootstrap](http://getbootstrap.com/)，还有很多其他的框架。

### 设计规范
* [Android](https://developer.android.com/design/index.html)
* [iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/index.html#//apple_ref/doc/uid/TP40006556-CH66-SW1)
* [Windows](https://msdn.microsoft.com/library/windows/apps/hh465424.aspx)


## 开发
[![Chrome DeveloperTools](https://developer.chrome.com/devtools/docs/device-mode-files/device-mode-initial-view.png)](https://developer.chrome.com/devtools/docs/device-mode)

先在PC端开发调试，Chrome是一个很好的选择，DevTools可以模拟各种移动设备，支持横竖屏切换，支持各种移动网络环境。在用真实的移动设备看效果前，在Safari调好，会省不少事。因为Safari和Chrome的差异还是不小的，Chrome的内容渲染引擎Blink是Webkit的一个分支。如果这两个浏览器都没问题，再去Android,iOS上看效果。

## 远程调试
不出意外，在PC端开发好的Web在移动设备的webview/browser上还会有一些问题，这时就需要远程调试, ios6 safari和android4.4 chrome及以上都支持远程调试。对于不支持直接浏览器远程debug的项目，可以用weinre来调试。

[Remote Debugging Guide](http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/)

## 经验
[https://github.com/doyoe/trip](https://github.com/doyoe/trip)
[https://github.com/alanerzhao/doc/blob/master/document/mobile_base.md](https://github.com/alanerzhao/doc/blob/master/document/mobile_base.md)

## 类库
* [Zepto](http://zeptojs.com/) 接口与使用与jquery基本一致，面向移动端
* [jQuery Mobile](https://jquerymobile.com/) jQuery Mobile + UI库
* [FastClick](https://github.com/ftlabs/fastclick) 众所周知，移动端的click响应有300ms延迟，这个库可以便捷又无侵入的解决问题
* [DeviceJS](https://github.com/matthewhudson/device.js?) 方便的监测设备相关信息
* [HammerJS](https://github.com/hammerjs/hammer.js/) 各种手势
