import mysql from 'mysql'

export default class MysqlController {
  constructor() {
    /* Your mysql host information */
    this.mysqlConfig = {
      host: 'host-url-or-ip-address',
      port: 3306,
      user: 'your-user',
      password: 'supersecret-password',
      database: 'database-name',
    }
  }

  /* 
    The main function.
    Here you can execute any sql query you want. All you need is
    instantiate a new MysqlController.
  */
  executeQuery(query) {
    return new Promise((resolve, reject) => {
      const conn = mysql.createConnection(this.mysqlConfig);
      
      conn.query(query, (err, results) => {
        err ? reject(err) : resolve(results);
        conn.end();
      });
    }) 
  }
}