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
    })
    }

    byName =(event) => {
        event.preventDefault()
        let changedArr = this.state.contractors.sort((a, b) => (a.conLastName > b.conLastName) ? 1 : -1)
        this.setState({contractors: changedArr})

    }
    byId =(event) => {
        event.preventDefault()
        let changedArr = this.state.contractors.sort((a, b) => (a.conLicense > b.conLicense) ? 1 : -1)
        this.setState({contractors: changedArr})

    }

    render() {
        if (this.state.contractors.length !== 0){
            return (<div>
                <button onClick={this.byName}>Change to order</button>
                <button onClick={this.byId}>Change to ID</button>
                <div className="ContractorListing">
                    {this.state.contractors.map(item=>(<div>
                        <ul>
                    <li>{item.conFirstName} {item.conLastName}</li>
                    <li>{item.conLicense}</li>
                        </ul>
                    </div>))}
                </div>
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