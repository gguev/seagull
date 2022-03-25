import React, { Fragment, useState } from 'react';
import { getVideoElDomPath, scrollJustAbove } from '../../utils/utils';
import Loader from '../Loader/Loader';
import ShadowDomWrapper from '../ShadowDomWrapper/ShadowDomWrapper';

import { styles } from './ReviewsPreviewCard.styles';


const ReviewsPreviewCard = () => {
    const [productData, setProductData] = useState(null);

    chrome.runtime.onMessage.addListener((message, _0, _1) => {
        setProductData(message);
        
        return true;
    })

    const handleScrollTo = (e) => {
        e.preventDefault();

        const videoReviewsEl = getVideoElDomPath(productData.hostOrigin, 'videoReviews');
        const videoGameplayEl = getVideoElDomPath(productData.hostOrigin, 'videoGameplay');

        let selectedLink = e.target.id;

        if (selectedLink == 'videoReviewsLink') {
            videoReviewsEl.scrollIntoView();
            //scrollJustAbove(videoReviewsEl, productData.hostOrigin);  
        }
        
        if (selectedLink == 'videoGameplayLink') {
            //scrollJustAbove(videoGameplayEl, productData.hostOrigin)
            videoGameplayEl.scrollIntoView();
        }
        
        selectedLink = null;
    }

    return (     
        
        <ShadowDomWrapper styles={ styles }>
            <Fragment>
            {
                !productData
                ?
                <Loader />
                :
                <div className="card my-2 me-2">  
                    <div className="card-header py-2">{ productData.title }</div>
                    <div className="card-body">
                        <h6 className="toc-link" id="videoReviewsLink" onClick={ handleScrollTo }>Reviews ({ productData.sources.youtube.reviews.length } videos)</h6>
                        <h6 className="toc-link" id="videoGameplayLink" onClick={ handleScrollTo }>Gameplay ({ productData.sources.youtube.gameplay.length } videos)</h6>
                    </div>
                    <div className="card-footer text-muted">Powered by <a href="https://chrome.google.com/webstore/detail/seagull-add-youtube-revie/egembinjicipjagnleelfdfpejhlchll" target="_blank">Seagull</a></div> 
                </div>                         
            }                
            </Fragment>
        </ShadowDomWrapper>
    );
}

export default ReviewsPreviewCard;

{/* 

<h6 id="videoReviewsLink" onClick={ handleScrollTo }>Reviews</h6>  
<h6 id="videoGameplayLink" onClick={ handleScrollTo }>Gameplay</h6>   


<p className="card-text">

    <small className="text-muted">Powered by <a href="">Seagull</a></small>
</p>   
*/}