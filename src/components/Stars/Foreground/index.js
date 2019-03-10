import React, {Component} from 'react';
import './Foreground.css';
import ForegroundSingleStar from'./ForegroundSingleStar';


class Foreground extends Component {
    constructor(props) {
        super(props);
        this.size = props.size;
    }

    render() {
        if(this.size === 'B')
        {
            return(
            <div className="StarField">
                <ForegroundSingleStar num="1"/>
                <ForegroundSingleStar num="2"/>
                <ForegroundSingleStar num="3"/>
                <ForegroundSingleStar num="4"/>
                <ForegroundSingleStar num="5"/>
                <ForegroundSingleStar num="6"/>
                <ForegroundSingleStar num="7"/>
                <ForegroundSingleStar num="8"/>
                <ForegroundSingleStar num="9"/>
            </div>
            );
        } else {
            return(
                <div className="StarField">
                    <ForegroundSingleStar num="1"/>
                    <ForegroundSingleStar num="2"/>
                    <ForegroundSingleStar num="3"/>
                    <ForegroundSingleStar num="4"/>
                    <ForegroundSingleStar num="5"/>
                    <ForegroundSingleStar num="6"/>
                </div>
            );
        }

    }
}

export default Foreground;