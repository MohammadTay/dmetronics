import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyDWP_jPU_Rp8Pker4bojPPFU1PrVCR7Nng",
    authDomain: "chat-a41eb.firebaseapp.com",
    projectId: "chat-a41eb",
    storageBucket: "chat-a41eb.appspot.com",
    messagingSenderId: "460159705878",
    appId: "1:460159705878:web:de13dc55b78f05bde3a637"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)
