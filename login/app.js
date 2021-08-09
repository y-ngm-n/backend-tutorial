// 서버의 중심 파일


"use strict";  // ECMAScript를 준수한다는 것을 명시


// < 모듈 >
const express = require("express");  // express 모듈을 가져옴
const app = express();               // express를 실행시켜 app라는 변수에 넣어둠
                                     // -> app라는 이름으로 실제로 사용하게 됨

const PORT = 3000;                   // 포트 번호 상수로 선언


// < 라우팅 >
const home = require("./routes/home");  // routing 분리해둔 js파일 읽어서 불러옴 (index.js)


app.use("/", home);  // 미들웨어를 등록해주는 메서드.(?)
                     // "/"로 접근하면 home(index.js)으로 넘어가서 해당 콜백함수를 동작시킴


// < view 관리 >
app.set("views", "./views");    // views를 세팅, view를 관리할 파일이 저장될 폴더의 경로를 지정
app.set("view engine", "ejs");  // html 코드를 해석할 엔진을 정해줌(ejs : 가장 많이 쓰이는 view 엔진)


// app export
module.exports = app;  // 분리시킨 모듈에서 app를 사용하기 위해 export












// < http로 서버 띄우는 코드 >

// const http = require("http"); // http 모듈을 가져옴
// const app = http.createServer((req, res) => {
//
//     res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"}) // 한글 설정
//
//     if (req.url === '/') {res.end("여기는 루트입니다.");} 
//     else if (req.url === "/login") {res.end("여기는 로그인 화면입니다.");}
//
// });
//
// app.listen(3001, () => {
//    console.log("http로 가동된 서버입니다."); 
// });




