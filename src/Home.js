import React, { Component } from 'react';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Navigation from './Contain/Navigation';
class Home extends Component{
    render(){
        return(
          <div>
            <Router >
                <div className="row">                 
                  <Navigation/>
                    <Switch>
                    {/* <Route exact path="/"component={UserProfile}/>
                     <Route exact path="/Photo" component={Photo}/>
                     <Route exact path="/ToDo" component={ToDo}/> */}
                  </Switch>               
               </div>
            </Router>
           </div>
        );
    }
}

export default Home;
