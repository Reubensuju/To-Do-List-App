const firebaseConfig = {
    apiKey: "AIzaSyAIBHuJcnfGqe763fiiaZ0-xWUqgCBzxg4",
    authDomain: "to-do-list-app-rsv.firebaseapp.com",
    projectId: "to-do-list-app-rsv",
    storageBucket: "to-do-list-app-rsv.appspot.com",
    messagingSenderId: "1054402900781",
    appId: "1:1054402900781:web:b06433a5df8094a452d9a4",
    measurementId: "G-88NG46SQQF"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();