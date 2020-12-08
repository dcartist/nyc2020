import React, { Component } from 'react';
import Image from "../../Component/Images/cetteup-Geh-r9A4RBg-unsplash.jpg"
import ImageSVG from "./HomeSVG"
import Animated from "../../Component/Images/construction.svg"
import { Divider } from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <div className="HomeBase">
                <section className="HomeLeftSide">
                    <h1>New York City</h1>
                    <h3>Contractor and Jobs Listings</h3>
                    <hr></hr>
                    <p>Construction job applications submitted through the Borough Offices, through eFiling, or through the HUB from 2000 to 2019.</p>
                </section>
                <section>
                    <img src={Animated} width="85%" height="auto" alt="Animated SVG of contruction"/>
                </section>
            </div>
        );
    }
}

export default Home;