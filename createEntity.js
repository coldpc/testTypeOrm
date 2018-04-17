var mysql = require("mysql");
var fs = require("fs");
var conn = mysql.createConnection({
    "host": "rm-uf62110sw47boc9tg2o.mysql.rds.aliyuncs.com",
    "port": 3306,
    "user": "pccold",
    "password": "WHQkey0825",
    "database": "hao_ke_db"
});



(function () {
    conn.connect();
    const sql = 'select * from information_schema.columns where table_name = ';
    const tables = ["bc_access", "bc_article", "bc_article_cat", "bc_bonus_log", "bc_config", "bc_level_log", "bc_levels", "bc_logs",
        "bc_node", "bc_role", "bc_role_user", "bc_score_log", "bc_slide", "bc_user", "sys_functions", "sys_login_log", "sys_role_function"];
    const length = tables.length;
    var index = 0;
    getTableConfig(tables[0]);
    
    function getTableConfig(tableName) {
        conn.query(sql + "'" + tableName + "'", function (err, rows, fields) {
            tableName = tranCamelCase(tableName, true);
            let path = "./src/entity";
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path);
            }
            fs.writeFileSync(`${path}/${tableName}.ts`, ctrlTableConfig(tableName, rows));
            if (index < length - 1) {
                index ++;
                getTableConfig(tables[index]);
            }else {
                conn.end();
            }
            
        });
    }
    
    
    function ctrlTableConfig(tableName, rows) {
        let imports = "";
        let row, tpl = [];
        for (let i = 0; i < rows.length; i++) {
            row = rows[i];
            row.tsType = getDataType(row.COLUMN_NAME, row.DATA_TYPE);
            if (row.COLUMN_KEY === "PRI") {
                row.columnSign = `
    @PrimaryGeneratedColumn('uuid')`;
                if (imports.indexOf("PrimaryGeneratedColumn") === -1) {
                    imports += " PrimaryGeneratedColumn,"
                }
            } else {
                let configArray = [];
                configArray.push("type: '" + row.DATA_TYPE + "'");
                configArray.push("name: '" + row.COLUMN_NAME + "'");
                if (row.IS_NULLABLE !== "NO" && !row.COLUMN_KEY) {
                    configArray.push("nullable: true");
                }
                
                if (!!row.COLUMN_COMMENT) {
                    configArray.push("comment: '" + row.COLUMN_COMMENT + "'");
                }
                if (row.COLUMN_DEFAULT !== null) {
                    if (typeof row.COLUMN_DEFAULT !== 'string') {
                        configArray.push("default: " + row.COLUMN_DEFAULT);
                    } else {
                        configArray.push("default: '" + row.COLUMN_DEFAULT + "'");
                    }
                }
                if (row.COLUMN_KEY === "MUL") {
                    if (imports.indexOf("PrimaryColumn") === -1) {
                        imports += " PrimaryColumn,"
                    }
                    row.columnSign = `
    @PrimaryColumn({
        ${configArray.join(", ")}
    })`;
                } else {
                    row.columnSign = `
    @Column({
        ${configArray.join(", ")}
    })`;
                }
            }
            tpl.push(`
            ${row.columnSign}
    ${row.tsType}`);
        }
        
        return `
import {Entity, ${imports} Column} from "typeorm";
@Entity()
export class ${tableName} {${tpl.join("\n")}
}`;
    }
    
    function getDataType(columnName, type) {
        let tsType;
//         `int, tinyint, smallint, mediumint, bigint, decimal, float, double, real,
// datetime, time, timestamp, character, varchar, char, tinyblob, tinytext,
// mediumblob, mediumtext, blob, text, longblob, longtext, date, year, enum, json`
        
        if ("date, datetime, time".indexOf(type) > -1) {
            tsType = 'Date';
        }else if ("timestamp, int, tinyint, smallint, mediumint, bigint, decimal, float, double, real".indexOf(type) > -1){
            tsType = 'number';
        }else {
            tsType = 'string'
        }
        return tranCamelCase(columnName) + ": " + tsType + ";";
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
})();