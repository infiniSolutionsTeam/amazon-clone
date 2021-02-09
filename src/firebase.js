import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgc_55_79IDy_eSBs5aXOog0o_FsWRA1w",
    authDomain: "clone-abb72.firebaseapp.com",
    projectId: "clone-abb72",
    storageBucket: "clone-abb72.appspot.com",
    messagingSenderId: "515442945419",
    appId: "1:515442945419:web:319fafe338e1e5b73ad38e",
    measurementId: "G-ER6JK3CQLW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();

  const auth = firebase.auth();


  export {db,auth}