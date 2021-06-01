import React from 'react';
import Header from '../header/header.js';
import Field from '../field/field.js';
import Result from '../result/result.js';
import TryAgain from '../tryAgain/tryAgain';


import './app.css';

const App =() => {
    return(
        <div className='base'>
            <Header/>
            <Field/>
            <Result/>
            <TryAgain/>
        </div>
    )
}
export default App;


  