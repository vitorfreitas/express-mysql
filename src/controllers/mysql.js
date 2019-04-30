import mysql from 'mysql';
import credentials from '../../config/credentials.json';

class MysqlController {
  constructor() {
    /* Host information on credentials.json file */
    this.mysqlConfig = credentials.production;
  }

  executeQuery(query) {
    return new Promise((resolve, reject) => {
      const conn = mysql.createConnection(this.mysqlConfig);

      conn.query(query, (err, results) => {
        err ? reject(err) : resolve(results);
        conn.end();
      });
    });
  }
}

export default new MysqlController();
