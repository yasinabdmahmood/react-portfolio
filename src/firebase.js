
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDsHCweuhoLGu3S_pCYWp6jxMV99UGYToM",
  authDomain: "cobalt-baton-362521.firebaseapp.com",
  projectId: "cobalt-baton-362521",
  storageBucket: "cobalt-baton-362521.appspot.com",
  messagingSenderId: "294940043435",
  appId: "1:294940043435:web:590e5b511a29b61ce06fee",
  measurementId: "G-Q6WE31G9X8"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);