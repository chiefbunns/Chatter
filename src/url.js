
export function getPageUrl() {
    if (process.env.NODE_ENV === "production") return new Promise(resolve => window.chrome.tabs.getSelected(null, tab => resolve(tab.url)))
    else return Promise.resolve(window.location.href);
}


