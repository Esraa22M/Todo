// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC17z8IlylSGeIMhGZpY6AbxzWf0kC4Q04",
//   authDomain: "todos-36596.firebaseapp.com",
//   databaseURL: "https://todos-36596-default-rtdb.firebaseio.com",
//   projectId: "todos-36596",
//   storageBucket: "todos-36596.appspot.com",
//   messagingSenderId: "759710567511",
//   appId: "1:759710567511:web:44482aa2122f4964392712",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);











import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: “<your_api_key>“,
  authDomain: “<your_auth_domain>“,
  projectId: “<your_project_id>”,
  storageBucket: “<your_Storage_bucket>“,
  messagingSenderId: “<sender_id>“,
  appId: “<your_app_id>“,
  measurementId: “<your_measurement_id>“
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function quickstart() {
  const querySnapshot = await getDocs(collection(db, "cities"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
quickstart();












