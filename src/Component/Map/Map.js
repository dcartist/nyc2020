import React, { Component } from 'react';
import './Map.css'

class Map extends Component {
    constructor(props){
        super()
        this.state = {
            newLocation:""
        }
    }
    render() {
        // console.log(this.)
        let nyplace= `${this.props.newLocation}, New York, NY`
        let Location = nyplace.split(" ").join("+");
        
        const mapUrl = encodeURI(
        
          `${process.env.REACT_APP_API_GOOGLE_KEY}${Location}`
         
        );
        console.log(mapUrl);
        return (
          <div>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={mapUrl}
              className="mapDiv"
              title="map"
              
            ></iframe>
          </div>
        );
      }
}

export default Map;