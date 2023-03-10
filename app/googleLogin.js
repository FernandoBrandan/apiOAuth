import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js";

const googleBotton = document.querySelector('#googleLogin')

googleBotton.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
        prompt: "select_account"
      });
    try {
        const userCredential = await signInWithPopup(auth, provider)

        console.log(userCredential)
        const signInModal = document.querySelector('#signInModal') 
        const myModal = bootstrap.Modal.getInstance(signInModal);
        myModal.hide(); 

    } catch (error) {
        console.log(error)
    }
})