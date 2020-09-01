# SMHS 學習歷程解疑網
![畫面擷圖](https://user-images.githubusercontent.com/28441561/72662060-f7da5e00-3a1c-11ea-855a-20ac446c5da0.png)

## 回報錯誤
你可以用上面的 GitHub Issues 回報。

## 編譯說明
### Production
> 請注意：僅供測試及參考用途，我自己是覺得再建另個實體沒什麼意義啦……

1. 從 Releases 下載 Source Code 和 assets.tar.gz，並解壓縮。
2. 將 `assets.tar.gz` 解壓縮的 `assets` 放在 Source Code 解壓縮後的 `src` 資料夾
3. 輸入 `yarn` 安裝依賴
4. 先輸入 `export ytAPIToken='YouTube API 憑證'`。
   lazyframe（延後載入 YouTube 影片的模組）需要 YouTube API 以取得影片的標題及縮圖。YouTube API 憑證可以在[這裡](https://developers.google.com/youtube/v3/getting-started)取得，請務必設定網域及 API 服務範圍限制以防止被濫用。
5. 輸入 `yarn serve:dev` 啟動測試伺服器
6. 輸入 `yarn build:production` 編譯上線專用檔案，
   檔案會放在 `dist` 資料夾。

### Development
1. 複製 (clone) 這個儲存庫的 `production` 分支。
   `production` 是目前上線版本，會比 Releases 還稍微新一點，
   但又不會像 `master` 這麼不穩定。
2. 從 Releases 下載最新版本的 `assets.tar.gz`。
3. 接下來同 Production。請注意：如果有一些網頁沒有圖片，
   那應該是我們還沒更新 `assets`，忽略即可。
4. 改完之後如想發 PR，**請發到 `master` 不是 `production`！**

## 作者群
- [pan93412](https://github.com/pan93412)
- [黃猷珵](https://github.com/youualan87)

## 變更紀錄
### 2020.01.18 - v2.1.1
修正一些小問題。**assets 請沿用 `v2.0.0` 的。**

詳細變動請參閱[此處](https://github.com/smhs-os-project/smhs-epf-faq/compare/v2.1.0...v2.1.1)，屬於小型變更。

### 2020.01.18 - v2.1.0
主要是整理程式碼、變更排版等等的。UI 改的比 v2.0.0 還要多～ :P

**assets 請沿用 `v2.0.0` 的。**

詳細變動請參閱[此處](https://github.com/smhs-os-project/smhs-epf-faq/compare/v2.0.0...v2.1.0)，屬於中型變更。

### 2020.01.17 - v2.0.0
經過多個 `v1.0.99` 版之後，`v2.0.0` 已經上線囉～

由於 assets 有重大變更，**請務必更新你的 assets 到 `v2.0.0`**，否則圖片可能會顯示不出來喔。

詳細變動請參閱[此處](https://github.com/smhs-os-project/smhs-epf-faq/compare/v1.0.0...v2.0.0)，屬於大變更。

### 2020.01.15 - v1.1.0
跳過。由於變更過大，直接跳到 `v2.0.0`。
詳細請參閱[此處](https://epf.imych.one/pages/History)

### 2020.01.13 - v1.0.0
- 初始版本釋出
