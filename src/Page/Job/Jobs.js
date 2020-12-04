import React, { Component } from 'react';
import axios from "axios"

class Jobs extends Component {
    constructor(){
        super()
        this.state={
            jobs:[],
            results:[]
        }
    }
    componentDidMount(){
        const url = `https://whispering-bayou-30290.herokuapp.com/api/property`;
        axios.get(url).then(results=>{
            console.log(results.data)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Jobs;