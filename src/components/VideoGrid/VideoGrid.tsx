import React, { Fragment } from 'react';
import VideoGridCard from '../VideoGridCard/VideoGridCard';

const VideoGrid = (props) => {
    return (
        <Fragment>
            <div className="row row-cols-3 g-4">
            {
                props.videos.length === 0
                ?
                <h3>No videos available :(</h3>
                :
                props.videos.map((video) => {
                    return (
                        <div className="col">
                            <VideoGridCard key={ video.id } video={ video } />
                        </div>
                    );
                })
            } 
            </div>
        </Fragment>
    );
};

export default VideoGrid;                

