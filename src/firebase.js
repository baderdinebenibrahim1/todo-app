  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNW48d8xWiBIPVCxfPHNKHvXfc21wXw2M",
    authDomain: "todo-app-2f6b1.firebaseapp.com",
    projectId: "todo-app-2f6b1",
    storageBucket: "todo-app-2f6b1.appspot.com",
    messagingSenderId: "1082554970026",
    appId: "1:1082554970026:web:58a540ad91da616e4b85d3",
  });

  const db = firebaseApp.firestore();

  export default db;