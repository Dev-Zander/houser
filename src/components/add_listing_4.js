import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/style.css';
import Header from './header';
import {Link} from 'react-router-dom';
import active from '../styles/step_active.png';
import inactive from '../styles/step_inactive.png';
import complete from '../styles/step_completed.png';
import {updateLoan} from '../ducks/reducer';
import {updateMortgage} from '../ducks/reducer';
import { clearCurrentState } from '../ducks/reducer';




class L4 extends Component {
    


    render(){
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
                                Step 4
                </div>


                            <div className="status">
                                <img alt="complete" className="circles" src={complete} />
                                <img alt="complete" className="circles" src={complete}/>
                                <img alt="complete" className="circles" src={complete}/>
                                <img alt="active" className="circles" src={active} />
                                <img alt="inactive" className="circles" src={inactive} />
                            </div>

                             <div className="page-text">
                Loan Amount
                </div>
                <input onChange={(e)=>{this.props.updateLoan(e.target.value)}} value={this.props.loan} className="input"></input>
                <div className="page-text">
                Monthly Mortgage
                </div>
                <input onChange={(e)=>{this.props.updateMortgage(e.target.value)}} value={this.props.mortgage} className="input"></input>
               
                
                            <div className="previous-button2">
                <Link className="links1" to="/listingpage3">
                Previous Step</Link></div>

                 <div className="next2-button">
                <Link className="links1" to="/listingpage5">
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
        loan: state.loanAmt,
        mortgage: state.mortgage
    }
}

export default connect(mapStateToProps,{updateLoan,updateMortgage, clearCurrentState})(L4)