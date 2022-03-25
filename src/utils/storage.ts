export function setStoredOptions(options): Promise<void> {
    const vals = {
        options,
    }

    return new Promise((resolve) => {
        chrome.storage.local.set(vals, () => {
            resolve()
        })
    })
}


export function getStoredOptions() {
    const keys = ['options'];

    return new Promise((resolve) => {
        chrome.storage.local.get(keys, (res) => {
            resolve(res.options ?? []);
        })
    })
}
