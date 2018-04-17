const express = require('express');
const router = express.Router();
const crypto = require('../../utils/crypto');
const mysql = require("mysql");
const login = require("./login");

router.get('/query', function(req, res, next) {

    haoKe.db.getConnection(function (conn) {
        console.log(conn.escape(req.query.name));
        var sql = "SELECT * FROM bc_user where username = ?";
        conn.query(sql + req.query.name, function(err, rows, fileds){
            // 释放连接
            haoKe.dbConnectionPool.release(conn);
            if (!err) {
                res.send(rows);
            }else {
                return console.log('查询出错:' + err)
            }
        });
    });
});


// 登录操作
router.post('/login', function(req, res, next) {
    let sql = "SELECT * FROM bc_user where (id = :userId  or username = :userId) and password = :password";
    let body = req.body;
    body.password = crypto.md5(body.password);

    haoKe.db.query(sql, body, function(err, rows, fileds){
        if (!err && rows.length === 1) {
            let userData = rows[0];

            // 插入登录日志
            login.insertLog(req, userData, function (err) {
                if (!err) {
                    haoKe.success(login.execute(res, userData));
                }else {
                    next(new Error("出现未知错误！"));
                }
            });
        }else {
            next(new Error("用户名或密码错误"));
        }
    });
});



module.exports = router;
