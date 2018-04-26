import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import '../styles/style.css';
import Header from './header'
import active from '../styles/step_active.png';
import complete from '../styles/step_completed.png';
import {updateRent} from '../ducks/reducer';
import { clearCurrentState } from '../ducks/reducer';


class L5 extends Component {
    constructor(props){
        super(props)
this.submitNewListing = this.submitNewListing.bind(this)
console.log(this.props, 'props')
    }
    
    clearState(){
       
    }
    submitNewListing(){
        axios.post('/api/newlisting',
        {
            propertyName: this.props.propertyName,
            description: this.props.description,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            loanAmt: this.props.loanAmt,
            mortgage: this.props.mortgage,
            rent: this.props.rent,
            photo: this.props.photo
        }
    )
}


    render(){
        let recommended = this.props.mortgage *1.25

        return(
            <div>

            <Header/>
                <div className="dash-container">
                <div className="main">
                <div className="main-box-dashboard">
                <div className="new-listing">
                                Add new listing
                </div>
                <Link to="/dashboard"><button className="cancel-button" onClick={()=>{this.props.clearCurrentState()}}> Cancel</button></Link>
                            <div className="step-text">
                                Step 5
                </div>
            


                            <div className="status">
                                <img alt="complete" className="circles" src={complete} />
                                <img alt="complete" className="circles" src={complete}/>
                                <img alt="complete" className="circles" src={complete}/>
                                <img alt="complete" className="circles" src={complete}/>
                                <img alt="active" className="circles" src={active} />
                            
                                
                                </div>
                                
                                <div className="Recommended">Recommended Rent ${recommended}</div>

                            <div className="page-text">
                Desired Rent
                </div>
                <input onChange={(e)=>{this.props.updateRent(e.target.value)}} value={this.props.rent}className="input"></input>
                            <div className="previous-button2">
                <Link className="links1" to="/listingpage4">
                Previous Step</Link></div>

                 <div className="button3">
                <Link onClick={()=>{this.submitNewListing()}} className="links3" to="/dashboard">
                Complete</Link></div>

                </div>
                </div>
                </div>


            </div>
        )
    }
}
function mapStateToProps(info){
    return{
        propertyName: info.propertyName,
        description: info.description,
        address: info.address,
        city: info.city,
        state: info.state,
        zip: info.zip,
        loanAmt: info.loanAmt,
        mortgage: info.mortgage,
        rent: info.rent,
        photo: info.photo
    }
    console.log(info)
}

export default connect(mapStateToProps, {updateRent, clearCurrentState})(L5)