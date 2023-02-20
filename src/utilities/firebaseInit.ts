import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT8snRnUWYe3iXgIjfM1SeXKS679ckyu0",
    authDomain: "messenger-app-52743.firebaseapp.com",
    projectId: "messenger-app-52743",
    storageBucket: "messenger-app-52743.appspot.com",
    messagingSenderId: "854075892121",
    appId: "1:854075892121:web:4b531f867f76c10f52f308",
    measurementId: "G-THPHL4SLB4"
  };
  
export const app = initializeApp(firebaseConfig);