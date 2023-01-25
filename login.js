window.addEventListener('load', ()=> {
    const form=document.querySelector('#loginPro');
    const username = document.querySelector('#Username');
    const password = document.querySelector('#password');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const user= username.value;
        const pass = password.value;


  if(user == "arif" && pass == "123"){
           window.location.href="index.html";
        }
        else{
            alert("failed");
            username.value="";
            password.value="";

        }
        
          
    });
    
});