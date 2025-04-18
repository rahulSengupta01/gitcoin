import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore


const firebaseConfig = {
    apiKey: "AIzaSyC5sJfrAcE8yQlUBkDCE0sexA1Gt9H38hY",
    authDomain: "gitcoin-a20d7.firebaseapp.com",
    projectId: "gitcoin-a20d7",
    storageBucket: "gitcoin-a20d7.firebasestorage.app",
    messagingSenderId: "148919985086",
    appId: "1:148919985086:web:094012dac7e03769738fef",
    measurementId: "G-8X2VGMM14Z"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Make sure 'db' is exported