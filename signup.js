let id_check = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
var pass_check = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
let stnum_check=new RegExp('[0-9]{9,10}');


document.querySelector('#signup').addEventListener('click',()=>{
    if (!id_check.test(document.getElementById('InputID1').value))
        alert("id format incorrect!");
    else if (document.getElementById('InputPasswordCheck').value!=document.querySelector('#InputPassword1').value)
        alert("password check incorrect");
    else if (!pass_check.test(document.querySelector('#InputPassword1').value))
        alert("password format incorrect")
});

document.querySelector('#cancel').addEventListener('click',()=>{
    location.href='login.html';
});

