import React, { Component } from 'react';
import Image from "../../Component/Images/cetteup-Geh-r9A4RBg-unsplash.jpg"
import ImageSVG from "./HomeSVG"
import Animated from "../../Component/Images/construction.svg"
class Home extends Component {
    render() {
        return (
            <div className="HomeBase">
                <section>
                    <h1>New York City</h1>
                    <h3>Contractor and Jobs Listings</h3>
                    <p></p>
                </section>
                <section>
                    <img src={Animated} width="90%" height="auto"/>
                </section>
            </div>
        );
    }
}

export default Home;