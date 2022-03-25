import { ytSearchVideos } from '../utils/api';
import { setStoredOptions } from '../utils/storage';
import { extractHostOrigin, parseProductTitle } from '../utils/utils';

chrome.runtime.onInstalled.addListener(() => {
    setStoredOptions('list');
});

const urlFilters = {
    url: [
       {
           hostContains: 'store.steampowered',
       },
    //    {
    //        hostContains: 'gog.com'
    //    },
    //    {
    //        hostContains: 'store.epicgames'
    //    },
    //    {
    //        hostContains: 'fitgirl-repacks.site'
    //    }
    ]
}

chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.tabs.get(details.tabId, async (tab) => {
        let productTitle = parseProductTitle(tab.title);

        if (tab.status == 'complete') {
            const reviews = await ytSearchVideos(`${ productTitle } review`);
            const gameplay = await ytSearchVideos(`${ productTitle } gameplay`);
            
            const productData = {
                title: productTitle,
                hostOrigin: extractHostOrigin(tab.url),
                sources: {
                    youtube: {
                        reviews: reviews,
                        gameplay: gameplay
                    }
                }
            }
            
            chrome.tabs.sendMessage(tab.id, productData);        
        }
    })
}, urlFilters)

    
