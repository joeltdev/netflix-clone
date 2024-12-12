import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { use } from "react";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBIP_SyevQ1FKSHZT0fAZ0PkWeQyg6glTU",
  authDomain: "netflix-clone-de7ba.firebaseapp.com",
  projectId: "netflix-clone-de7ba",
  storageBucket: "netflix-clone-de7ba.firebasestorage.app",
  messagingSenderId: "539629251427",
  appId: "1:539629251427:web:3111ac5775de99efd5c156",
  measurementId: "G-96T4NF8SST",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      auhtProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
