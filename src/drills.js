require ('dotenv').config();
const knex = require('knex');

const knexInstance=knex({
    client: 'pg',
    connection: process.env.DB_URL
})


// function searchForItem(string){
// knexInstance
//   .select('name', 'price', 'category')
//   .from('shopping_list')
//   .where('name', 'ILIKE', `%${string}%`)
//   .then(result=> {
//       console.log(result)
//   });
// }

// searchForItem('fish');

// function logPage(number){

//     const itemsPerPage =6;
//     const pageNubmer = (number -1) *itemsPerPage;

//     knexInstance
//         .select('name', 'price')
//         .from('shopping_list')
//         .offset(pageNubmer)
//         .limit(itemsPerPage)
//         .orderBy('price', 'ASC')
//         .then(result=>{
//             console.log(result)
//         })
// }

// logPage(5)

// function addedAfter(daysAgo){
//     knexInstance
//         .select('name', 'price', 'date_added')
//         .from('shopping_list')
//         .where(
//                 'date_added', 
//                 '>',
//                 knexInstance.raw(`now() - '?? days' :: INTERVAL`, daysAgo)
//             )
//         .then(result =>{
//             console.log(result)
//         })
// }

// addedAfter(1)

function categoryCost(){
    knexInstance
        .select('category')
        .sum('price as total')
        .from('shopping_list')
        .groupBy('category')
        .then(result=>{
            console.log(result)
        })
}

categoryCost()

