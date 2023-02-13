import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnyrV8ZWvIMir9LyFJ6wiD9g1itS7hUsI",
  authDomain: "vue3-firebase9-d82f1.firebaseapp.com",
  projectId: "vue3-firebase9-d82f1",
  storageBucket: "vue3-firebase9-d82f1.appspot.com",
  messagingSenderId: "337811741261",
  appId: "1:337811741261:web:6ad88453060e7d017c5a04"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");
export default citiesColRef;