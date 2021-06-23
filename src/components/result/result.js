import React, {Component} from 'react';

import './result.css';


export default class Result extends Component {

    constructor(props){
        super(props);
        this.state = {
            result: 'start',
            
        }
    }
      static getDerivedStateFromProps(props, state) {
        const {logics, player} = props;
        const playerOSimbol = 0; 
        const playerXSimbol = 1; 
        let countColumn = 0;
        let countFirstCross = 0;
        let countSecondCross = 0;
        let countRow = 0;
        let countMax = 3;
        let playerSimbol = null;
        let res = '';
        let nextPlayers = '';

        let isGameOver = true;
        
        if(state.result === "player № 2 is winner" || state.result === "player № 1 is winner" ){
            return {
                result: "Game over!",
            };
        }
        if(player === false || player === null){
            res = "player № 2 is winner";
            nextPlayers = "player № 1 - next move ";
            playerSimbol = playerXSimbol;
        } else {
            res = "player № 1 is winner";
            nextPlayers = "player № 2 - next move ";
            playerSimbol = playerOSimbol;
        }
        for(let i=0; i < logics.length; i++){
            for(let j = 0; j < logics.length; j++){ 
                if(logics[i][j] === playerSimbol){
                    countRow++;
                    if(countRow === countMax){
                        return {
                            result: `${res}`,
                        };
                    } 
                }
                
                if(logics[j][i] === playerSimbol){
                    countColumn++;
                    if(countColumn === countMax){
                        return {
                            result: `${res}`,
                        };
                    }
                    
                } else if (logics[j][i] === null) {
                    isGameOver = false;
                } 
            }
            countRow = 0;
            if(logics[i][i] === playerSimbol ){
                countFirstCross++;
                if(countFirstCross === countMax){
                    return {
                        result: `${res}`,
                    };
                }
            } 
            if(logics[i][logics.length-1 - i] === playerSimbol){
                countSecondCross++;
                if(countSecondCross === countMax){
                    return {
                        result: `${res}`,
                    };
                } 
            }
            countColumn = 0;
        }
        if(isGameOver){
            return {
                result: "Game over!",
            };
        }
        
        return {
            result: `${nextPlayers}`,
        };
    }

     render(){
        
        return (
            <div className="result">
                <p>Process: {this.state.result}</p>
            </div>
        )
    }
}
