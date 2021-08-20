import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBnmraExTbTLUJRBdvjmeseAbxyoxChnEM",

    authDomain: "assignment2-5b7cb.firebaseapp.com",

    projectId: "assignment2-5b7cb",

    storageBucket: "assignment2-5b7cb.appspot.com",

    messagingSenderId: "776253556828",

    appId: "1:776253556828:web:5842d69643abcdf279fe99",

    measurementId: "G-5F403HCQ7J"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };