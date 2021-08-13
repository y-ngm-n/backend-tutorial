// 라우팅

"use strict";  // ECMAScript를 준수한다는 것을 명시

// < 모듈 >
const express = require("express");
const router = express.Router();      // routing을 따로 분리할 때 사용

const ctrl = require("./home.ctrl");  // home.ctrl 모듈을 import

// 
router.get("/", ctrl.root_ctrl);        // root에 접근 시 응답할 동작 지정
router.get("/login", ctrl.login_ctrl);  // login 화면에 접근 시 응답할 동작 지정


// export
module.exports = router;  // router를 외부에서 사용할 수 있도록 export