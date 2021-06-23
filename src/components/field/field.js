import React, {Component} from 'react';

import './field.css';

export default class Field extends Component {
   

render(){
    const {logics, onFieldClick} = this.props;
    let elements;
    
    elements = logics.map((item, idx)=> {
        item = item.map((itemTwo, idxTwo)=>{
            let keyValue = idx * 10 + idxTwo;
            if(itemTwo === 0){
            
                return <td key={keyValue} id={keyValue}>0</td>;
            }else if(itemTwo === 1){
            
                return <td key={keyValue} id={keyValue}>X</td>;
            } 
            return <td key={keyValue} id={keyValue}></td>;
        });
        return <tr key={idx} id={idx}>{item}</tr>;
    });
    
       
        return (
         <>
                <table 
                onClick={onFieldClick}
                className="tables"
                >
                <tbody >
                {elements}
                </tbody>
                </table>
            </>
        )
    }
        
}

  

