import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="AboutSection">             
<h1>
 NYC Construction App
</h1>
<p>This app is based of Mongo/Express Project: NYC Contract Job Application.</p>
<h2>Technology Used</h2>
<ul>
    <li>Node</li>
    <li>Javascript</li>
    <li>React JS</li>
    <li>Axios</li>
    <li>Express</li>
    <li>Mongo</li>
    <li>Semantic UI</li>
    <li>CSS</li>
    <li>Vercel (Front-End)</li>
    <li>Heroku (Back-End)</li>
</ul>


<h3> Current Project:</h3> 
<p><a rel="noopener noreferrer" href="https://github.com/dcartist/nyc2020" target="_blank">https://github.com/dcartist/nyc2020</a></p>

<h3> Previous Project (2019) Github:</h3> <p><a rel="noopener noreferrer" href="https://github.com/dcartist/nycConstructionApp" target="_blank">https://github.com/dcartist/nycConstructionApp</a>
</p>
<h3>This is pulling the data from:</h3>
<p><a  rel="noopener noreferrer" href="https://whispering-bayou-30290.herokuapp.com/api/property" target="_blank"> https://whispering-bayou-30290.herokuapp.com/api/property</a></p>
<p className="textDesign">
This dataset contains all construction job applications submitted through the Borough Offices, through eFiling, or through the HUB, which have a "Latest Action Date" since January 1, 2000.This dataset contains all job applications submitted through the Borough Offices, through eFiling, or through the HUB, which have a "Latest Action Date" since January 1, 2000.
</p>

            </div>
        )
    }
}
