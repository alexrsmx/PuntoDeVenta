import React, {Component} from 'react';
import firebase from '../initializers/firebase';

import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

import NoLogin from './NoLogin';

class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);

        this.state = {
            userLoggedIn: false
        };
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){ //Hay inicio sesión
                this.setState({
                    userLoggedIn: true
                });
            }else{ //No hay inicio de sesión 
                <NoLogin/>
            }
        })
    }
    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/gmail.readonly'); //Permisos al usuario para solamente ver su información del correo. 

        firebase.auth().signInWithPopup(provider).then(result=>{
            let token = result.credential.accessToken;
        }).catch(err=>{
            <p>Para el correcto funcionamiento de la página es necesario otorgar los permisos. </p>
            console.log(err);
        })
    }

    loginButton(){
        if(this.state.userLoggedIn) return null;
        return (<Button variant="contained" onClick={this.login}>
                    Iniciar sesión con Google
                </Button>);

    }
    render(){
        return (
            <div>
                {!this.loginButton()}
            </div>
        );
    }
}

export default Login;