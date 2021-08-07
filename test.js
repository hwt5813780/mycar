//链接数据库！！！
var mysql = require('mysql');
//把数据库的密码，账号，地址，端口，表格都连接上！！
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'car'//上文说的名字
});
connection.connect(); //启动连接！！！！
//这中间的是操作！！↓（增删查改，随你开心！！！）
// 需要学数据库的代码
var  sql = 'SELECT * FROM t_admin';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();