const form = document.querySelector('#form')

form.addEventListener("submit", (e)=>{
    e.preventDefault()
   const name = e.target.username.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
    const user = {
        name,
        email,
        password
    };
    console.log(user);
})