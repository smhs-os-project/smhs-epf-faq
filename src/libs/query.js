/**
 * 原生選擇器的封裝。
 *
 * @param {string} elem 網頁元素選擇器
 * @return {Object}
 * - 如果 elem 的前綴是 `#`: 只回傳唯一符合元素 (HTMLElement)
 * - 其餘: 回傳所有符合元素 (HTMLElement[])
 */
function $$ (elem) {
  return ((elem[0] === '#') ? document.getElementById(elem.substr(1)) : document.querySelectorAll(elem))
}

module.exports = {
  $$
}
