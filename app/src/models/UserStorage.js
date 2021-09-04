"use strict"

class UserStorage {
    
    // 계정 정보
    static #users = {
        id: ["song", "young", "min"],
        pw: ["1234!", "1234@", "1234#"],
        name: ["a", "b", "c"],
    };

    //private 객체 반환 메서드
    static getUsers(...fields) {
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);  // [id, pw, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];  // id[idx], pw[idx], name[idx]
            return newUser;
        }, {});
        
        return userInfo;
    }

}

module.exports = UserStorage;