exports.seed = function(knex, Promise) {
  return knex('restaurants').insert([
    { name: 'Qoobey', location: 'Laba dhagax ', owner_id: 1, created: '2022-03-30', updated: '2022-03-30' },
    { name: 'Garad', location: 'Digfer', owner_id: 2, created: '2022-03-30', updated: '2022-03-30' },
    { name: 'Tufax', location: 'guleed', owner_id: 1, created: '2022-03-30', updated: '2022-03-30' }
  ]);
};