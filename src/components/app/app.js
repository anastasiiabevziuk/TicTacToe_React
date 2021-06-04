import React, {Component} from 'react';
import Header from '../header/header.js';
import Field from '../field/field.js';
import Result from '../result/result.js';
import TryAgain from '../tryAgain/tryAgain';


import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            logics:[[0, null, null],[0, 1, null],[null, null, null]],
        }
    }
    render(){
        return(
            <div className='base'>
                <Header/>
                <Field logics={this.state.logics}/>
                <Result/>
                <TryAgain/>
            </div>
        )
    }
    
}



  