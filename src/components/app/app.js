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
            logics:[[null, null, null],[null, null, null],[null, null, null]],
        }
        this.onFieldClick = this.onFieldClick.bind(this);
    }
    onFieldClick(e){
       
        this.setState(({logics})=> {
            const newArr = logics.slice();
            let elem = e.target;
            
            let elemIdx1 = Number(elem.id[0]);
            let elemIdx2 = Number(elem.id[1]);

            if(isNaN(elemIdx2)){
                elemIdx2 = elemIdx1;
                elemIdx1 = 0;
            }

            newArr[elemIdx1][elemIdx2] = 1;              
           
            return {
                logics: newArr
            }
        });

    }
    
    render(){
        return(
            <div className='base'>
                <Header/>
                <Field 
                logics={this.state.logics}
                onFieldClick={this.onFieldClick}/>
                <Result/>
                <TryAgain/>
            </div>
        )
    }
    
}



  