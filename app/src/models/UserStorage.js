"use strict"

// 파일시스템 import
const fs = require("fs").promises;

class UserStorage {
    
    // getUserInfo의 .then() 부분에 들어갈 코드 (가독성 위해 분리) -> private으로.
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
            
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);  // [id, pw, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];  // id[idx], pw[idx], name[idx]
            return newUser;
        }, {});

        return userInfo;
    }
    
    // private 객체 반환 메서드
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    
    // 로그인 해당 계정 정보 전달 메서드
    static getUserInfo(id) {
        
        return fs.readFile("./src/database/users.json")  // readFile에서 현재 경로는 메인파일(app.js)가 존재하는 경로이다.
        .then((data) => {
            return this.#getUserInfo(data, id);
        })  // 메서드 성공시 수행내용
        .catch((err) => console.error(err));  // 메서드 실패시 오류처리 수행내용
            
    };

    
    // 회원가입 시 유저 정보 저장 메서드
    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return { success : true };
    };

}

module.exports = UserStorage;