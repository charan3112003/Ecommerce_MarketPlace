// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF7k-KX49r84uWXBgDK9__QnMzhYZVPOc",
  authDomain: "rcm-challenge.firebaseapp.com",
  databaseURL: "https://rcm-challenge-default-rtdb.firebaseio.com",
  projectId: "rcm-challenge",
  storageBucket: "rcm-challenge.appspot.com",
  messagingSenderId: "247777168636",
  appId: "1:247777168636:web:f7b96ddda70dfc23c39b79",
  measurementId: "G-EFQX9TVG4E"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth =firebase.auth();

  export {db,auth};