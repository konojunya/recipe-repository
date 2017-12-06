// requireの設定
const mysql = require('mysql');
 
// MySQLとのコネクションの作成
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database: 'recipe'
});
 
// 接続
connection.connect();
 
// userdataの取得
connection.query('SELECT * from user;', function (err, rows, fields) {
  if (err) { console.log('err: ' + err); }

  console.log('name: ' + rows[0].username);
  console.log('id: ' + rows[0].id);
});
 
 
// 接続終了
connection.end();