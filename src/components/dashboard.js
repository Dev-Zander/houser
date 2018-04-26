import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Header from './header';
import axios from 'axios';
import deleteIcon from '../styles/delete_icon.png';



class Dashboard extends Component {

    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            houses: [],
            error: '',
            filter: 0,
            inputNum: 0

        }

    }



    componentDidMount() {
        axios.get('/api/gethouses').then(res => {
            console.log(res.data)
            this.setState({
                houses: res.data
            })

        }).catch(res => {
            this.setState({
                error: 'No Listing Avaliable'
            })
        })
    }

    moveNumber() {
        this.setState({
            filter: this.state.inputNum,
            inputNum: 0
        })

    }
    deleteProperty(e){
        axios.delete(`/api/deleteproperty/${e}`).then(res =>{
            this.props.history.push(`/dashboard`)
        }).catch(res =>{
            console.log(res)
        })
    
    }

    filterHandler(e) {
        this.setState({
            inputNum: e.target.value
        })

    }

    resetHandler() {
        this.setState({
            filter: 0
        })
    }
    render() {
       
        const house = this.state.houses.map((element, index) => {
            if (element.desired_rent > this.state.filter) {
                return (
                    <div key={index} className="junk-box">

                        <img alt="property" className="image-dashboard" src={element.img_url} />
                       
                        <div className="dashboard-name">
                            <p className="name-bold">{element.property_name}</p>
                            <p className="desc">{element.property_description}</p>
                        </div>
                        <div className="info-text"> 
                        <img alt="delete-icon" onClick={()=>{this.deleteProperty(element.id)}} className="delete" src={deleteIcon}/>
                            <p>Loan: {element.loan_amount}</p>
                            <p>Monthly Mortgage: {element.monthly_mortgage}</p>
                            <p>Recommended Rent: {element.monthly_mortgage *1.25}</p>
                            <p>Desired Rent: {element.desired_rent}</p>
                            <p>Address: {element.address}</p>
                            <p>City: {element.city}</p>
                            <p>State: {element.state}</p>
                            <p>Zip: {element.zipcode}</p>
                        </div>
                    </div>
                )
            }
        }


        )

        return (

            <div>

                <Header />
                <div className="dash-container">
                    <div className="main">
                        <div className="main-box-dashboard">

                            <div className="add-property"><Link className="links" to="/listingpage1">Add new property</Link></div>
                            <div className="dashboard-text">List properties with "desired rent" greator than: $
                <input onChange={(e) => { this.filterHandler(e) }} value={this.state.inputNum} className="price-input"></input>
                                <div className="dashboard-buttons">
                                    <div onClick={() => { this.resetHandler() }} className="dashboard-reset">Reset</div>
                                    <div onClick={() => { this.moveNumber() }} className="dashboard-filter">Filter</div>
                                </div>
                                <div className="dashboard-pagebreak"></div>
                                <div className="dashboard-title">Home Listings</div>
                                <div className="listing">{house}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Dashboard