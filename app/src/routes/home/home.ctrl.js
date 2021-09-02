// Controller

"use strict";

// 계정 정보
const users = {
    id: ["song", "young", "min"],
    pw: ["1234!", "1234@", "1234#"],
};

// 렌더링 관련 함수 객체
const output = {
    
    // 루트로 접근할 시의 콜백함수 (단순 렌더링)
    root_ctrl: (req, res) => {
        res.render("home/index");      // views폴더의 home/index 파일을 화면에 띄움
    },

    // 로그인 화면으로 접근할 시의 콜백함수 (단순 렌더링)
    login_ctrl: (req, res) => {
        res.render("home/login");      // views폴더의 home/login 파일을 화면에 띄움
    }
}

// 로그인 처리 API 관련 함수 객체
const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                return res.json({
                    success: true,
                })
            }
        }
        
        return res.json({
            success: false,
            msg: "login failed!"
        })
    }
}



// Object로 export
module.exports = {
    output,     // output 객체를 사용하기 위해 export
    process     // process 객체를 사용하기 위해 export
};