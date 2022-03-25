export const isValidTab = (tab) => {
    if (tab.url.includes('amazon') || tab.url.includes('netflix') || tab.url.includes('steam')) {
        return true
    } else {
        return false
    }
}

export const range = (start, end) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
}

const createSubArray = (arr, start, end?) => {
    let newArr = [];

    if (!end) {
        end = arr.length;
    }

    for (let i = start; i <= end; i++) {
        newArr.push(arr[i])
    }

    return newArr;
}




export const parseProductTitle = (title) => {
    const parsedProductTitle = title.replace(/on Steam|on GOG.com|Download and Buy Today|Download and Play for Free|- Epic Games Store|Pre-purchase|Pre-order|Pre-Purchase|Pre-Order|Pre-Purchase and Pre-Order|- FitGirl Repacks|-\d+%|\|/g, '').trim();

    return parsedProductTitle;
}


export const getVideoElDomPath = (hostOrigin, elID) => {
    switch (hostOrigin) {
        case 'Steam':
            return document.querySelector("#tabletGrid > div.page_content_ctn > div.review_ctn > div > div:nth-child(1) > div").shadowRoot.querySelector(`#${ elID }`);
    
        case 'GOG': 
            return document.querySelector("body > div.layout.ng-scope > div.layout-container.hide-when-content-is-expanded.ng-scope > div:nth-child(3) > div").shadowRoot.querySelector(`#${ elID }`)

        case 'Epic':
            return document.querySelector("#dieselReactWrapper > div > div > main > div > div > div > div > div > div:nth-child(3) > div > div > div > span:nth-child(1) > div > div:nth-child(1) > div").shadowRoot.querySelector(`#${ elID }`);

        case 'FitGirl':
            return ;

            default:
            break;
    }
}

export const extractHostOrigin = (url) => {
    if (url.includes('steam')) return 'Steam';
    if (url.includes('gog.com')) return 'GOG';
    if (url.includes('epicgames')) return 'Epic';
    if (url.includes('fitgirl-repacks.site')) return 'FitGirl';
}

export const scrollJustAbove = (el, hostOrigin) => {
    let margin;

    if (hostOrigin == 'Steam') margin = 20;
    if (hostOrigin == 'GOG') margin = 30;
    if (hostOrigin == 'Epic') margin = 15;

    let dims = el.getBoundingClientRect();
    window.scrollTo(window.scrollX, dims.top - margin);
}






