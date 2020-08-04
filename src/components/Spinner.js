import React from 'react'; 
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className='ui active dimmer position'>
            <div className='ui big text loader'>
                {props.loadText}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    loadText: 'Loading...'
}

export default Spinner;