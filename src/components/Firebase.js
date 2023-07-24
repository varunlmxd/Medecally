import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import {  useEffect ,useState } from "react";
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
function g(id){
    const [phoneNumber, setphoneNumber] = useState("")
    function f(){

      
    }
}
export const getNum= async (id) => {
    return g(id);
};
export const setLink= async (id,ciid) => {
set(ref(db, "user/"+ id),{
    link:ciid
})
.then(()=>{
    alert("Data added successfully");
})
.catch((error)=>{
    alert(error);
});
};