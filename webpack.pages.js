module.exports = {
  // entry (或稱 chunk)
  entries: {
    // CSS 檔案。預設引入。
    css: './src/js/css.js',
    // 在新分頁開啟。預設引入。
    blank: './src/js/blank.js',
    // 清除追蹤 query。預設引入。
    cleanupQueries: './src/js/cleanupQueries.js',
    // 倒數計時器 JS。引入 countdown.pug 時請引入。
    countdown: './src/js/countdown.js',
    // 開頭列 JS。預設引入。
    header: './src/js/header.js',
    // 延後載入 JS。預設引入。
    lazyload: './src/js/lazyload.js',
    // 回到 TOP 的 JS。預設引入。
    top: './src/js/top.js'
  },
  // chunks 不必，也不要引入預設引入的項目。
  // 如果沒有須引入的 chunks，就不要加這項。
  pages: [
    // 首頁
    {
      page: 'index',
      chunks: [
        'countdown'
      ]
    },
    { page: 'about' }, // About
    { page: 'epf/login' }, // 學習歷程檔案 - 登入
    { page: 'epf/upload' }, // 學習歷程檔案 - 上傳
    { page: 'epf/request' }, // 學習歷程檔案 - 認證
    { page: 'epf/explain' }, // 多元表現說明
    { page: 'epf/others' }, // 其他資料用處
    { page: 'doc/compress_pdf' }, // 文件掃描／轉檔 - 壓縮 PDF
    { page: 'doc/compress_img' }, // 文件掃描／轉檔 - 壓縮圖片
    { page: 'doc/concatenate_imgs' }, // 文件掃描／轉檔 - 合併多張圖片
    { page: 'doc/convert' }, // 文件掃描／轉檔 - Word/PPT 轉檔
    { page: 'doc/scan' }, // 文件掃描／轉檔 - 文件掃描
    { page: 'school/add' }, // 申請學校 - 新增學校
    { page: 'school/manage_data' } // 申請學校 - 管理備審資料
    // { page: 'school/manage_works' } // 申請學校 - 管理成品區
  ]
}
