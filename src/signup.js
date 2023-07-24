
 

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import {getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDKfcDho-V6z4TO9qTZZ8XfN5jk4zAiqvI",
    authDomain: "dengey-77444.firebaseapp.com",
    projectId: "dengey-77444",
    storageBucket: "dengey-77444.appspot.com",
    messagingSenderId: "920336204167",
    appId: "1:920336204167:web:7538703652910832969322"
  };


 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getDatabase(app)
  const auth = getAuth()


let username= document.getElementById("Username")
let password= document.getElementById("Password")
let submit = document.getElementById("submit")
console.log("is it working?")

submit.addEventListener('click',Submit)

function Submit(){
    set(ref(db, "user/"+ username.value),{
        name: username.value,
        password: password.value
    })
    .then(()=>{
        alert("Data added successfully");
    })
    .catch((error)=>{
        alert(error);
    })
}
















// document.getElementById("submit").addEventListener('click',function(e){
//     set(ref(db,'user/'+document.getElementById("Username").value),{
//         username: document.getElementById("Username").value,
//         password: document.getElementById("Password").value
//     })
// })


// window.sain= function(){
//     // let obj= {
//     //     username: username.value,
//     //     password:password.value
//     // }
//     set(ref(db,'user/'+username.value),{
//         username: username.value,
//         password: password.value
//     })
//     .then(function(){
//         alert("user created")
//     })
//     .catch(function(){
//         alert("Error creating the User!")
//     })
// }


// window.sain=function(){
//     let obj = {
//         Username:Username.value,
//         Password:Password.value
//     }
//     createUserWithEmailAndPassword(auth,obj.Username,obj.Password)
//     .then(function(success){
//         Swal.fire(
//             'New user Created',
//             'hahan :)',
//             'success'
//           )
//           console.log(`welcome ${obj["Username"]}`)
//     })
//     .catch(function(err){
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops',
//             text: 'something went wrong'
//           })
//           console.log(`${obj["Username"]} doesn't exist`)
//     })
// }















// window.sain= function(){
//     if(v_email(email)== false || v_password(password)==false){
//        return 
//     }
//     auth.createUserWithEmailAndPassword(email,password)
//     .then(function(){
//         let user = auth.currentUser
//         let database_ref= database.ref()

//         let user_data={
//             email:email,
//             password:password
//         }
//         database_ref.child('./users/' + user.uid).set(user_data)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }

// function v_email(email){
//     let expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if(expression.test(email)==true){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function v_password(password){
//     if(password<6){
//         return false
//     }
//     else{
//         return true
//     }
// }

