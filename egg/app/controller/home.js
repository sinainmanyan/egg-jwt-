'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async login()
  {
    const {ctx,service}=this;
    const {username,password}=ctx.request.body
    let result=await service.home.login(username,password)
    const token = this.app.jwt.sign({ username,password }, this.app.config.jwt.secret,{expiresIn:"1h"});
    
    let hmacPwd = ctx.helper.hmac(username,password);
    console.log(hmacPwd)
    ctx.body={
      code:0,
      result,
      token
    }
  }
  //增加
  async add()
  {
    const {ctx,service}=this;
    const {username,password,address,phone,idCard,age,flag}=ctx.request.body
   const create_time=new Date()
    let result=await service.home.add(username,password,address,phone,idCard,create_time,age,flag)
    ctx.body={
      result
    }
  }
  //删除
  async del()
  {
    const {ctx,service}=this
    const {id}=ctx.request.body
    console.log(id)
    let result=await service.home.del(id)
    ctx.body={
      result

    }
  }
  //查询
  async sel()
  {
    const {ctx,service}=this
    const {id}=ctx.request.body
    let result=await service.home.sel(id)
    ctx.body={
      result
    }
  }
  //修改
  async upt()
  {
    const {ctx,service}=this
    const {id,username,password,address,phone,idCard,age,flag}=ctx.request.body
    let result=await service.home.upt(id,username,password,address,phone,idCard,age,flag)
    ctx.body={
      result
    }
  }
}

module.exports = HomeController;
