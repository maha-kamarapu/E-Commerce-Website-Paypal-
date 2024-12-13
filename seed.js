const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/your_database_name', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.log('Connection error', err);
  });
  const seedProducts = async () => {
    await Product.deleteMany({});
  
const products = [
    
    
    // Add more products as needed
    {name: 'Chicken Cheese Burger',description:'The burger buns are prepared with chicken patty ,cooked with BBQ sauce, and topped with salad leaves.',price:39.99,sale_price:25.99,quantity:0,image:'f7.png',category:'burger'},
{name:'Chicken Club Sandwich',description:'This sandwich features lettuce, bacon, tomato, chicken, and garlic parmesan herb butter, butter pickles.',price:35.99,sale_price:25.99,quantity:0,image:'ccs.png\r\n',category:'sandwich'},
{name:'Arrabiata pasta',description:'A pasta dish prepared with a fiery hot sauce made with tomatoes, olive oil, garlic, and red chili peppers.',price:25.99,sale_price:null,quantity:0,image:'f9.png',category:'pasta'},
{name:'Margherita Pizza',description:'A pizza featuring a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, olive oil, and salt.',price:20.99,sale_price:15.99,quantity:0,image:'f3.png',category:'pizza'},
{name:'Fries',description:'Thinly sliced potatoes are deep-fried till they are crisp on all sides and then sprinkled with salt and pepper.',price:15.99,sale_price:12.99,quantity:0,image:'o6.png',category:'fries'},
{name:'Mexican-style Burrito',description:'A meal stuffed with seasoned rice, tangy mexican salsa, grilled fajitas, sauteed spicy chicken, sour cream, cucumber and cheese.',price:20.99,sale_price:17.99,quantity:0,image:'b.png',category:'burrito'},
{name:'Chicken Cheese Dog',description:'This dish combines the flavors of juicy, grilled chicken and creamy, melted cheese, nestled inside a soft and fluffy bun',price:25.99,sale_price:18.99,quantity:0,image:'hd.png',category:'hotdog'},
{name:'Chocolate shake',description:'A delightful treat that combines the smoothness of creamy milk with the rich and indulgent flavors of chocolate.',price:15.99,sale_price:10.99,quantity:0,image:'chos.png',category:'beverage'},
{name:'Lemonade',description:'A refreshing citrus beverage made from fresh lemons, water, and sugar, offering a tangy and thirst-quenching flavor.',price:15.99,sale_price:10.99,quantity:0,image:'lmn.png',category:'beverage'},
{name:'Lava Cake',description:'A delectable dessert that features a warm and gooey chocolate center enclosed within a delicate cake exterior.',price:12.99,sale_price:7.99,quantity:0,image:'cl.png',category:'dessert'}

];
await Product.insertMany(products);
  console.log('Database seeded with products');
};

seedProducts().then(() => {
  mongoose.connection.close();
});
