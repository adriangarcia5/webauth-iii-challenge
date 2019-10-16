exports.seed = function(knex) {
  return knex("restricted")
    .truncate()
    .then(() => {
      return knex("restricted").insert([
        { secret_info: "You Shall Not Pass!" },
        { secret_info: "Damn, you passed lol" }
      ]);
    });
};