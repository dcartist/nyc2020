import React, { Component } from 'react';
import Image from "../../Component/Images/cetteup-Geh-r9A4RBg-unsplash.jpg"
import ImageSVG from "./HomeSVG"
import Animated from "../../Component/Images/construction.svg"
import {Link} from "react-router-dom"
import { Divider } from 'semantic-ui-react'

class Home extends Component {
    render() {
        const divBackground={
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/umit-yildirim-9OB46apMbC4-unsplash.jpg)`
        }
        const JobsdivBackground={
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/neonbrand-j86QX1TMNaw-unsplash.jpg)`
        }
        return (
            <div className="HomeBase">
                <section className="HomeFullNoParallax HomeLeftSide">
                    <h1>New York City</h1>
                    <h3>Contractor and Jobs Listings</h3>
                    <hr></hr>
                    <p>Construction job applications submitted through the Borough Offices, through eFiling, or through the HUB from 2000 to 2019.</p>
                    <img src={Animated} width="75%" height="auto" alt="Animated SVG of contruction"/>
                </section>
                {/* <section className="HomeRightSide">
                    <img src={Animated} width="96%" height="auto" alt="Animated SVG of contruction"/>
                </section> */}
                <div>
                    
                </div>
                <section className="HomeFull" style={divBackground}>
                    <div className="HomeContractor">
                        <h2>Search Contractors</h2>
                        <p> Search through more than 500 contractors who have filed construction job applications submitted through the New York Borough Offices.</p>
                        <Link to="/Contractors"><button>Click here</button></Link>
                    </div>
                    
                </section>
                <div className="ShadowsFull">
                    
                <section className="HomeLeftHalf" style={JobsdivBackground}>
                <div className="HomeContractor">
                <h2>Search Jobs</h2>
                <p>View the job applications that were submitted through the the New York Borough Offices.</p>
                       <Link to="/jobs">
                       <button>Click here</button>
                       </Link>
                       </div>
               </section>
                </div>
             
            </div>
        );
    }
}

export default Home;