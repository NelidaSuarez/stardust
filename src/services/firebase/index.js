
import { initializeApp } from "firebase/app";
import {getFirestore} from  'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAVxNAOvLQCaS5XAJuoN2t_fsUsH0qpwX4",
  authDomain: "retroshop-73de5.firebaseapp.com",
  projectId: "retroshop-73de5",
  storageBucket: "retroshop-73de5.appspot.com",
  messagingSenderId: "276552368507",
  appId: "1:276552368507:web:b1d99c81d68481eecf7dde"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);