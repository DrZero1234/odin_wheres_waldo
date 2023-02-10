import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCOrM2cMg1j9Ps3-JusJABL7nnBA88ZGEU",

  authDomain: "wheres-waldo-25db2.firebaseapp.com",

  projectId: "wheres-waldo-25db2",

  storageBucket: "wheres-waldo-25db2.appspot.com",

  messagingSenderId: "347727095636",

  appId: "1:347727095636:web:1656dd6aa40d6b0f480ac1"

};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);