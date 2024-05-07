// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCIt-7uD1LtJJxIXSRI6rrAODWPl7XEqT0",

  authDomain: "quantumbot-core-1a644.firebaseapp.com",

  databaseURL: "https://quantumbot-core-1a644-default-rtdb.firebaseio.com",

  projectId: "quantumbot-core-1a644",

  storageBucket: "quantumbot-core-1a644.appspot.com",

  messagingSenderId: "556544941998",

  appId: "1:556544941998:web:4cfe86f1dd35a25180723f",

  measurementId: "G-B8EYWBKW57"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
