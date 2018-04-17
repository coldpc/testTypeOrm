// api的根目录
const basePath = "/api/";

/************************配置模块******************************/
const modules = ["user"];


/*******************映射模块***********************************/
exports.init = function(app){

    var module;
    for (var i = 0; i < modules.length; i++) {
        module = modules[i];
        app.use(basePath + module, require('./modules/' + module));
    }



};
exports.basePath = basePath;