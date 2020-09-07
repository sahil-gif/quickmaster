import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB9k0yIUjgMY49GoiAoR1YkFAS45KPjlTI",
  authDomain: "wireless-buzzer.firebaseapp.com",
  databaseURL: "https://wireless-buzzer.firebaseio.com",
  projectId: "wireless-buzzer",
  storageBucket: "wireless-buzzer.appspot.com",
  messagingSenderId: "919612008593",
  appId: "1:919612008593:web:25202090e7829815aeb730",
  measurementId: "G-BT3JVLR78K"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()