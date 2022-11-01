const id_check = new RegExp('^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
const pass_check = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
const id=document.querySelector('#LoginID');
const password=document.querySelector('#LoginPW');
const loginbtn=document.querySelector('#LoginBtn');

document.querySelectorAll('.enter').forEach((item) => {
    item.addEventListener('keydown', (f) => {
        if (f.keyCode == 13)//javascript에서는 13이 enter키를 의미함
            document.querySelector('#LoginBtn').click(); //formname에 사용자가 지정한 form의 name입력
    });
});

loginbtn.addEventListener('click',()=>{
   if (id.value=="")
       alert("아이디를 입력해주세요.");
   else if(password.value=="")
       alert("비밀번호를 입력해주세요.");
   else if(!id_check.test(id.value)){
       alert("아이디 형식을 확인해주세요.");
       id.focus();
   }
   else if(!pass_check.test(password.value)) {
       alert("비밀번호를 확인해주세요.");
       password.focus();
   }
});
