////////////////////// index.html içerisinde girilen mail adresinin kontrolü için kuruldu //////////////////////////////////////

// iki tane input var onun için nasıl yaptığımıza bak 
function checkEmailValidity() {
    let emailInput = document.getElementById('email');
    let isValid = isValidEmail(emailInput.value);

    if (isValid) {
        emailInput.classList.remove('invalid');//yeşili sil
        emailInput.classList.add('valid');//kırmızı yap
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        let message=document.getElementById('massage');
        message.textContent="Lütfen e-posta adresinizi girin"
        message.style.marginTop="5px"
    }
    emailInput.style.backgroundColor = 'transparent';
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



// girilen mail adresi localstorage da kayıtlı olup olmadığını yoklayarak singup ya da logine gönderiyor
const btn_start = document.getElementById("btn_start");

btn_start.addEventListener("click", function () {
    const Useremail = document.getElementById("email").value;

    function login() {
        const savedUsername = localStorage.getItem(`email`);

        if (Useremail !== savedUsername) {
            window.location.href = '/assets/html/singup.html';
        } else {

             window.location.href = '/assets/html/login.html';
        }
    }

    // login fonksiyonunu çağır
    login();
});

