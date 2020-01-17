/* global location, history */

/**
 * Clean up all the specified track queries.
 * @author pan93412
 */
document.addEventListener('DOMContentLoaded', () => (function (queries = []) {
  const url = (new URL(location.href))
  const urlParams = url.searchParams
  let isCleaned = 0
  for (const q of queries) {
    if (urlParams.has(q)) {
      isCleaned = 1
      urlParams.delete(q)
    }
  }
  if (isCleaned) {
    console.warn('We detected track queries! - removed.')
    history.pushState({}, '', url.href)
  }
})(['fbclid']))
