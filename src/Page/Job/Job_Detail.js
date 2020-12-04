import React, { Component } from 'react';
import axios from "axios"

class Job_Detail extends Component {
    constructor(){
        super()
        this.state = {
            job:[],
            results:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.jobId)
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