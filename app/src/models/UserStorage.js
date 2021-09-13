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
    
    
    // getUsers의 .then() 부분에 들어갈 코드 (가독성 위해 분리) -> private으로.
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }
    
    
    // private 객체 반환 메서드
    static getUsers(isAll, ...fields) {
        
        return fs.readFile("./src/database/users.json")  // readFile에서 현재 경로는 메인파일(app.js)가 존재하는 경로이다.
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })  // 메서드 성공시 수행내용
        .catch((err) => console.error(err));  // 메서드 실패시 오류처리 수행내용
               
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
    static async save(userInfo) {
        
        const users = await this.getUsers(true);  // 기존 파일 내용 읽어오기
        
        // 입력된 데이터가 이미 존재하는지 확인 : 없으면 추가
        if (users.id.includes(userInfo.id)) {
            throw "ID already exists!";  // Error("str")로 throw하면 객체로 넘어가므로 걍 
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        fs.writeFile("./src/database/users.json", JSON.stringify(users));
        
        return {success: true};
        
    };

}

module.exports = UserStorage;