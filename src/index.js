
  // Import the functions you need from the SDKs you need
  import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import {getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
  import App from "./App";
  import React from "react";
import ReactDOM from "react-dom/client";
  const firebaseConfig = {
    apiKey: "AIzaSyDKfcDho-V6z4TO9qTZZ8XfN5jk4zAiqvI",
    authDomain: "dengey-77444.firebaseapp.com",
    projectId: "dengey-77444",
    storageBucket: "dengey-77444.appspot.com",
    messagingSenderId: "920336204167",
    appId: "1:920336204167:web:7538703652910832969322"
  }

 
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth();

let username= document.getElementById("Username")
let password= document.getElementById("Password")
let login= document.getElementById("login")

login.addEventListener('click', Login);



  function Login() {
    const enteredUsername = username.value;
    const enteredPassword = password.value;

    // Retrieve the user data from the Realtime Database based on the entered username
    get(child(ref(db), "admin/" + enteredUsername))
        .then((snapshot) => {
            const user = snapshot.val();
            console.log(user)
            console.log(user.name)
            console.log(enteredUsername)
            console.log(enteredPassword)
            if (user && user.password === enteredPassword) {
                alert("Login successful");
                f.style.display = "none";
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(<App />); 
            } else {
                alert("Invalid username or password");
            }
        })
        .catch((error) => {
            alert("Error retrieving user data: " + error.message);
        });
}
