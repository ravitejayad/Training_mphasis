let name=document.querySelectorAll('input')[0];
let mail=document.querySelectorAll('input')[1]
let number=document.querySelectorAll('input')[4]
let pwd=document.querySelectorAll('input')[2]
let cpwd=document.querySelectorAll('input')[3]
let gender1=document.querySelectorAll('input')[5]
let gender2=document.querySelectorAll('input')[6]
let gender3=document.querySelectorAll('input')[7]
addEventListener('submit',(e)=>{
e.preventDefault();
if (name.value.length>=8) {
    document.querySelectorAll('p')[0].innerText="Name successfully entered";
    if (mail.value.includes('@gmail.com')) {
        document.querySelectorAll('p')[1].innerText="Perfect mail id";
        if (number.value.length===10) {
            document.querySelectorAll('p')[4].innerText="valid number";
            if (pwd.value.length>=5 && validatePwd(pwd.value) ) {
                document.querySelectorAll('p')[2].innerText="strong password";
                if (cpwd.value===pwd.value) {
                    document.querySelectorAll('p')[3].innerText="password matching";
                } else {
                    document.querySelectorAll('p')[3].innerText="password mis-matching"
                    document.querySelectorAll('p')[3].style.color="red"
                }
                if (gender1.value||gender2.value||gender3.value) {
                    window.alert("successfully submited")
                }
            } else {
            document.querySelectorAll('p')[2].innerText="weak password"
            document.querySelectorAll('p')[2].style.color="red"
            }
        } else {
            document.querySelectorAll('p')[4].innerText="wrong number"
            document.querySelectorAll('p')[4].style.color="red"
        }
    } else {
        document.querySelectorAll('p')[1].innerText="invalid mail id"
    document.querySelectorAll('p')[1].style.color="red"
    }
} else {
    document.querySelectorAll('p')[0].innerText="invalid name"
    document.querySelectorAll('p')[0].style.color="red"

}
});
function validatePwd(password) {
    let char="!@#$%^&*"
    for (let i = 0; i<char.length; i++) {
       for (let j = 0; j < password.length; j++) {
        if (char[i]===password[j]) {
            return true;
        }
        
       }
        
    }
}