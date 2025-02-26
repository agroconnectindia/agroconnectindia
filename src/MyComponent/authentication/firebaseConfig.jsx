// // firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth , GoogleProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyB8CudHPR5Mn6BRm4O2zQ2HnbgHt6UV0L4",
//     authDomain: "agro-connect-d025c.firebaseapp.com",
//     projectId: "agro-connect-d025c",
//     storageBucket: "agro-connect-d025c.firebasestorage.app",
//     messagingSenderId: "970063350148",
//     appId: "1:970063350148:web:6dd615dd71dacd1ae175d1",
//     measurementId: "G-VEEKTN0MF8"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider(); 


// export { auth , googleProvider };

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8CudHPR5Mn6BRm4O2zQ2HnbgHt6UV0L4",
     authDomain: "agro-connect-d025c.firebaseapp.com",
     projectId: "agro-connect-d025c",
     storageBucket: "agro-connect-d025c.firebasestorage.app",
     messagingSenderId: "970063350148",
     appId: "1:970063350148:web:6dd615dd71dacd1ae175d1",
     measurementId: "G-VEEKTN0MF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // <-- Define googleProvider

export { auth, googleProvider }; // <-- Make sure it's exported

