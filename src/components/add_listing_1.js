import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/style.css';
import Header from './header';
import active from '../styles/step_active.png';
import inactive from '../styles/step_inactive.png';
import { updateName } from '../ducks/reducer';
import { updateDescription } from '../ducks/reducer';
import { clearCurrentState } from '../ducks/reducer';







class L1 extends Component {



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
                Step 1
                </div>

            
                <div className="status">
<img alt="active" className="circles" src={active}/>
<img alt="inactive" className="circles" src={inactive}/>
<img alt="inactive" className="circles" src={inactive}/>
<img alt="inactive" className="circles" src={inactive}/>
<img alt="inactive" className="circles" src={inactive}/>
                </div>


                
                <div className="page-text">
                Property Name
                </div>
                <input onChange={(e)=>{this.props.updateName(e.target.value)}} value={this.props.name} className="input"></input>
                <div className="page-text">
                Property Description
                </div>
                <input onChange={(e)=>{this.props.updateDescription(e.target.value)}} value={this.props.desc}className="description-input"></input>
                <div className="next-button">
                <Link className="links1" to="/listingpage2">
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
    name: state.propertyName,
    desc: state.description, 
    }
}

export default connect(mapStateToProps, {updateName, updateDescription, clearCurrentState})(L1)