const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(() => {
      return knex("users").insert([
        {
          username: "admin",
          name: "zaratain",
          password: bcrypt.hashSync("password"),
          image_url:
            "https://avatars0.githubusercontent.com/u/52297070?s=460&v=4",
          department: "admin"
        },
        {
          username: "agarc5",
          name: "Adrian Garcia",
          password: bcrypt.hashSync("123"),
          image_url:
            "https://avatars0.githubusercontent.com/u/52297070?s=460&v=4",
          department: "sales"
        }
      ]);
    });
};