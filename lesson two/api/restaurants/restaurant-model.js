
const db = require('../../data/dbConfig');
module.exports = {
  find,
  findById,
  findByOwner,
  add,
  remove,
  update
};
function find() {
  return db('restaurants');
}
function findById(id) {
    return db('restaurants')
        .where({ id })
        .first();
    }
function findByOwner(owner) {
    return db('restaurants')
        .where({ owner })
        .first();
    }
    async function add(rating) {
        const [id] = await db('ratings').insert(rating);
        return findById(id);
      
}
function remove(id) {
    return db('restaurants')
        .where({ id })
        .del();
}
function update(id, changes) {
    return db('restaurants')
        .where({ id })
        .update(changes,'*');
}