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
    async login() {
        
        const client = this.body;
        const { id, pw } = await UserStorage.getUserInfo(client.id);
        
        if (id) {
            if (id === client.id && pw === client.pw) {
                return {success : true};
            }
            return {success : false, msg : "check password!"};
        }
        return {success : false, msg : "ID not exist!"};
    }
    
    // 회원가입 메서드
    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch(err) {
            console.error(err);
        }  // UserStorage.save()
        
    }
}

module.exports = User;