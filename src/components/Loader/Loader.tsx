import React from 'react';
import { TailSpin } from 'react-loading-icons';

const Loader = () => {
    return (
    <div className="my-2">
        <TailSpin 
            height="5em"
            stroke="#DC2430"
            speed="1"
            fillOpacity="1"
            strokeOpacity="1"
            strokeWidth="2"
        />        
    </div>

    );
}

export default Loader;