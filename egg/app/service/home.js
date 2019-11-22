"use strict";

const Service = require("egg").Service;

class HomeService extends Service {
  async login(username, password) {
    return await this.app.mysql.query(
      `select * from list where username=? and password=?`,
      [username, password]
    );
  }
  // 增加
  async add(
    username,
    password,
    address,
    phone,
    idCard,
    create_time,
    age,
    flag
  ) {
    return this.app.mysql.insert("list", {
      username,
      password,
      address,
      phone,
      idCard,
      create_time,
      age,
      flag,
    });
  }
  // 删除
  async del(id) {
    return await this.app.mysql.delete("list", { id });
  }
  // 查询
  async sel(id) {
    return this.app.mysql.get("list", { id });
  }
  // 修改
  async upt(id, username, password, address, phone, idCard, age, flag) {
    const obj = {
      username,
      password,
      address,
      phone,
      idCard,
      create_time:new Date(),
      age,
      flag,
    };
    const options = {
      where: {
        id,
      },
    };
    return this.app.mysql.update("list", obj, options);
  }
}

module.exports = HomeService;
