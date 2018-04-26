import React, { Component } from 'react';
import routes from '../src/routes';
import { connect } from 'react-redux';



class App extends Component {
  render() {
    return (
      <div className="App">
       {routes}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {state}
}
export default connect( mapStateToProps )(App);
