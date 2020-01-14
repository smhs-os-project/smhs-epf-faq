# SMHS 學習歷程解疑網
![畫面擷圖](https://user-images.githubusercontent.com/28441561/72222294-0bf60980-359e-11ea-8a73-4656140e8268.png)

## 回報錯誤
[按一下這裡用 Google 表單回報錯誤](https://docs.google.com/forms/d/e/1FAIpQLScl0RVEabr0uaXxfPfCW_Jlz-Fd9MqUfXe0LXpvyeYW4syqeg/viewform)。當然，你也可以用上面的 GitHub Issues 回報。

## 編譯說明
1. 從 Releases 下載 assets.tar.gz
2. 將上述檔案解壓縮的 `assets` 放在 `src` 資料夾
3. 輸入 `yarn` 安裝依賴
4. 輸入 `yarn serve:dev` 啟動測試伺服器
5. 輸入 `yarn build:production` 編譯檔案，檔案會放在 `dist` 資料夾。

## 作者群
- [pan93412](https://github.com/pan93412)
- [黃猷珵](https://github.com/youualan87)

## 變更紀錄
### 2020.01.15 - v1.1.0
經過多個 `v1.0.99` 版之後，`v1.1.0` 已經上線囉～

由於有說明及圖片上架，**請務必更新你的 assets 到 `v1.1.0`**，否則圖片可能會顯示不出來喔。

詳細變動請參閱[此處](https://github.com/smhs-os-project/smhs-epf-faq/compare/v1.0.0...v1.1.0)，這裡只提比較重要的變更。

- `[24e7b89]` (手機版) 現在標頭列 (header) 會上色了。
- `[6c0e97a]` 遷移原始碼庫到 smhs-os-project 了！
- `[03342d4]` 把回報連結連回舊版的回報介面。
- `[c0c2417]` 把後端檔案架構整理了一下。
- `[91dadd7] [f29ed01]` 修正幾張圖片的連結。
- `[d6def32]` 計時器還沒準備好前會顯示「計算中…」。
- `[3b4621f] [277290c]` 把 includes 中 header.pug 的元件分離了。
- `[7c2aa16]` 加入「合併圖片」和「壓縮圖片」的教學。
- `[d4db34e]` 首頁加入新 Tip。
- `[3e5b44a]` 加入了「影音處理」一列，並加入了四個子項目。
- `[1fb1a48]` 標示（突顯）的英文叫 `highlight` 不叫 `lighter` :P

### 2020.01.13 - v1.0.0
- 初始版本釋出