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
    
    console.log(req);
}