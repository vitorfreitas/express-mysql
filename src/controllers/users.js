/* 
  Example of how to use mysqlController.
  First of all, you'll need to inject it directly in the constructor
  where you want to query all-the-way-up.
*/

export default class UsersController {
  constructor(mysqlController) {
    this.mysql = mysqlController;
  }

  createUser(req, res) {
    const {
      age,
      name,
      email,
    } = req.body;
    const query = `insert into users(name, age, email) values ('${name}', ${age}, '${email}')`

    this.mysql.executeQuery(query).then(rows => {
      // DO SOMETHING WITH YOUR RESPONSE
      res.send(rows);
    })
    .catch(err => console.error(err))
  }

  getAllUsers(req, res) {
    const query = 'select * from users';

    this.mysql.executeQuery(query).then(rows => {
      // DO SOMETHING WITH YOUR RESPONSE
      res.send(rows);
    })
    .catch(err => console.error(err))
  }
}