
const Karakterler = ["1234567890", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "!@#$%^&*()_+"];


function check(sifre){
    if(sifre.length<8){
        return false
    }
    for(let i=0; i<Karakterler.length; i++){
        let karakterler_grubu=Karakterler[i]
        if(!karakterler_grubu.split('').some(function(karakter){
            return sifre.includes(karakter)
        })){
            return false
        }
    }
    return true;
}
const sing_input = document.getElementById("sing_input_ps");
const userPassword = sing_input.value;
if(check(userPassword)){
    console.log("şifre geçerli")
}else{
    console.log("geçerli değil")
}

const btn_singpas=document.getElementById("btn_sing");

btn_singpas.addEventListener("click", function(){
    const sing_input = document.getElementById("sing_input_ps");
    const userPassword = sing_input.value;

    if (check(userPassword)) {
        console.log("şifre geçerli");
    } else {
        console.log("geçerli değil");
    }
})