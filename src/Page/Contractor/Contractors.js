import React, { Component } from 'react';
import axios from "axios"
class Contractors extends Component {
    constructor(){
        super()
        this.state = {
            contractors:[]
        }
    }
    componentDidMount(){
        const url = `https://whispering-bayou-30290.herokuapp.com/api/contractor/`;
        axios
        .get(url)
        .then( results=>{
            let arrayUniqueByKey = [...new Map(results.data.map(item =>
                [item["conLicense"], item])).values()];
            this.setState({contractors:arrayUniqueByKey})
        console.log(results.data)
        console.log(arrayUniqueByKey)
    })
    }

    render() {
        if (this.state.contractors.length !== 0){
            return (
                <div className="ContractorListing">
                    {this.state.contractors.map(item=>(<div>
                        <ul>
                    <li>{item.conFirstName} {item.conLastName}</li>
                    <li>{item.conLicense}</li>
                        </ul>
                    </div>))}
                </div>
            );
        }else {
            return (
                <div>
                    Not Loaded
                </div>
            );
        }
       
    }
}

export default Contractors;