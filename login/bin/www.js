// listen (서버 띄우는 파일)

"use strict";

// app import
const app = require("../app");  // app 파일에서 export한 것을 import

const PORT = 3000;  // 포트 번호 미리 상수로 선언

// 서버 가동
app.listen(PORT, () => {
    console.log("서버 가동");  // 콜백함수 : 콘솔 로그에 메시지 띄우기
});