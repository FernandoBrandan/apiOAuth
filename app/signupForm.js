import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const signUpEmail = signupForm['signUp-email'].value
    const signUpPassword = signupForm['signUp-password'].value
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)

        const signUpModal = document.querySelector('#signUpModal') 
        const myModal = bootstrap.Modal.getInstance(signUpModal);
        myModal.hide(); 

        showMessage("Correcto")

    } catch (error) {
        if(error.code  === 'auth/email-already-in-use'){
            //alert('email already in use')
        }
        showMessage("Error")
    }
})