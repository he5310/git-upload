// 合法身份证号验证
export const regExpID = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

//合法手机号验证
export const regExpPhone =  /^1[34578]\d{9}$/;

// 真实姓名验证(必须是汉字，字母)
export const regExpRealName = /^[a-zA-Z\u4e00-\u9fa5]+$/;