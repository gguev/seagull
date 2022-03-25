import React, { Fragment, useState } from 'react';
import Loader from '../Loader/Loader';
import ReviewsCollection from '../ReviewsCollection/ReviewsCollection';
import ShadowDomWrapper from '../ShadowDomWrapper/ShadowDomWrapper';

import { styles } from './ReviewsContainer.styles';


const ReviewsContainer = () => {
    const [productData, setProductData] = useState(null);
    
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        setProductData(message);
        return true;
    })

    return (
        <ShadowDomWrapper styles={ styles }>
            <Fragment>
            {
                !productData
                ?
                <div className="container text-center">
                    <Loader />    
                </div>
                :
                <ReviewsCollection productData={ productData } />            
            }      
            </Fragment>               
        </ShadowDomWrapper>
    );
} 

export default ReviewsContainer;
