import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBr771qO6J95zQH4znIA96TpZS_oyLYSFI",
  authDomain: "webmarket-adaa8.firebaseapp.com",
  databaseURL: "https://webmarket-adaa8-default-rtdb.firebaseio.com",
  projectId: "webmarket-adaa8",
  storageBucket: "webmarket-adaa8.appspot.com",
  messagingSenderId: "181138618326",
  appId: "1:181138618326:web:bfa698ce5dee42bdb31677",
  measurementId: "G-0CZB1PLF3L"
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };