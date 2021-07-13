import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdpFEKs5jbyklv4QnyLnDODOYBlfFJt2o",
  authDomain: "todolist-a481a.firebaseapp.com",
  projectId: "todolist-a481a",
  storageBucket: "todolist-a481a.appspot.com",
  messagingSenderId: "18909986402",
  appId: "1:18909986402:web:c76b6b9fde5b66139f9b3b",
  measurementId: "G-BJ9YKDXRPZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
