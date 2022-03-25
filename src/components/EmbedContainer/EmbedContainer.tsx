import React, { Fragment } from 'react';

const EmbedContainer = (props) => {
    return (  
    <Fragment>
        <div className="row mb-5">
            <div className="col">
                { props.children }      
            </div>
        </div> 
    </Fragment>
    );
}

export default EmbedContainer;