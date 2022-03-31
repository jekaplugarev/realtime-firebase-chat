import React, {createContext} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

const firebaseConfig = {
    apiKey: "AIzaSyAHuJt6MCs_ITSOtrswJM_WSdNeus66cE4",
    authDomain: "chat-react-c6dae.firebaseapp.com",
    projectId: "chat-react-c6dae",
    storageBucket: "chat-react-c6dae.appspot.com",
    messagingSenderId: "738056680728",
    appId: "1:738056680728:web:662a6fda7803e7e3c49a6d",
    measurementId: "G-0BLL8MMLYF"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null)

root.render(
    <Context.Provider value={{firebase, firestore, auth}}>
        <App/>
    </Context.Provider>
);
