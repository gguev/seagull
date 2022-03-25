import React, { Fragment } from 'react';
import EmbedContainer from '../EmbedContainer/EmbedContainer';
import YouTubeVideoCard from '../YouTubeVideoCard/YouTubeVideoCard';


const YouTubeVideoList = (props) => {
    return (
        <Fragment>
        {
            props.videos.length === 0
            ?
            <h3>Not available :(</h3>
            :
            props.videos.map((video) => {
                return (
                    <EmbedContainer key={ video.id }>
                        <YouTubeVideoCard key={ video.id } video={ video } />
                    </EmbedContainer>                       
                );
            })
        }               
        </Fragment>            
    );
}

export default YouTubeVideoList;