chrome.webRequest.onBeforeRequest.addListener(
  function () { return { cancel: true } },
  { urls: ["https://www.google.com/searchdomaincheck?format=domain&type=chrome"] },
  ['blocking']
)
