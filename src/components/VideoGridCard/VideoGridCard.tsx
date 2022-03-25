import React, { Fragment, useState } from 'react';
import ShadowDomWrapper from '../ShadowDomWrapper/ShadowDomWrapper';
import Modal from 'react-modal';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import { styles } from './VideoGridCard.styles';
import BootstrapCDN from '../BootstrapCDN/BootstrapCDN';

const VideoGridCard = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <ShadowDomWrapper styles={ styles }>
        <Fragment>
            <div className="card">
                <div className="card-title mt-2 neg-margin">
                    <div className="container">
                        <h6>{ props.video.title }</h6>        
                    </div>
                </div>

                <div className="card-body text-center">
                    <div className="img-wrapper">
                        <img onClick={ openModal } src={ props.video.thumbnail.url } alt="" />                      
                    </div>
                </div>

                <div className="card-text text-muted">
                    <div className="container">
                        <p>{ props.video.channel.name } | Uploaded { props.video.uploadedAt }</p>      
                    </div>                    
                </div>         
            </div>

            <Modal
                isOpen={ modalIsOpen }
                onRequestClose={ closeModal }
                contentLabel="videoGridModal"
                style={ styles }
            >
                <BootstrapCDN />
                <div className="container">
                    <div className="row mb-2">
                        <div className="col text-right">
                            <button className="btn btn-outline-danger" onClick={ closeModal }><i className="bi bi-x-lg"></i></button>
                        </div>
                    </div>  

                    <div className="row">
                        <div className="col text-center">
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
                </div>
            </Modal>
        </Fragment>                
    </ShadowDomWrapper>
    );
}

export default VideoGridCard;