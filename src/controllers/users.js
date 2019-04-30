export default class UsersController {
  constructor(mysqlController) {
    // needed to execute queries on database
    this.mysql = mysqlController;
  }

  createUser(req, res) {
    const { name, email, password } = req.body.user;
    const query = `insert into user(name, email, password) values ('${name}', '${email}', '${password}')`;

    this.mysql
      .executeQuery(query)
      .then(rows => {
        // DO SOMETHING WITH YOUR RESPONSE
        res.send(rows);
      })
      .catch(err => console.error(err));
  }

  getAllUsers(req, res) {
    const query = 'select * from user';

    this.mysql
      .executeQuery(query)
      .then(rows => {
        // DO SOMETHING WITH YOUR RESPONSE
        res.send(rows);
      })
      .catch(err => console.error(err));
  }
}
