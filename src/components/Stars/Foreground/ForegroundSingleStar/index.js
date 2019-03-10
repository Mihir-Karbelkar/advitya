import React, {Component} from 'react';
import './ForegroundSingleStar.css';
class ForegroundSingleStar extends Component {
    constructor(props) {
        super(props);
        this.num = props.num;
    }

    render() {
        var cl = "ForegroundSingleStar-" + this.num + " ForegroundSingleStar";
        return(
            <div className={cl}>
                <div className="ForegroundSingleStarHorizontalFlare"></div>
                <div className="ForegroundSingleStarVerticalFlare"></div>
                <div className="ForegroundSingleStarCore"></div>
            </div>
        );
    }
}

export default ForegroundSingleStar;