import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo5c0eGTDE-5y5nxdmalshssMsJqrkJaQ",
  authDomain: "pimpmywall-e5c17.firebaseapp.com",
  projectId: "pimpmywall-e5c17",
  storageBucket: "pimpmywall-e5c17.appspot.com",
  messagingSenderId: "735398216103",
  appId: "1:735398216103:web:bb1b4c01cac79c5b843682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);