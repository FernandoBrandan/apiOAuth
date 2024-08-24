import { signOut } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'
import { auth } from './config/firebase.js'

const logout = document.querySelector('#logout')
logout.addEventListener('click', async () => {
    await signOut(auth)
})