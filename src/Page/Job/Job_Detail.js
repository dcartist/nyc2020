import React, { Component } from 'react';
import axios from "axios"
import Map from "../../Component/Map/Map"
class Job_Detail extends Component {
    constructor(){
        super()
        this.state = {
            job:[],
            results:[]
        }
    }
    componentDidMount(){
        const url = `https://whispering-bayou-30290.herokuapp.com/api/job/id/`+this.props.match.params.jobId;
        axios.get(url).then(
            results=>{
                this.setState({results: results.data})
                console.log(results.data)
            }
        )
    }
    render() {
        if(this.state.results.length !== 0){
            return (
                <div>
                    {this.state.results.map((item, index)=>(<div key={index}>
                        {item.contractor.conLicense}
                        {item.owner.ownType}
                        <Map newLocation ={item.property.address}></Map>
                    </div>))}
                </div>
            );
        } else{
            return (
                <div>
                    
                </div>
            );
        }
    }
}

export default Job_Detail;