let id_check = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
var pass_check = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
let stnum_check=new RegExp('[0-9]{9,10}');

document.querySelector('#InputStudentNum').addEventListener('input',()=>{
    //학번에 따라서 학과를 정해주는 코드,학과별 코드를 몰라서 임의로 했습니다.
    if (document.querySelector('#InputStudentNum').value.slice(4,7)==136)
        document.querySelector('.major').value="컴퓨터공학과";
    else if (document.querySelector('#InputStudentNum').value.slice(4,7)==123)
        document.querySelector('.major').value="기계공학과";
    else if (document.querySelector('#InputStudentNum').value.slice(4,7)==120)
        document.querySelector('.major').value="메카트로닉스학과";
    else if (document.querySelector('#InputStudentNum').value.slice(4,7)==128)
        document.querySelector('.major').value="산업디자인공학과";
    else
        document.querySelector('.major').value="학번을 다시 입력하여 주십시오.";
});



document.querySelector('#signup').addEventListener('click',()=>{
    if (!id_check.test(document.getElementById('InputID1').value)){
        alert("id format incorrect!");
        return false;
    }
    else if (!pass_check.test(document.querySelector('#InputPassword1').value)){
        alert("password format incorrect");
        return false;
    }
    else if (document.querySelector('#InputPasswordCheck').value != document.querySelector('#InputPassword1').value) {
        alert("password check incorrect");
        return false;
    }
    else if (!stnum_check.test(document.querySelector('.student-number').value)){
        alert("Student number incorrect");
        return false;
    }
    else if(stnum_check.test(document.querySelector('.student-number').value)){

    }
    else
        return true;
});


document.querySelector('#cancel').addEventListener('click',()=>{    //cancel누를 시 login페이지로 돌아감
    location.href='login.html';
});

