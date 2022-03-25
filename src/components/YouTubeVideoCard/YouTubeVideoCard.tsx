import React, { Fragment } from 'react';
import ShadowDomWrapper from '../ShadowDomWrapper/ShadowDomWrapper';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import { styles } from './YouTubeVideoCard.styles';

const YouTubeVideoCard = (props) => {

    return (
        <ShadowDomWrapper styles={ styles }>
            <Fragment>
                <link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css" />
                <script src="node_modules/lite-youtube-embed/src/lite-yt-embed.js"></script>
                <div className="card">
                    <div className="card-title margin-btm mt-2">
                        <div className="container">
                            <h3>{ props.video.title }</h3>        
                        </div>
                    </div>

                    <div className="card-body text-center">
                        <div className="video-wrapper">
                            <LiteYouTubeEmbed 
                                id={ props.video.id } 
                                title={ props.video.title } 
                                activatedClass="lyt-activated"
                                playerClass="lty-playbtn"
                                wrapperClass="yt-lite"
                                aspectHeight={ 7 }
                            />
                        </div>
                    </div>

                    <div className="card-text text-muted mb-2">
                        <div className="container">
                            <h6>{ props.video.channel.name } | Uploaded { props.video.uploadedAt }</h6>      
                        </div>                    
                    </div>         
                </div>
            </Fragment>                
        </ShadowDomWrapper>
    );
}

export default YouTubeVideoCard;