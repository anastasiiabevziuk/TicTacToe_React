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
        this.onClear = this.onClear.bind(this);
        this.player = null;
        
    }

    registerObserver(observer) {
        this.observer = observer;
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
           
            if(newArr[elemIdx1][elemIdx2] !== null ){
                return alert("This button is busy");

            }
            
            if(this.player){
                newArr[elemIdx1][elemIdx2] = 1;    
                 this.player = false;
            } else { 
                newArr[elemIdx1][elemIdx2] = 0;    
                this.player = true;
           
            }

           
           
            return {
                
                logics: newArr,

            }
        });

    }

    onClear(){
        this.setState({ logics:[[null, null, null],[null, null, null],[null, null, null]] });
          return this.player = null;
    }
    
    render(){
        return(
            <div className='base'>
                <Header/>
                <Field 
                logics={this.state.logics}
                onFieldClick={this.onFieldClick}/>
                <Result logics={this.state.logics}
                player={this.player}/>
                <TryAgain
                onClear={this.onClear}/>
            </div>
        )
    }
    
}



  