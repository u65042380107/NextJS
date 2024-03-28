/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('students', function(table){
    // id
    // name
    // age
    table.bigInteger('id',11).primary().unsigned();
    table.string('name',100).notNullable().unique();
    table.integer('age',3).notNullable().unsigned();
    table.timestamps(true,true);

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students')
};
