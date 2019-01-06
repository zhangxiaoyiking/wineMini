import ajax from "./baseAjax.js"

export default {
    /* 首页 求学*/

    //首页banner
    banner: (params,method) => ajax("api/banner",params),
    //职业梦想导师
    teacher: (params, method) => ajax("api/teacher", params),
    //线下课程
    lesson: (params, method) => ajax("api/lesson", params)


}