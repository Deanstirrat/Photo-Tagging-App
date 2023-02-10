import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: 'AIzaSyBmaSxsda6gBEFi2aNnCSUMex4fMsp4K9c',
  authDomain: 'photo-tagging-app-efe03.firebaseapp.com',
  projectId: 'photo-tagging-app-efe03',
  storageBucket: 'photo-tagging-app-efe03.appspot.com',
  messagingSenderId: '30747541632',
  appId: '1:30747541632:web:bff64451d920d81d03a665',
  measurementId: 'G-SD6DKVG50W',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

root.render(
  <React.StrictMode>
    <App db={db} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
