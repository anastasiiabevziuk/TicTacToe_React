import React, {Component} from 'react';

import './field.css';


/*function draw (arr){
   
    for(let i =0; i<3; i++){
        for(let k =0; k<3; k++){
           
        }
    }
}*/

export default class Field extends Component {
   
render(){
    const {logics} = this.props;
    let elements;
    //let elementsTwo;
    //let elementsThree;
    
    elements = logics.map((item)=> {
        item.map((i)=>{
            if(i === 0){
            
                return 'O';
            }else if(i === 1){
            
                return 'X';
            } return "";
        });
        return item;
    });
       /* elements = logics[0].map((item) => {
            if(item === 0){
                
                return 'O';
            }else if(item === 1){
            
                return 'X';
            } return "";
        });
        elementsTwo = logics[1].map((item) => {
            if(item === 0){
                
                return 'O';
            }else if(item === 1){
            
                return 'X';
            } return "";
        });
        elementsThree = logics[2].map((item) => {
            if(item === 0){
                
                return 'O';
            }else if(item === 1){
            
                return 'X';
            } return "";
        });*/
    
       
        return (
         <>
                <table className="tables">
                <tbody>
                    <tr>
                        <td>{elements[0][0]}</td>
                        <td>{elements[0][1]}</td>
                        <td>{elements[0][2]}</td>
                            
                    </tr>
                    <tr>
                        <td>{elements[1][0]}</td>
                        <td>{elements[1][1]}</td>
                        <td>{elements[1][2]}</td>
                    </tr>
                    <tr>
                        <td>{elements[2][0]}</td>
                        <td>{elements[2][1]}</td>
                        <td>{elements[2][2]}</td>
                    </tr>
                </tbody>
                </table>
            </>
        )
    }
        
}

  

