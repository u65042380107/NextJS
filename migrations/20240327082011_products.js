/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.integer('product_id',8).primary().unsigned().notNullable();
        table.string('product_name',100).notNullable();
        table.float('product_price',10,2).notNullable();
        table.timestamps(true,true);
    
      })
    };
    
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    exports.down = function(knex) {
      return knex.schema.dropTableIfExists('products')
};
