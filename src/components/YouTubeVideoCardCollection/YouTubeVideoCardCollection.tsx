import React, { Fragment, useState, useEffect } from 'react';
import { getStoredOptions } from '../../utils/storage';
import SectionHeader from '../SectionHeader/SectionHeader';
import VideoGrid from '../VideoGrid/VideoGrid';
import YouTubeVideoList from '../YouTubeVideoList/YouTubeVideoList';
  

const YouTubeVideoCardCollection = (props) => {
    const { title, reviews, gameplay } = props;
    const [view, setView] = useState(null);

    useEffect(() => {
        getStoredOptions().then((res) => {
            setView(res);
        })
    });

    chrome.storage.onChanged.addListener((changes, _0) => {
        setView(changes.options.newValue)
   });
    

    return (
        <Fragment>
            <div id="videoReviews">
                <SectionHeader productTitle={ title } headerTitle={ 'Reviews' } />
                {
                    view == 'grid'
                    ?
                    <VideoGrid videos={ reviews } />
                    :
                    <YouTubeVideoList videos={ reviews } />  
                }          
            </div>
            <hr className="my-5" />
            <div id="videoGameplay">
                <SectionHeader productTitle={ title } headerTitle={ 'Gameplay' } />
                {
                    view == 'grid'
                    ?
                    <VideoGrid videos={ gameplay } />
                    :
                    <YouTubeVideoList videos={ gameplay } />  
                }
                              
            </div>
        </Fragment>            
    );
}

export default YouTubeVideoCardCollection;