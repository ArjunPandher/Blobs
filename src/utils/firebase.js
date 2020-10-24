import * as firebase from 'firebase';
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyC1QsaE9sxHOauqXONroABPtPGr8woZrzc",
    authDomain: "divhacks2020.firebaseapp.com",
    databaseURL: "https://divhacks2020.firebaseio.com",
    projectId: "divhacks2020",
    storageBucket: "divhacks2020.appspot.com",
    messagingSenderId: "299183223205",
    appId: "1:299183223205:web:7b0054a805399df07bb84c",
    measurementId: "G-DJ0CT6X8MC"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };
