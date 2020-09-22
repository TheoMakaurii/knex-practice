require ('dotenv').config();
const knex = require('knex');

const knexInstance=knex({
    client: 'pg',
    connection: process.env.DB_URL
})

knexInstance
  .select('name')
  .from('shopping_list')
  .where('name', 'ILIKE', '%fish%')
  .then(result=> {
      console.log(result)
  });