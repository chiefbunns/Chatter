console.log('hello')
window.chrome.tabs.create({ url: 'http://google.com' }, function (data) {
    console.log(data);
})