import React, {Component} from 'react';

//Implementation is in Application.js file.
class HighScore extends Component {

    render() {
        if(this.props.overTen){
            return (
                <h3>Beat high score of 10! &nbsp;
                    <button onClick = {this.props.onReset}>Reset</button>
                </h3>

            )
        }else {
            return null;
        }
       
    }
}

export default HighScore;