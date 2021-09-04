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
        console.log(newUsers);
        return newUsers;
    };

}

module.exports = UserStorage;