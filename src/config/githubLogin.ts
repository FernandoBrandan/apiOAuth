import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js";

const gitHubBotton = document.querySelector('#gitHubLogin')

gitHubBotton.addEventListener('click', async () => {

    const provider = new GithubAuthProvider()
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