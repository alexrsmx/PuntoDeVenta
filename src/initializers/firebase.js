import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAPEQ-89lTVKQMylHOabAOFXLswHjpbHPs",
    authDomain: "puntodeventa-adoo.firebaseapp.com",
    databaseURL: "https://puntodeventa-adoo.firebaseio.com",
    projectId: "puntodeventa-adoo",
    storageBucket: "puntodeventa-adoo.appspot.com",
    messagingSenderId: "70334559672",
    appId: "1:70334559672:web:f2b6e9b3d54cf194000b4d",
    measurementId: "G-K299ZSWNKX"
}; 

firebase.initializeApp(config);

export default firebase;