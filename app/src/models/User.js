"use strict"

// 모듈
const UserStorage = require("./UserStorage");

// 클래스
class User {
    
    // 생성자
    constructor(body) {
        this.body = body;
    }
    
    // 로그인 인증 메서드
    login() {
        
        const body = this.body;
        const { id, pw } = UserStorage.getUserInfo(body.id);
        
        if (id) {
            if (id === body.id && pw === body.pw) {
                return {success : true};
            }
            return {success : false, msg : "check password!"};
        }
        return {success : false, msg : "ID not exist!"};
    }
}

module.exports = User;