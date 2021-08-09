// Controller

"use strict";


// 루트로 접근할 시의 콜백함수
const root_ctrl = (req, res) => {
    res.render("home/index");      // views폴더의 home/index 파일을 화면에 띄움
};

// 로그인 화면으로 접근할 시의 콜백함수
const login_ctrl = (req, res) => {
    res.render("home/login");      // views폴더의 home/login 파일을 화면에 띄움
};


// Object로 export
module.exports = {
    root_ctrl,     // root에서의 컨트롤러를 사용하기 위해 export
    login_ctrl,    // login 화면에서의 컨트롤러를 사용하기 위해 export
};