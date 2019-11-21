import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Login from './Login';
import Productos from './UI02_Productos';

import logo from '../media/logo.png';

import '../styles/navbar.css'

class Inicio extends Component {

    render(){
        return(
            <div>
                <header>
                    <img src={logo}></img>
                </header>
                <nav className="navbar">
                    <ul>
                        <li><Link to="./UI01_Inicio.js"> Inicio </Link></li>
                        <li><Link to="./UI02_Productos.js"> Menú </Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Inicio;