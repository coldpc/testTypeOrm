let crypto = require('crypto');
let md5 = crypto.createHash('md5');

exports.md5 = function(str){ //暴露出md5s方法
    var md5 = crypto.createHash('md5');
    md5.update(str);
    str = md5.digest('hex');
    return str;
}