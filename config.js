import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU4JDPAIJqw9flA0RPBjurRVEaZAmaB7Q",
  authDomain: "what-s-in-my-fridge-d35cd.firebaseapp.com",
  projectId: "what-s-in-my-fridge-d35cd",
  storageBucket: "what-s-in-my-fridge-d35cd.appspot.com",
  messagingSenderId: "701081508227",
  appId: "1:701081508227:web:61e6ef2fb856cf5164beb6",
  measurementId: "G-HHZ71QQF42",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
