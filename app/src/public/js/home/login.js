// login 화면의 동작 담당하는 js (login.ejs와 연결)

"use strict";

const id = document.querySelector("#id");           // id input 태그
const pw = document.querySelector("#pw");           // pw input 태그
const loginBtn = document.querySelector("button");  // 버튼 태그


loginBtn.addEventListener("click", lgn);  // 버튼 클릭할 시 lgn함수 실행

function lgn() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    
    console.log(req, JSON.stringify(req));
    
    // fetch : 데이터를 보낼 경로와 보낼 데이터(객체)를 파라미터로 지정
    fetch("/login", {
        method: "POST",  // http 메서드 중 POST 메서드로 데이터 전달해야함
        headers: {  // 보낼 데이터에 대한 설명으로 header를 작성
            "Content-Type": "application/json"  // json 데이터 전달 명시
        },
        body: JSON.stringify(req)  // req를 JSON의 문자열 형태로 변환
    })
        .then((res) => res.json())  //then 메서드로 데이터를 받아옴
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
}