// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCge_LJEV-V66qMIpUfWuQWOjN3_YESCKE",
//   authDomain: "todoapp-3843f.firebaseapp.com",
//   projectId: "todoapp-3843f",
//   storageBucket: "todoapp-3843f.firebasestorage.app",
//   messagingSenderId: "547916687223",
//   appId: "1:547916687223:web:fdd101aef6b925b2652372"
// };

// const app = initializeApp(firebaseConfig);






import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAoOK4tM63PJl177BSmH5Hc5STxtxtxHDk",
  authDomain: "miketodolistapp.firebaseapp.com",
  projectId: "miketodolistapp",
  storageBucket: "miketodolistapp.firebasestorage.app",
  messagingSenderId: "924580432556",
  appId: "1:924580432556:web:2acf44ee31ceb24671ed09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
