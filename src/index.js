import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDauilrcAdl9hCBalKpuRRdFeRIt6t8ZPU",
  authDomain: "user-collections-d1693.firebaseapp.com",
  projectId: "user-collections-d1693",
  storageBucket: "user-collections-d1693.appspot.com",
  messagingSenderId: "592633671032",
  appId: "1:592633671032:web:f94b229023e35529596c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
