# Hero page

<img src="https://i.imgur.com/fZFFc9Z.png">
<img src="https://ibb.co/vhLfktH">
## 如何執行
step 1: clone this repository froom GitHub
step 2: npm i
step 3: yarn start

就成功囉!!

## 架構
<img src="https://i.imgur.com/OJ7zxhq.png">

## 第三方套件
- ESLint（standard）：
用途：統一 coding style、找出語法錯誤、找出多餘程式碼。
- React-router-dom：
用途：處理路由。
- Redux：
用途：用來管理儲存 React 中的 State，供專案內的檔案操作。
- Reduxjs Toolkit
用途：Redux 的 Library，提供一些 API 來更方便的處理 Redux。
- Axios
用途：基於 Promise 的 HTTP client library
- Styled-component： 
用途：CSS-In-JS Libray，可以在 JSX 中撰寫 CSS。
- indent-rainbow: 
用途：縮排有彩虹的顏色，方便查看。

## 註解原則
function、Redux 內的 initial state 以及 API 相關會寫註解，
其餘覺得命名不夠明確，或邏輯比較複雜就會寫。

## 遇到的困難、問題與解法
問題：React-router-dom: v5 及 v6 有些不同之處。
解法：上網查新的寫法，並先初步記下來
（https://chrome-pajama-86b.notion.site/react-router-dom-042b8eadd893429b89b824d64fe4c4e9）

問題：不知道許多東西的型別，例如 onClick event。
解法：上網查新的寫法

問題：第一次從頭實做 Redux。
解法：上網查寫法

## 之後想優化、修正的地方
- 做一個 Message Dialog在最上層，API 若有失敗，直接在接到 Response 的時候打開，並顯示訊息。
- 判斷 TimeOut，提醒使用者 API 可能睡著了，麻煩請等候 30秒左右再嘗試。
