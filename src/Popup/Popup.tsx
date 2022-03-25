import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import BootstrapCDN from '../components/BootstrapCDN/BootstrapCDN';
import { getStoredOptions, setStoredOptions } from '../utils/storage';

import './Popup.styles.css';

const Popup = () => {
    const [listBtnActive, setListBtnActive] = useState(false);
    const [gridBtnActive, setGridBtnActive] = useState(false);

    getStoredOptions().then((res) => {
        if (res == 'list') {
            setListBtnActive(true);
        }
        if (res == 'grid') {
            setGridBtnActive(true);
        }   
    });
    
    const listEl = useRef(null);
    const gridEl = useRef(null);
    
    const toggleList = (e) => {
        setStoredOptions('list');
        setGridBtnActive(false);
        setListBtnActive(true);  
    }

    const toggleGrid = (e) => {
        setStoredOptions('grid')
        setListBtnActive(false);
        setGridBtnActive(true);  
    }

    return (
        <div className="popup">
            <BootstrapCDN />

            <div className="container text-center my-2">
                <div className="row mb-2">
                    <div className="col">
                        <h4>Seagull</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="btn-group">
                            <button onClick={ toggleList } className={ listBtnActive ? 'btn btn-danger' : 'btn btn-light'} ref={ listEl }><i className="bi bi-list"></i> List</button>                           
                            <button onClick={ toggleGrid } className={ gridBtnActive ? 'btn btn-danger' : 'btn btn-light' } ref={ gridEl }><i className="bi bi-grid-fill"></i> Grid</button>   
                        </div>
                    </div>  
                </div>
            </div>
        </div>        
    );
}

export default Popup;

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<Popup />, root);