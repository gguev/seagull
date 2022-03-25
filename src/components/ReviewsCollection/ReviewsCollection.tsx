import React, { Fragment } from 'react';
import YouTubeVideoCardCollection from '../YouTubeVideoCardCollection/YouTubeVideoCardCollection';

const ReviewsCollection = (props) => {
    const { title } = props.productData;
    const { reviews, gameplay } = props.productData.sources.youtube;

    return (
        <Fragment>
            <div className="row">
                <div className="col">
                    <YouTubeVideoCardCollection title={ title } reviews={ reviews } gameplay={ gameplay } />       
                </div>   
            </div>
        </Fragment>
    );
}

export default ReviewsCollection;