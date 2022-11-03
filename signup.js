const id_check = new RegExp('^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
const pass_check = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,20}$');
const stnum_check = new RegExp('^20[0-2]{1}[0-9]{1}[0-9]{6}');
const phone_check = new RegExp('\^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})');
let submit_check=[false,false,false,false,false];

const signup_form=document.querySelector('#signup-form');
const id = document.querySelector('#InputID');
const password = document.querySelector('#InputPassword');
const password_check=document.querySelector('#InputPasswordCheck');
const student_number = document.querySelector('#InputStudentNum');
const phone_number = document.querySelector('#InputPhoneNum');

//학번에 따라서 학과를 정해주는 코드,학과별 코드를 몰라서 임의로 했습니다.
student_number.addEventListener('input', () => {
    if (document.querySelector('#InputStudentNum').value.slice(4, 7) == 136)
        document.querySelector('.major').value = "컴퓨터공학과";
    else if (document.querySelector('#InputStudentNum').value.slice(4, 7) == 123)
        document.querySelector('.major').value = "기계공학과";
    else if (document.querySelector('#InputStudentNum').value.slice(4, 7) == 120)
        document.querySelector('.major').value = "메카트로닉스학과";
    else if (document.querySelector('#InputStudentNum').value.slice(4, 7) == 128)
        document.querySelector('.major').value = "산업디자인공학과";
    else
        document.querySelector('.major').value = "";
});
//전화번호 자동 '-' 입력
phone_number.addEventListener('input', () => {
    phone_number.value = phone_number.value
        .replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
});
//아이디입력오류 경고문구
id.addEventListener('blur',()=>{
    if (!id_check.test(id.value))
        document.querySelector('#id_alert').innerText="이메일형식으로 아이디를 작성해주세요";
    else {
        document.querySelector('#id_alert').innerText = "";
        submit_check=true;
    }
});
//비밀번호입력오류 경고문구
password.addEventListener('blur',()=>{
    if(!pass_check.test(password.value))
        document.querySelector('#password_alert').innerText="형식이 틀렸습니다.(8~20글자 숫자,영어,특수 문자 조합)";
    else {
        document.querySelector('#password_alert').innerText = " ";
        submit_check[1]=true;
    }
});
//비밀번호 확인이 서로 다른경우
password_check.addEventListener('blur',()=>{
    if (password_check.value!=password.value)
        document.querySelector('#pw_check_alert').innerText = "비밀번호가 일치하지 않습니다";
    else {
        document.querySelector('#pw_check_alert').innerText = " ";
        submit_check[2]=true;
    }
});
//학번입력오류
student_number.addEventListener('blur',()=>{
    if (!stnum_check.test(student_number.value))
        document.querySelector('#stnum_alert').innerText="학번을 잘못 입력하셨습니다.";
    else {
        document.querySelector('#stnum_alert').innerText = "";
        submit_check[3]=true;
    }
});
//전화번호입력오류
phone_number.addEventListener('blur',()=>{
    if (!phone_check.test(phone_number.value))
        document.querySelector('#phonenum_alert').innerText = "전화번호를 잘못 입력하셨습니다.";

    else{
        document.querySelector('#phonenum_alert').innerText="";
        submit_check[3]=true;
    }
});

//sign up button works
document.querySelector('#signup').addEventListener('click', () => {
    //미입력 이벤트
    if (id.value == "") {
        alert('아이디 미 입력');
        id.focus();
    }
    else if (password.value == "") {
        alert('비밀번호 미 입력');
        password.focus();
    }
    else if (student_number == "") {
        alert('학번 미 입력');
        student_number.focus();
    }
    else if (phone_number == '') {
        alert('휴대폰 번호 미 입력');
        phone_number.focus();
    }
    else{
        if (pass_check.every((i)=>{i==true;}))
            document.querySelector('#signup-form').reset();
    }
});

document.querySelector('#cancel').addEventListener('click', () => {    //cancel누를 시 login페이지로 돌아감
    location.href = 'login.html';
});

