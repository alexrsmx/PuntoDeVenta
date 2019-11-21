import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NotLogin extends Component{

    render(){
        return(
            <div>
                <nav className="navbar">
                    <ul>
                        <li>Error, no se ha podido iniciar sesión. </li>
                    </ul>
                </nav>
                <p>El usuario no está registrado</p>
                <Link to="/"> Regresar </Link>
            </div>
        )
    }
}

export default NotLogin;