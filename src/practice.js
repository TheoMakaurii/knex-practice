require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

knexInstance.from('shopping_list')
  .select('*')
  .then(result=> {
      console.log(result)
  });

// function searchByProductName(searchTerm){
// knexInstance
//     .select('product_id', 'name', 'price', 'category')
//     .from('amazong_products')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then(result=> {
//         console.log(result)
//     });
// };

// searchByProductName('holo')

// function paginateProducts(page){
//     const productPerPage=10;
//     const offset = productPerPage * (page-1);

//     knexInstance
//         .select('product_id', 'name', 'price', 'category')
//         .from('amazong_products')
//         .limit(productPerPage)
//         .offset(offset)
//         .then(result=> {
//             console.log(result)
//         });
//     };
    
//     paginateProducts(2)

// function getProductsWithImages(){
//     knexInstance
//         .select('product_id', 'name', 'price', 'category')
//         .from('amazong_products')
//         .whereNotNull('image')
//         .then(result=> {
//             console.log(result)
//         });
//     };
    
//     getProductsWithImages()

// function mostPopularVideoForDays(days){

//     knexInstance
//         .select('video_name', 'region')
//         .count('date_viewed AS views')
//         .where(
//             'date_viewed',
        //     '>',
        //     knexInstance.raw(`now() - '?? days' :: INTERVAL`, days)
        // )
//         .from('whopipe_video_views')
//         .groupBy('video_name', 'region')
//         .orderBy([
//             {column: 'region', order: 'ASC' },
//             {column: 'views', order: 'DESC' },

//         ])
//         .then(result=> {
//             console.log(result)
//         })
// }

// mostPopularVideoForDays(30)