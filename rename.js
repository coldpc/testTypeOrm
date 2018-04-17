let fs=require('fs');
var iconv = require('iconv-lite');

function itarDir() {
    let fileDirectory = "./src/entity/entities";
    if(fs.existsSync(fileDirectory)){
        fs.readdir(fileDirectory, function (err, files) {
            if (err) {
                console.log(err);
                return;
            }
            
            var count = files.length;
            var results = {};
            files.forEach(function (filename) {
                fs.readFile(fileDirectory + "/" + filename, function (err, data) {
                    // results[filename] = data;
                    if (data) {
                        var str = iconv.decode(data, 'utf-8');
                        createFile(filename, str);
                    }
                    // count--;
                    // if (count <= 0) {
                    //     对所有文件进行处理
                    // }
                });
            });
        });
    }
}


function createFile(tableName, str) {
    tableName = tableName.replace(".ts", "");
    let newTableName = tranCamelCase(tableName, true);
    str = str.replace(tableName, newTableName);
    str = replacePrefix(str);
    fs.writeFileSync(`./src/entity/entities/${newTableName}.ts`, str);
}

function tranCamelCase(str, isStart) {
    if (isStart) {
        let $0 = str.charAt(0);
        if ((/[a-z]/i).test($0)) {
            str = str.replace($0, $0.toUpperCase());
        }
    }
    
    return str.replace(/_(\w)/g, function ($0, $1) {
        if ((/[a-z]/i).test($1)) {
            return $1.toUpperCase();
        } else {
            return $0;
        }
    });
}

function replacePrefix(str) {
    let reg = /@Column\({1}[^@]*\){1}\n{1}[^@]*_(\w){1}/gi;
    let result = str;
    let temp;
    let text = reg.exec(str);
    while(text !== null){
        temp = text[0];
        index = temp.lastIndexOf("\n");
          
        let str1 = temp.substring(index + 1);
        let str2 = temp.substring(0, index + 1) + tranCamelCase(str1);
        result = result.replace(temp, str2);

        console.log(text);
        text = reg.exec(str);
    }
    return result;
}

function tranCamelCase(str, isStart) {
    if (isStart) {
        let $0 = str.charAt(0);
        if ((/[a-z]/i).test($0)) {
            str = str.replace($0, $0.toUpperCase());
        }
    }
    
    return str.replace(/_(\w)/g, function ($0, $1) {
        console.log($0, $1);
        if ((/[a-z]/i).test($1)) {
            return $1.toUpperCase();
        } else {
            return $0;
        }
    });
}

itarDir();