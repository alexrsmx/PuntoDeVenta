import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Inicio from './components/UI01_Inicio.js';
import NavBar from './components/NavBar';
import Login from './components/Login.js';
import NoLogin from './components/NoLogin.js';
import Productos from './components/UI02_Productos.js';

class App extends Component {
  render(){
    return (
      <div>
        <header>
          <NavBar/>
        </header>
      </div>
      /*<BrowserRouter>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/NoLogin" component={NoLogin}/>
        <Route exact path="/Productos" component={Productos}/>
      </BrowserRouter>*/
    )
  }    
}
  
export default App;