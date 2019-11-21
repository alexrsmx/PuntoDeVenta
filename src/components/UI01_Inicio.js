import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Login from './Login';
import Productos from './UI02_Productos';

import logo from '../media/logo.png';

import '../styles/myStyle.css';

class Inicio extends Component {

    render(){
        return(
            <div className="Inicio">
                <header className="Cabecera">
                    <img src={logo} className="AppLogo" alt="logo"/>
                </header>
                <ul class="nav justify-content-center">
                    <li class="nav-item"><Link to={"./UI01_Inicio.js"} className="link"> Inicio </Link></li>
                    <li class="nav-item"><Link to={"./Login.js"} className="link"> Login </Link></li>
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="./UI02_Productos.js"> Menú </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="./Login"> Iniciar sesión </a></li>
                </ul>
            </div>
            /*<nav class="navbar navbar-expand-md navbar-dark bg-primary">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"><a class="nav-link" href="#"> Inicio </a></li>
                        <li class="nav-item active"><a class="nav-link" href="#"> Code </a></li>
                        <li class="nav-item active"><a class="nav-link" href="#"> Izquierda </a></li>
                        <li class="nav-item active"><a class="nav-link" href="#"> Link </a></li>
                        <li class="nav-item active"><a class="nav-link" href="#"> Link </a></li>
                    </ul>
                </div>
                <div class="mx-auto order-0">
                    <img class="navbar-brand mx-auto" src={logo}/>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <span class="navbar-toggler-icon"></span>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Right</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>*/
        )
    }
}

export default Inicio;