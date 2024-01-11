import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAdruhS5C0N_pisiC3dgefb_j2SQQizuUE",
    authDomain: "nwitter-reloaded-93e46.firebaseapp.com",
    projectId: "nwitter-reloaded-93e46",
    storageBucket: "nwitter-reloaded-93e46.appspot.com",
    messagingSenderId: "118315011843",
    appId: "1:118315011843:web:b86b0105273cde801d2336",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
