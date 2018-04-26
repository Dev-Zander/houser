import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/style.css';
import Header from './header';
import active from '../styles/step_active.png';
import inactive from '../styles/step_inactive.png';
import complete from '../styles/step_completed.png';
import {updatePhoto} from '../ducks/reducer';
import { clearCurrentState } from '../ducks/reducer';



class L3 extends Component {
    


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
                                Step 3
                </div>


                            <div className="status">
                                <img alt="complete" className="circles" src={complete} />
                                <img alt="complete" className="circles" src={complete}/>
                                <img alt="active" className="circles" src={active} />
                                <img alt="inactive" className="circles" src={inactive} />
                                <img alt="inactive" className="circles" src={inactive} />
                            </div>
                            {this.props.photo === '' ?
                            <div className="image-box">
                            Preview
                            </div> :
                            <div>
                            <img alt="property" className="image-box" src={this.props.photo}/>
                            </div> }

                            <div className="page-text">
                                Image URL
                </div>
                            <input onChange={(e)=>{this.props.updatePhoto(e.target.value)}} value={this.props.photo} className="input"></input>
                
                            <div className="previous-button2">
                <Link className="links1" to="/listingpage2">
                Previous Step</Link></div>

                 <div className="next2-button">
                <Link className="links1" to="/listingpage4">
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
        photo: state.photo
    }
}

export default connect(mapStateToProps,{updatePhoto,clearCurrentState})(L3)