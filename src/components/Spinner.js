import React from 'react'; 
import './Spinner.css';

const Spinner = ({loadText}) => {
    return (
        <div className='ui active dimmer position'>
            <div className='ui big text loader'>
                {loadText}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    loadText: 'Loading...'
}

export default Spinner;