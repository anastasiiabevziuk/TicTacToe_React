import React, {Component} from 'react';

import './tryAgain.css'

export default class TryAgain extends Component {

    render(){

        return (
            <button className="button"
            onClick={this.props.onClear}>Try Again</button>
        );
    }
}


    
