/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()


  await knex('students').insert([
    {id: 1, name: 'Aekkaruay',age:15},
    {id: 2, name: 'Aekkarat',age:16},
    {id: 3, name: 'Benz',age:17},
    {id: 4, name: 'JK',age:18},
    {id: 5, name: 'Rolling',age:19},
    {id: 6, name: 'json',age:20},
    {id: 7, name: 'kkkk',age:65},
    {id: 8, name: 'gggg',age:55},
    {id: 9, name: 'hhhh',age:32},
  ])
};
