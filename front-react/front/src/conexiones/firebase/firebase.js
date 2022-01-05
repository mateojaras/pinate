import firebase from "firebase/compat";

const config = {
  apiKey: "AIzaSyAQsUfwmNz31TZz6lGn36-7lvtwYUtSo_s",
  authDomain: "pinate-4c766.firebaseapp.com",
  projectId: "pinate-4c766",
  storageBucket: "pinate-4c766.appspot.com",
  messagingSenderId: "1089792947087",
  appId: "1:1089792947087:web:b1be559d845b2ccc2491fa",
  measurementId: "G-WJ8HJQMYBB"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
