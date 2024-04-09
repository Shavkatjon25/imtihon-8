
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBi3oYPmZ0yxBMBfbXpFiLjPoyxtZjY6ZU",
  authDomain: "invoice-82fbd.firebaseapp.com",
  projectId: "invoice-82fbd",
  storageBucket: "invoice-82fbd.appspot.com",
  messagingSenderId: "351066993849",
  appId: "1:351066993849:web:ed6bced573389ac48c9768",
  databaseURL: 'https://invoice-82fbd-default-rtdb.asia-southeast1.firebasedatabase.app'
};



const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

