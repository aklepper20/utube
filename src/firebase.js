import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7qTLoZWrxPImwreCe0UDC9YUAIJTwVQ4",
  authDomain: "fir-67242.firebaseapp.com",
  projectId: "fir-67242",
  storageBucket: "fir-67242.appspot.com",
  messagingSenderId: "671758303040",
  appId: "1:671758303040:web:e9b0b2e2e18ff7691ac4a5",
  measurementId: "G-B8CBQ03D3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
