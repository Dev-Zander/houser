import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/style.css';
import Header from './header';
import active from '../styles/step_active.png';
import inactive from '../styles/step_inactive.png';
import complete from '../styles/step_completed.png';
import { updateAddress } from '../ducks/reducer';
import { updateCity } from '../ducks/reducer';
import { updateState } from '../ducks/reducer';
import { updateZip } from '../ducks/reducer';
import { clearCurrentState } from '../ducks/reducer';

class L2 extends Component {
    


    render() {
        return (
            <div>
                <Header />
                <div className="dash-container">
                    <div className="main">
                        <div className="main-box-dashboard">
                            <div className="new-listing">
                                Add new listing
                </div>
                <Link to="/dashboard"><button className="cancel-button" onClick={()=>{this.props.clearCurrentState()}}> Cancel</button></Link>
                            <div className="step-text">
                                Step 2
                </div>


                            <div className="status">
                                <img alt="complete" className="circles" src={complete} />
                                <img alt="active" className="circles" src={active} />
                                <img alt="inactive" className="circles" src={inactive} />
                                <img alt="inactive" className="circles" src={inactive} />
                                <img alt="inactive" className="circles" src={inactive} />
                            </div>

                            <div className="page-text">
                                Address
                </div>
                            <input onChange={(e)=>{this.props.updateAddress(e.target.value)}} value={this.props.address} className="input"></input>
                            <div className="city-text">
                                City
                </div>
                            <input onChange={(e)=>{this.props.updateCity(e.target.value)}} value={this.props.city} className="input3"></input>
                            <div className="state-text">
                                State
                </div>
                            <input onChange={(e)=>{this.props.updateState(e.target.value)}} value={this.props.state} className="input2"></input>
                            <div className="zipcode-text">
                                Zipcode
                </div>
                            <input onChange={(e)=>{this.props.updateZip(e.target.value)}} value={this.props.zip} className="input4"></input>
                            <div className="previous-button2">
                <Link className="links1" to="/listingpage1">
                Previous Step</Link></div>

                 <div className="next2-button">
                <Link className="links1" to="/listingpage3">
                Next Step</Link></div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps,{updateAddress,updateCity,updateState,updateZip, clearCurrentState})(L2)