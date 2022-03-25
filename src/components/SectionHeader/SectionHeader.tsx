import React, { Fragment } from 'react';
import ShadowDomWrapper from '../ShadowDomWrapper/ShadowDomWrapper';

import { styles } from './SectionHeader.styles';

const SectionHeader = (props) => {
    return (
        <ShadowDomWrapper styles={ styles }>
            <Fragment>
                <div className="card my-3">
                    <h2 className="ps-2 pt-2">{ props.productTitle } { props.headerTitle }</h2>    
                </div>            
            </Fragment>            
        </ShadowDomWrapper>
    );
};

export default SectionHeader;