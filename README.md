# Lidemy react.js demo - blog
---
[demo](http://cwc329.tw/react-blog)
## 內容
本專案以 react.js 創建一個 blog 前端頁面，後端則串接 Lidemy 課程提供的練習用 API。

### 使用技術與套件
1. create-react-app  
  快速建立 react 開發環境
1. react.js  
  前端框架
2. styled-components
  在 react 中使用 CSS

### 功能
1. 有管理員，管理員登入後可以發表、編輯、刪除文章。
2. 訪客可以註冊成為會員。
3. 註冊會員並且登入之後即可發表、編輯、刪除文章。
4. 訪客可以瀏覽所有文章。
5. 首頁顯示最新五篇文章，文章列表有分頁功能，每頁五篇文章。

## 部署
**1. 下載與前往**
```
$ git clone https://github.com/cwc329/react-blog.git path/to/where/you/want/to/save
$ cd path/to/where/you/want/to/save
```

**2. 安裝套件與執行**
```
$ npm install
$ npm start
```
接著就可以在 `http://localhost:3000` 看到 blog。
