// Controller

"use strict";


// 모듈
const User = require("../../models/User");

// 렌더링 관련 함수 객체
const output = {
    
    // 루트로 접근할 시의 콜백함수 (단순 렌더링)
    root_ctrl: (req, res) => {
        res.render("home/index");      // views폴더의 home/index 파일을 화면에 띄움
    },

    // 로그인 화면으로 접근할 시의 콜백함수 (단순 렌더링)
    login_ctrl: (req, res) => {
        res.render("home/login");      // views폴더의 home/login 파일을 화면에 띄움
    },
    
    // 회원가입 화면으로 접근할 시의 콜백함수 (단순 렌더링)
    register_ctrl: (req, res) => {
        res.render("home/register");
    }
}

// API 관련 함수 객체
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
}



// Object로 export
module.exports = {
    output,     // output 객체를 사용하기 위해 export
    process     // process 객체를 사용하기 위해 export
};