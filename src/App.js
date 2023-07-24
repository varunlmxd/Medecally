import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getDatabase,ref,set,get,child,push } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
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
//---------------------------//
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;
import {  useEffect ,useState } from "react";
import { StoreContent } from "./components/StoreContent";
import { Retrieve } from "./components/StoreContent";
import SimpleStorageArtifact from './build/contracts/SimpleStorage.json'
import Web3 from "web3";
import TruffleContract from "truffle-contract";
import React from "react";
window.phoneNumber = "";
function App() {
    
    const contracts = {};
    const load =""
    var SimpleStorage
    const [Number,setNumber] = useState({
      data:"",
      message: "Loading data..."});
    const [Account,setAccount] = useState("")
    const [loadingState, setLoadingState] = useState({
      isLoading:false,
      message: "Loading data..."
    });
    
    const [Contract,setContract] = useState({
      d: SimpleStorageArtifact,
      message: "unchanged"
    });
    const initWeb3 = async () => {
      let web3;
  
    
      if (typeof window.ethereum !== 'undefined') {
        console.log("idhar")
        web3 = new Web3(window.ethereum);
        try {
          console.log("idhar1")
          await window.ethereum.enable();
          console.log("idhar2")
        } catch (error) {
          console.log('User denied account access...');
          return false;
        }
      }
      else if (typeof window.web3 !== 'undefined') {
        console.log("idhar3")
        web3 = new Web3(window.web3.currentProvider);
        console.log("idhar4")
      }
      else {
        console.log("idhar5")
        window.alert('Please connect to Metamask.');
        return false;
      }
      console.log("a")
      return true;
    };
  
    const loadAccount = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        console.log("No accounts found. Please make sure MetaMask is connected and has granted access.");
        return false;
      }
      const account = accounts[0];
      setAccount(account)
      return true;
    };
  
    const loadContract = async () => {
      console.log("done");
      SimpleStorage = (SimpleStorageArtifact);
      console.log(SimpleStorage);
      contracts.simpleStorage = TruffleContract(SimpleStorage);
      contracts.simpleStorage.setProvider(window.web3.currentProvider);
  
      // Hydrate the smart contract with values from the blockchain
      setContract({
        d: await contracts.simpleStorage.deployed(),
        message : "changed"
        });
      return true;
      
    };
  
    const doall = async () => {
  
      if(await initWeb3())
        if(await loadAccount())
          if(await loadContract()){
      setLoadingState({
        isLoading: true,
        message: "Data loaded"
        
      });
    }
    };
  
    useEffect(() => {
      doall();
    }, []);
      
    console.log("here man")
    const [fileHash, setFileHash] = useState("");
    const [url, setUrl] = useState(null);
    const drawform = async()=>{
      const formElement = document.createElement("form");
      formElement.setAttribute("id", "otpForm");
  
      // Create the label element
      const labelElement = document.createElement("label");
      labelElement.setAttribute("for", "otp");
      labelElement.textContent = "Enter OTP:";
  
      // Create the input element
      const inputElement = document.createElement("input");
      inputElement.setAttribute("type", "text");
      inputElement.setAttribute("id", "otp");
      inputElement.setAttribute("name", "otp");
      inputElement.setAttribute("required", true);
  
      // Create the button element
      const buttonElement = document.createElement("button");
      buttonElement.setAttribute("type", "submit");
      buttonElement.textContent = "Verify OTP";
  
      // Append the elements to the form
      formElement.appendChild(labelElement);
      formElement.appendChild(inputElement);
      formElement.appendChild(buttonElement);
  
      // Append the form to the "formContainer" div in the DOM
      const formContainer = document.getElementById("formContainer");
      formContainer.appendChild(formElement);
    };
    //

    const phone = async(num)=>{
      const numb = num
      setNumber({
        data:numb,
        message: "data uploaded"});
        console.log(Number)
      }
    const upload = async (file) => {
      
      const id = document.getElementById('id-input').value;
         await drawform();
         const h3 = document.createElement("h3");
         h3.setAttribute("id", "upload");
        var upload = document.getElementById('display-button');
        h3.innerHTML="Uploading";
        upload.insertAdjacentElement("beforebegin",h3);
      
      
      
        //-----------------
        
        try{
          get(child(ref(db), "user/" + id))
          .then((snapshot) => {
              const user = snapshot.val();
              console.log(user)
              console.log(user.phno)
              const num = user.phno
                console.log("number",num)
              phone(num);
              console.log(phoneNumber)
          })
          .catch((err)=>{
            console.log(err)
          });
          console.log(Number)
      const response = await sendVerificationCode(Number.data);
      alert('Verification code sent successfully.');
  
      // Wait for the OTP form submission
      const otpPromise = new Promise((resolve) => {
        otpForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const otp = document.getElementById('otp').value;
          resolve(verifyOTP(Number.data, otp));
        });
      });
  
      // Wait for OTP verification response
      const otpVerificationResponse = await otpPromise;
      if (otpVerificationResponse.status === 'approved') {
        alert('OTP verification successful!');
          console.log("do it",Contract.d,Contract.message)
          const ciid = (await StoreContent(file)).toString();
          await Contract.d.set(ciid,{ from : Account});
          push(ref(db, "user/"+id+"/link/"),{ciid
        })
        .then(()=>{
            alert("Data added successfully");
        })
        .catch((error)=>{
            alert(error);
        });
          console.log("oo")
          
          console.log("oo1")
          h3.innerHTML="Uploaded";
          upload.insertAdjacentElement("beforebegin",h3);
          console.log("oo2")
          const newUrl = `https://ipfs.io/ipfs/${ciid}`;
          setFileHash(ciid);
          // setUrl(newUrl);
          return newUrl;
        } else {
          alert('Invalid OTP. File upload failed.');
          return null;
        }
        
        }
        catch(err){
          console.log(err)
        }
        
        
        
     
    };
  
    const handleUpload = async (event) => {
      event.preventDefault();
      const fileInput = document.getElementById("file-input");
      const file = fileInput.files[0];
      if (file) {
        
        const fileUrl = await upload(file);
        console.log(fileUrl);
        if (fileUrl) {
          console.log(fileUrl);
          // Perform any necessary actions after successful upload
        } else {
          console.log("File upload failed.");
          // Handle upload failure
        }
        const elementToRemove = document.getElementById('otpForm');
        elementToRemove.remove();
        const elementRemove = document.getElementById('upload');
        elementRemove.remove();
        
      }
    };
  
    const handleDisplayFile = async () => {
      
      try {
        //loading
        const number = await Contract.d.number();
        const Hash = await Contract.d.data(number);
        const files = await Retrieve(Hash);
        //loaded

        var objectURL
        for (const file of files) {
        console.log(`${file.cid} ${file.name} ${file.size}`);
        objectURL='https://ipfs.io/ipfs/' +Hash + '/' + file.name
        console.log(objectURL)
        }
        setFileHash(Hash);
        setUrl(objectURL);
        
        // render image
        const img = document.createElement("img");
  
        img.src = objectURL;
        console.log(img);
        var a = document.createElement("a");
        a.setAttribute('href',objectURL);
        a.innerHTML = "IPFS LINK"
        document.body.appendChild(a);
        document.body.appendChild(img);
      } catch (error) {
        console.log("Error displaying file:", error);
      }
    };
    ///////// otp/////
    const verifyOTP = async (phoneNumber, otp) => {
      const accountSid = 'AC937b3e2f7995168120da60de1a945c5d';
      const authToken = 'd457ce54cab30f363a7dab49e851843a';
      const serviceSid = 'VA3454262308606e1747aec2167728b601';

      try {
        const response = await fetch(`https://verify.twilio.com/v2/Services/${serviceSid}/VerificationCheck`, {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: `To=${encodeURIComponent(phoneNumber)}&Code=${encodeURIComponent(otp)}`
        });

        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error('Error verifying OTP:', error);
        throw error;
      }
    }

    const sendVerificationCode = async(phoneNumber) => {
      const accountSid = 'AC937b3e2f7995168120da60de1a945c5d';
      const authToken = 'd457ce54cab30f363a7dab49e851843a';
      const serviceSid = 'VA3454262308606e1747aec2167728b601';

      try {
        const response = await fetch(`https://verify.twilio.com/v2/Services/${serviceSid}/Verifications`, {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: `To=${encodeURIComponent(phoneNumber)}&Channel=sms`
        });

        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error('Error sending verification:', error);
        throw error;
      }
    }
    ///////otp/////
    if (loadingState.isLoading) {
      return (
        <div>
            <h1>IPFS Storage</h1>
            <h2 id="account">Address: {Account}</h2>
            <br></br>
            <form id="DbID">
            <p>Enter ID</p>
            <input type="text" id="id-input" required />
            </form>
            <form id="upload-form" onSubmit={handleUpload}>
                <input type="file" id="file-input" required />
                <button type="submit">Upload</button>
            </form>
            <p id ="formContainer"></p>
            <form id="connect">
                  <button id="display-button" onClick={handleDisplayFile}>
                    Display Image
                  </button>
            </form>

          <h3 id ="link"></h3>     
        </div>
      );
  }
    else{
      return <div><h1>Connect to MetaMask Wallet</h1></div>;
    }
  }

  export default App;