const loggedoutLinks = document.querySelectorAll('.logged-out')
const loggedinLinks = document.querySelectorAll('.logged-in')

export const loginCheck = user =>{
    if(user){
        loggedoutLinks.forEach(link => link.style.display= 'none')       
        loggedinLinks.forEach(link => link.style.display = 'block')
         
    }else{
        loggedoutLinks.forEach(link => link.style.display = 'block')
        loggedinLinks.forEach(link => link.style.display = 'none')       
    }
}