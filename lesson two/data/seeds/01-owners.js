
exports.seed = function(knex, Promise) {
  return knex('owners').insert([
    { name: 'mesut mahed', email: "mesut@gmail.com", created: '2022-03-30', updated: '2022-03-30' },
    { name: 'siyaad abikar', email: "siyaad@gmail.com", created: '2022-03-30', updated: '2022-03-30' },
    { name: 'nuurto farah', email: "nuurtina@gmail.com", created: '2022-03-30', updated: '2022-03-30' }
  ]);
};