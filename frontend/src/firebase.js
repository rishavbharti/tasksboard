import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC4syD40aUgkarVYvfE9Hsgh7kuZqOJ-nI",
  authDomain: "tasksboard-a18f7.firebaseapp.com",
  databaseURL: "https://tasksboard-a18f7.firebaseio.com",
  projectId: "tasksboard-a18f7",
  storageBucket: "tasksboard-a18f7.appspot.com",
  messagingSenderId: "494499801997",
  appId: "1:494499801997:web:5c12cf31d8c56321d0ebc4",
});

export const auth = app.auth(); // https://firebase.google.com/docs/reference/js/firebase.auth?authuser=0
export default app;

// Initializing firebase in an app
// firebase.initializeApp(firebaseConfig).auth();  // .auth() gets the Auth service for the default app or a given app. https://firebase.google.com/docs/reference/js/firebase.auth?authuser=0

// firebaseConfig is the web app's Firebase configuration. Available at Project settings.
