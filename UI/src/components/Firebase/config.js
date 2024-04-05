
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw4ZHFZsQ8fqOlnN2wJK7fk7fQGeOxlPE",
  authDomain: "netflix-4f5a1.firebaseapp.com",
  projectId: "netflix-4f5a1",
  storageBucket: "netflix-4f5a1.appspot.com",
  messagingSenderId: "523479860754",
  appId: "1:523479860754:web:fa436d3f7e442c6941facb",
  measurementId: "G-8VJ56Z48PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)