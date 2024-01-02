
function loginPage(){
    window.location.href='/assets/html/login.html'
}


// const form=document.getElementById("signupForm");

// form.addEventListener("submit", async function(event){
//     event.preventDefault();

    
//     let name = document.getElementById('name').value
    
//     let surname = document.getElementById('surname').value
    
//     let email = document.getElementById('sing_input_mail').value
    
//     let password = document.getElementById('sing_input_ps').value


//     // for password

//     if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)){
//         const messageBox = document.getElementById('sonuc')
//         messageBox.innerHTML = 'sifre en az 8 karakterden ve rakam, harflerden oluşması gerekiyor'
//         return;
//     }

//     try{
//         const response = await fetch('https://jsonplaceholder.org/users',{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({firstname:name, lastname:surname, email, password})
//     })

//     const result = await response.json();

//     if(response.ok){
//         console.log(`Hoşgeldin :${name}`)
//         window.location.href = '/assets/html/login.html'
//     }else{
//         const messageBox = document.getElementById('sonuc')
//         messageBox.innerText = result.message || 'Kayıt işlemi Başarısız oldu.';
//         console.log(result.message)
//     }
// }catch(error){
//     console.log('api hatasi',error);
// }

// })



function register(){

    const name=document.getElementById("name").value;
    const surname=document.getElementById("surname").value;
    const email=document.getElementById("sing_input_mail").value;
    const password=document.getElementById("sing_input_ps").value;

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)){
                const messageBox = document.getElementById('sonuc')
                messageBox.innerHTML = 'sifre en az 8 karakterden ve rakam, harflerden oluşması gerekiyor'
                return;
            }
    if (email !== "" && password !== "" && name !=="" && surname !=="") {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        window.location.href = '/assets/html/login.html';

    } else {
        alert("Boş bırakmayınız");
    }
    
}
