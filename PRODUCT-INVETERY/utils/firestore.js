
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
    signOut,

   } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


  import { getFirestore,
    setDoc, 
    doc, getDoc, updateDoc, addDoc, collection, deleteDoc, getDocs
    
 } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"; 
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAEQw8Bzn6Ta90sa_l-G-vo5VVfJp1JAd0",
    authDomain: "inventory-management-sys-23651.firebaseapp.com",
    projectId: "inventory-management-sys-23651",
    storageBucket: "inventory-management-sys-23651.appspot.com",
    messagingSenderId: "1046449599105",
    appId: "1:1046449599105:web:0969ab4ea89e9cec5f5380",
    measurementId: "G-5WMV7HRGNR"
  };

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth =getAuth(app);
  const db = getFirestore(app);

  console.log(db);
  

  export {  auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    db,
    doc,
    setDoc, getDoc, updateDoc, addDoc, collection, deleteDoc, getDocs
  };