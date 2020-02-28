# SMHS 學習歷程解疑網

## 回報錯誤
[按一下這裡用 Google 表單回報錯誤](https://epf.imych.one/pages/Problems)。當然，你也可以用上面的 GitHub Issues 回報。

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
### 2020.02.28 - v3.0.0
v3.0.0 創立
v2詳細記錄請參閱[此處](https://github.com/smhs-os-project/smhs-epf-faq)
