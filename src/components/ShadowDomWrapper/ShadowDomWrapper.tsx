import React, { Fragment } from 'react';
import root from 'react-shadow';
import BootstrapCDN from '../BootstrapCDN/BootstrapCDN';

const ShadowDomWrapper = (props) => {
    return (
        <Fragment>
            <root.div>
                <BootstrapCDN />
                { props.children } 
                
                <style>{ props.styles }</style>                    
            </root.div>
        </Fragment>
    );
}

export default ShadowDomWrapper;