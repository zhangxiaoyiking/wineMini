import ajax from "./baseAjax.js"

export default {
  /* 首页 开始*************************************************/

  //首页banner
  banner: (params, method) => ajax("index/Banner", params),
  //职业梦想导师
  teacher: (params, method) => ajax("index/Teacher", params),
  //线下课程
  lesson: (params, method) => ajax("lesson", params),
  //梦想导图
  dream: (params, method) => ajax('index/Dream', params),
  //线下课程
  couser: (params, method) => ajax('index/Couser', params),

  /* 首页 结束*************************************************/



  /* 首页 干货游学   开始*************************************************/
  documentList: (params, method) => ajax('document/lists', params),
  /* 首页 干货游学   结束*************************************************/



  // 严选
  // 红人推荐
  recommendList: (params, method) => ajax('shop/RecommendList', params),



}