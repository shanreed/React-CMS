import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';



let firebaseConfig = {
    apiKey: "AIzaSyCrHjFRdsprov4-KKr5mflE5QtPNlZIOKQ",
    authDomain: "react-crm-f78c3.firebaseapp.com",
    databaseURL: "https://react-crm-f78c3.firebaseio.com",
    projectId: "react-crm-f78c3",
    storageBucket: "react-crm-f78c3.appspot.com",
    messagingSenderId: "1060285137607",
    appId: "1:1060285137607:web:549e8ccd3463b9cf0734e2",
    measurementId: "G-Y02PCKMHCP"
};
let app = firebase.initializeApp(firebaseConfig);
let db = app.firestore();
// firebase.analytics();

export function auth() {
    return app.auth();
}


export default db;
