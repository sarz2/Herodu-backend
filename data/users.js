const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("asdfg", 10),
    isAdmin: true,
  },
  {
    name: "Maria Björn",
    email: "maria@example.com",
    password: bcrypt.hashSync("asdfg", 10),
  },
  {
    name: "Johan Björk",
    email: "johan@example.com",
    password: bcrypt.hashSync("asdfg", 10),
  },
];

module.exports = users;
