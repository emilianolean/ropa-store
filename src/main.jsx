import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './NavBar.css'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdPIldvc7gVKq-8Q08TiLgmc1aFKcjp7k",
  authDomain: "ropa-store-af4a1.firebaseapp.com",
  projectId: "ropa-store-af4a1",
  storageBucket: "ropa-store-af4a1.appspot.com",
  messagingSenderId: "1091872250766",
  appId: "1:1091872250766:web:9fc1a0bf7753c0f7a6a2df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)
