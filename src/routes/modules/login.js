const crypto = require('../../utils/crypto');
const routerMapController = require('../routerMapController');
const pwdKey = "a_d@aC712shh12";

// 用户登录
module.exports.execute = function (res, userData) {
    let _tk_user_id = crypto.md5(userData.id + "");
    let expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 100);  //100天失效
    let _tk_time = expireDate.getTime();
    let _tk_token = crypto.md5(pwdKey + _tk_user_id + pwdKey + _tk_time);

    res.cookie('_tk_user_id', _tk_user_id, {expires: expireDate, path: routerMapController.basePath});
    res.cookie('_tk_time', _tk_time, {expires: expireDate, path: routerMapController.basePath});
    res.cookie('_tk_token', _tk_token, {expires: expireDate, path: routerMapController.basePath});
    return userData;
};

// 插入日志
module.exports.insertLog = function (res, userData, call) {
    let id = userData.id;
    let ip = haoKe.getClientIP(res);
    let body = {
        userId: id,
        date: new Date(),
        ip: ip
    };

    let isExitSql = 'select id from sys_login_log where user_id = :userId';
    haoKe.db.query(isExitSql, body, function (error, results, fields) {
        if (error) {
            return call(error, results, fields);
        }

        if (results.length === 0) {
            let sql = "INSERT INTO `sys_login_log` " +
                    "(`user_id`, `login_ip`, `login_date`, `create_date`, `create_by`, `last_updated_by`, `last_updated_date`) " +
                    "VALUES (:userId, :ip, :date, :date, :userId, :userId, :date)";
            haoKe.db.query(sql, body, function (error, results, fields) {
                call(error, results, fields);
            });

        } else {
            let row = results[0];
            body.id = row.id;
            console.log(results, body);
            let sql = "update sys_login_log SET login_date = :date, login_ip = :ip, last_updated_by = :userId, last_updated_date = :date where id = :id";
            haoKe.db.query(sql, body, function (error, results, fields) {
                call(error, results, fields);
            });
        }
    });
};


module.exports.checkIsLogin = function (res) {
    let cookies = res.cookies;
    let _tk_user_id = cookies._tk_user_id;
    let _tk_time = cookies._tk_time;
    let _tk_token = cookies._tk_token;
    return !!_tk_user_id &&
            !!_tk_time &&
            !!_tk_token &&
            _tk_token === crypto.md5(pwdKey + _tk_user_id + pwdKey + _tk_time);
};