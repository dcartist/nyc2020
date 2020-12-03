import React, { Component } from 'react';
import Image from "../../Component/Images/cetteup-Geh-r9A4RBg-unsplash.jpg"
class Home extends Component {
    render() {
        return (
            <div className="HomeBase">
                <section>HoME</section>
                <section className="imageHeight"
					style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/cetteup-Geh-r9A4RBg-unsplash.jpg'})` }}></section>
            </div>
        );
    }
}

export default Home;