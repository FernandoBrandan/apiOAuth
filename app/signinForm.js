import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const loginEmail = loginForm['login-email'].value
    const loginPassword = loginForm['login-password'].value
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

        const signInModal = document.querySelector('#signInModal') 
        const myModal = bootstrap.Modal.getInstance(signInModal);
        myModal.hide(); 

        showMessage("login")

    } catch (error) {
        if(error.code  === 'auth/email-already-in-use'){
            //alert('email already in use')
        }
        showMessage("Error")
    }
})