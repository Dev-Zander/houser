import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from '../src/components/header';
import Login from '../src/components/login';
import Dashboard from '../src/components/dashboard';
import ListingPage1 from '../src/components/add_listing_1';
import ListingPage2 from '../src/components/add_listing_2';
import ListingPage3 from '../src/components/add_listing_3';
import ListingPage4 from '../src/components/add_listing_4';
import ListingPage5 from '../src/components/add_listing_5';


export default (

    <HashRouter>
        <div>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/header' component={Header} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/listingpage1' component={ListingPage1} />
            <Route path='/listingpage2' component={ListingPage2} />
            <Route path='/listingpage3' component={ListingPage3} />
            <Route path='/listingpage4' component={ListingPage4} />
            <Route path='/listingpage5' component={ListingPage5} />
            </div>
    </HashRouter>
)