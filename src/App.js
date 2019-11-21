import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Inicio from './components/UI01_Inicio';
import Navbar from './components/NavBar';
import Login from './components/Login.js';
import NoLogin from './components/NoLogin.js';
import Productos from './components/UI02_Productos.js';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Inicio} />
            <Route path="/Login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    )
  }    
}
  
export default App;