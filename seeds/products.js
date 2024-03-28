/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('products').del()


  await knex('products').insert([
    {product_id: 1001, product_name: 'Computer',product_price:35000.50},
    {product_id: 1002, product_name: 'Smart-phone',product_price:12500.50},
    {product_id: 1003, product_name: 'TV',product_price:8900.00},
    {product_id: 1004, product_name: 'Scanner',product_price:5400.00},
    {product_id: 1005, product_name: 'Compressor',product_price:32000.00},
    {product_id: 1006, product_name: 'Smart-watch',product_price:12000.00},
    {product_id: 1007, product_name: 'Mouse',product_price:1500.00},
    {product_id: 1008, product_name: 'Keyboard',product_price:9800.00},

  ])
};
