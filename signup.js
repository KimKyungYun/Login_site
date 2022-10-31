const id_check = new RegExp('^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
const pass_check = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
const stnum_check = new RegExp('[0-9]{10}');
const phone_check = new RegExp('\^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})');

const id = document.querySelector('#InputID1');
const password = document.querySelector('#InputPassword1');
const student_number = document.querySelector('#InputStudentNum');
const phone_number = document.querySelector('#InputPhoneNum');

document.querySelector('.enter').addEventListener('keydown', (f) => {
    if (f.keyCode == 13)//javascript에서는 13이 enter키를 의미함
        document.querySelector('#signup').click(); //formname에 사용자가 지정한 form의 name입력
});
//비밀번호 입력시 틀린 양식이면 빨갛게 표현
password.addEventListener('input', () => {
    //입력하고있는 내용이 포맷형식에 맞는 경우 검은색으로 표현.
    if (!pass_check.test(document.querySelector('#InputPassword1').value))
        password.style.color = 'tomato';
    else
        password.style.color = 'black';
});

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
//전화번호 자동 - 입력
phone_number.addEventListener('input', () => {
    phone_number.value = phone_number.value
        .replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
});


//sign up button works
document.querySelector('#signup').addEventListener('click', () => {
    //미입력 이벤트
    if (id.value == "") {
        alert('아이디 미 입력');
        id.focus();
    } else if (password.value == "") {
        alert('비밀번호 미 입력');
        password.focus();
    } else if (student_number == "") {
        alert('학번 미 입력');
        student_number.focus();
    } else if (phone_number == '') {
        alert('휴대폰 번호 미 입력');
        phone_number.focus();
    }
    //입력오류 이벤트
    else if (!id_check.test(id.value))
        alert("아이디 형식이 다릅니다.");
    else if (!pass_check.test(password.value))
        alert("비밀번호 형식이 다릅니다.")
    else if (document.querySelector('#InputPasswordCheck').value != password.value)
        alert("비밀번호가 서로 다릅니다.");
    else if (!stnum_check.test(student_number.value))
        alert("학번을 잘못 입력하였습니다.");
    else if (!phone_check.test(phone_number.value))
        alert("전화번호를 잘못 입력하였습니다.")
});

document.querySelector('#cancel').addEventListener('click', () => {    //cancel누를 시 login페이지로 돌아감
    location.href = 'login.html';
});

