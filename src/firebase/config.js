import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT2hhKp65ev9Lev4BhYDhpl_JWCxt74Lg",
  authDomain: "food-delivery-3d3f4.firebaseapp.com",
  projectId: "food-delivery-3d3f4",
  storageBucket: "food-delivery-3d3f4.appspot.com",
  messagingSenderId: "401853917489",
  appId: "1:401853917489:web:74125977ff3ef34bd6a810",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

//Init firestore
const db = getFirestore();

//Init auth
const auth = getAuth(app);

export { db, auth };
