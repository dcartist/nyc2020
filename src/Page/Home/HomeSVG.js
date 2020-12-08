import React, { Component } from 'react';
import Animated from "../../Component/Images/construction.svg"
class HomeSVG extends Component {
    render() {
        return (
            <div>
                {/* <object type="image/svg+xml" data={Animated} width="100%" height="100%">svg-animation</object> */}
                <img src={Animated} height="60vh"/>
            </div>
        );
    }
}

export default HomeSVG;