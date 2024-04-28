// background.js 파일
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {cancel: details.url.indexOf("naver.me, playenrty.org/uploads") != -1};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );
  