
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectDB = require('./db'); // Import the MongoDB connection function
const Product = require('./models/Product');
const Order = require('./models/Order');
const path = require('path');
// Connect to MongoDB
connectDB(); // Call the function to connect to the database


const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

//napp.use('/', routes);
const productRoutes = require('./routes/product'); // Import the route file
app.use('/products', productRoutes); // Define the route for accessing products
const Booking = require('./models/Booking'); // Import the Booking model

app.get('/', async (req, res) => {
    console.log("Home page route hit");  // Add this for debugging

    try {
        const products = await Product.find();
        res.render('pages/index', { result: products });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
// Route to serve the booking page
app.get('/book', (req, res) => {
    res.render('pages/book');  // Render the 'book.ejs' page
});

// Route for booking form submission
app.post('/book', async (req, res) => {
    const { name, phone, email, guests, date, time } = req.body;
  
    try {
      // Save the booking details to the database
      const newBooking = new Booking({
        name,
        phone,
        email,
        guests,
        date, // Ensure this is a Date object
        time,
      });
      await newBooking.save();
      const formattedDate = new Date(date);

  
      // Render the confirmation page
      res.render('pages/booking-confirmation', { name, date: formattedDate, time, guests });
    } catch (error) {
      console.error('Error saving booking:', error);
      res.status(500).send('An error occurred while booking the table.');
    }
  });
 // Route to render the booking confirmation page
app.get('/booking-confirmation', (req, res) => {
    res.render('pages/booking-confirmation', {
      booking: null, // Optional: Render an empty page if directly accessed
    });
  }); 
  



function calculateTotal(cart, req) {
   let total = 0;
   for (let item of cart) {
       total += (item.sale_price || item.price) * item.quantity;
   }
   req.session.total = total;
   return total;
}


function isProductInCart(cart, id) {
   return cart.some(item => item._id === id);
}


app.get('/', async (req, res) => {
   try {
      const products = await Product.find();
      if (!products || products.length === 0) {
        console.log('No products found in the database');
      } else {
        console.log('Products found:', products);
      }
      res.render('pages/products', { result: products });
    } catch (err) {
      console.log('Error while fetching products:', err);
      res.status(500).send('Error fetching products');
    }
});


app.post('/add_to_cart', (req, res) => {
   const { id, name, price, sale_price, quantity, image } = req.body;
   const product = { id, name, price, sale_price, quantity: parseInt(quantity), image };

   if (req.session.cart) {
       const cart = req.session.cart;
       //if (!cart.find(p => p.id === id)) {
         if (!isProductInCart(cart, id)) {
           cart.push(product);
       }
   } else {
       req.session.cart = [product];
   }

   calculateTotal(req.session.cart, req);
   res.redirect('/cart');
});

app.get('/cart', (req, res) => {
   const cart = req.session.cart || [];
   const total = req.session.total || 0;
   res.render('pages/cart', { cart, total });
});



app.post('/remove_product', (req,res) => {

   const id = req.body._id;
    let cart = req.session.cart || [];
    
    cart = cart.filter(item => item._id !== id);
    req.session.cart = cart;

    calculateTotal(cart, req);
    res.redirect('/cart');

});

app.post('/edit_product_quantity', (req, res) => {
   const id = req.body._id;
   const quantity = parseInt(req.body.quantity);
   const increase = req.body.increase_product_quantity;
   const decrease = req.body.decrease_product_quantity;
   const cart = req.session.cart || [];

  // for (let item of cart) {
   cart.forEach(item => {
       if (item._id === id) {
           if (increase && item.quantity > 0) {
               item.quantity += 1;
           }
           if (decrease && item.quantity > 1) {
               item.quantity -= 1;
           }
       }
   });

   calculateTotal(cart, req);
   res.redirect('/cart');
});

app.get('/checkout', (req, res) => {
   const total = req.session.total || 0;
   res.render('pages/checkout', { total });
});



app.post('/place_order', async (req, res) => {
    const { name, email, phone, city, address } = req.body;
    const cost = req.session.total;
    const products_ids = req.session.cart.map(item => item._id);
    const id = Date.now(); // Unique order ID

    try {
        const newOrder = new Order({
            id,
            cost,
            name,
            email,
            phone,
            city,
            address,
            products_ids,
        });

        await newOrder.save(); // Save the new order to MongoDB
        req.session.order_id = id;
        res.redirect('/payment');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


app.get('/payment', (req, res) => {
   const total = req.session.total || 0;
   res.render('pages/payment', { total });
});

app.get('/verify_payment', async (req, res) => {
   const { transaction_id } = req.query;
   const order_id = req.session.order_id;

   try {
       //await Order.findByIdAndUpdate(order_id, { status: 'paid' });
       await Order.findOneAndUpdate({ id: order_id }, { status: 'paid' });
       res.redirect('/thank_you');
   } catch (err) {
       console.error(err);
       res.status(500).send('Server Error');
   }
});

app.get('/thank_you', (req, res) => {
   const order_id = req.session.order_id;
   res.render('pages/thank_you', { order_id });
});

app.get('/single_product', async (req, res) => {
   const id = req.query._id;
   try {
       const product = await Product.findOne({ id });
       res.render('pages/single_product', { result: product });
   } catch (err) {
       console.error(err);
       res.status(500).send('Server Error');
   }
});


app.get('/about', (req, res) => {
   res.render('pages/about');
});

app.listen(8080, () => console.log('Server running on port 8080'));