function singPage(){
    window.location.href='/assets/html/singup.html'
}



function login() {
    const loginUsername = document.getElementById('login_email').value;
    const loginPassword = document.getElementById('login_password').value;

    // Kaydedilmiş kullanıcı bilgilerini kontrol et
    const savedUsername = localStorage.getItem(`email`);
    const savedPassword = localStorage.getItem(`password`);



    // Kullanıcı adı ve şifre doğrulama
    if (loginUsername == savedUsername && loginPassword == savedPassword) {
        window.location.href='/assets/html/home.html'
     
    } else {
        alert('Kullanıcı adı veya şifre hatalı!');
    }
}