console.log('hello')
<<<<<<< HEAD
chrome.tabs.create({ url: 'http://google.com' }, function (data) {
=======
window.chrome.tabs.create({ url: 'http://google.com' }, function (data) {
>>>>>>> master
    console.log(data);
})