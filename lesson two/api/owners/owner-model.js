const db = require('../../data/dbConfig');


module.exports = {
  find,
  findById,
  add,
  remove,
  update
};
function find() {
    return db('owners');
    }
function findById(id) {
    return db('owners')
    .where({ id })
    .first();
    }
    async function add(owner) {
        const [id] = await db('owners').insert(owner);
        return findById(id);
      }
        async function remove(id) {
        const owner = await findById(id);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        await db('owners').where({ id }).delete();
        return owner;
    }
    async function update(id, changes) {
        const owner = await findById(id);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        await db('owners').where({ id }).update(changes);
        return findById(id);
    }
